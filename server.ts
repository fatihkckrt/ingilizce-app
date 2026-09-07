import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', hasGeminiKey: !!process.env.GEMINI_API_KEY });
  });

  // AI Personalized Reading Text Generator
  app.post('/api/generate-reading-text', async (req, res) => {
    try {
      const { level = 'B1', topic = 'Günlük Yaşam ve İlginç Olaylar', weakWords = [] } = req.body;

      const ai = getAIClient();
      if (!ai) {
        return res.status(400).json({
          error: 'GEMINI_API_KEY bulunamadı. Lütfen AI Studio Secrets panelinden API anahtarını tanımlayın veya yerel metin ekleme seçeneğini kullanın.'
        });
      }

      const wordsNotice = Array.isArray(weakWords) && weakWords.length > 0 
        ? `ÖĞRENCİNİN ZAYIF/TEKRAR GEREKTİREN KELİMELERİ: ${weakWords.slice(0, 10).join(', ')}. Bu kelimeleri hikayede doğal bir şekilde MUTLAKA kullanmaya çalış.` 
        : '';

      const prompt = `Sen uzman bir İngilizce dil eğitmenisin.
Kullanıcı için CEFR ${level} seviyesine tam uygun, sürükleyici ve eğitici bir İngilizce okuma parçası yaz.
Konu: "${topic}".
${wordsNotice}

Kurallar:
1. Cümleler ${level} seviyesine uygun gramer ve kelime haznesiyle yazılmalı.
2. Metin 12 ile 18 cümle arasında olmalı.
3. Her bir cümlenin eksiksiz ve doğal bir Türkçe çevirisi olmalı.
4. Metnin içeriğini test eden 3 adet çoktan seçmeli (3 seçenekli) anlama sorusu hazırla. Sorular ve şıklar Türkçe olsun.
5. Kullanılan hedef kelimeleri listele.

Yanıtı SADECE ve YALNIZCA geçerli bir JSON formatında döndür:
{
  "title": "İngilizce Başlık",
  "level": "${level}",
  "sentences": [
    { "id": 1, "eng": "English sentence here.", "tr": "Burada cümlenin Türkçe çevirisi." }
  ],
  "questions": [
    {
      "q": "Metinle ilgili soru?",
      "options": ["Şık 1", "Şık 2", "Şık 3"],
      "answer": 0
    }
  ],
  "targetedWordsUsed": ["kullanılan_kelimeler"]
}`;

      const candidateModels = ['gemini-3.6-flash', 'gemini-3.5-flash-lite', 'gemini-3.8-flash', 'gemini-3.1-flash-lite'];
      let responseText: string | null = null;
      let lastError: any = null;

      for (const modelName of candidateModels) {
        try {
          console.info(`Attempting generation with model: ${modelName}`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
              temperature: 0.7,
            },
          });

          if (response && response.text) {
            responseText = response.text;
            console.info(`Successfully generated text with model: ${modelName}`);
            break;
          }
        } catch (mErr: any) {
          console.info(`Switching from ${modelName} to next fallback model...`);
          lastError = mErr;
          // Short pause before next candidate
          await new Promise(r => setTimeout(r, 600));
        }
      }

      if (!responseText) {
        if (lastError?.message && lastError.message.includes('503')) {
          throw new Error('Yapay zekâ sunucularında anlık bir yoğunluk yaşanıyor (503). Lütfen birkaç saniye sonra tekrar deneyin.');
        }
        throw new Error(lastError?.message || 'Yapay zekâ modelinden geçerli bir yanıt alınamadı.');
      }

      let cleanText = responseText.trim();
      if (cleanText.startsWith('```json')) {
        cleanText = cleanText.replace(/^```json\s*/i, '').replace(/\s*```$/, '');
      } else if (cleanText.startsWith('```')) {
        cleanText = cleanText.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }

      const parsedData = JSON.parse(cleanText);
      
      // Ensure required structure
      if (!parsedData.title || !Array.isArray(parsedData.sentences)) {
        throw new Error('Üretilen metin beklenen formata uygun değil.');
      }

      res.json({
        success: true,
        data: parsedData
      });
    } catch (err: any) {
      console.error('AI Text Generation Error:', err);
      let userFriendlyMessage = err?.message || 'Metin üretilirken bir hata oluştu.';
      try {
        if (typeof userFriendlyMessage === 'string' && userFriendlyMessage.includes('503')) {
          userFriendlyMessage = 'Gemini sunucularında anlık yoğunluk yaşanıyor (503). Lütfen birkaç saniye bekleyip tekrar deneyin.';
        }
      } catch (_) {}

      res.status(500).json({
        error: userFriendlyMessage
      });
    }
  });

  // Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
