var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);
var import_genai = require("@google/genai");
import_dotenv.default.config();
var aiClient = null;
function getAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", hasGeminiKey: !!process.env.GEMINI_API_KEY });
  });
  app.post("/api/generate-reading-text", async (req, res) => {
    try {
      const { level = "B1", topic = "G\xFCnl\xFCk Ya\u015Fam ve \u0130lgin\xE7 Olaylar", weakWords = [] } = req.body;
      const ai = getAIClient();
      if (!ai) {
        return res.status(400).json({
          error: "GEMINI_API_KEY bulunamad\u0131. L\xFCtfen AI Studio Secrets panelinden API anahtar\u0131n\u0131 tan\u0131mlay\u0131n veya yerel metin ekleme se\xE7ene\u011Fini kullan\u0131n."
        });
      }
      const wordsNotice = Array.isArray(weakWords) && weakWords.length > 0 ? `\xD6\u011ERENC\u0130N\u0130N ZAYIF/TEKRAR GEREKT\u0130REN KEL\u0130MELER\u0130: ${weakWords.slice(0, 10).join(", ")}. Bu kelimeleri hikayede do\u011Fal bir \u015Fekilde MUTLAKA kullanmaya \xE7al\u0131\u015F.` : "";
      const prompt = `Sen uzman bir \u0130ngilizce dil e\u011Fitmenisin.
Kullan\u0131c\u0131 i\xE7in CEFR ${level} seviyesine tam uygun, s\xFCr\xFCkleyici ve e\u011Fitici bir \u0130ngilizce okuma par\xE7as\u0131 yaz.
Konu: "${topic}".
${wordsNotice}

Kurallar:
1. C\xFCmleler ${level} seviyesine uygun gramer ve kelime haznesiyle yaz\u0131lmal\u0131.
2. Metin 12 ile 18 c\xFCmle aras\u0131nda olmal\u0131.
3. Her bir c\xFCmlenin eksiksiz ve do\u011Fal bir T\xFCrk\xE7e \xE7evirisi olmal\u0131.
4. Metnin i\xE7eri\u011Fini test eden 3 adet \xE7oktan se\xE7meli (3 se\xE7enekli) anlama sorusu haz\u0131rla. Sorular ve \u015F\u0131klar T\xFCrk\xE7e olsun.
5. Kullan\u0131lan hedef kelimeleri listele.

Yan\u0131t\u0131 SADECE ve YALNIZCA ge\xE7erli bir JSON format\u0131nda d\xF6nd\xFCr:
{
  "title": "\u0130ngilizce Ba\u015Fl\u0131k",
  "level": "${level}",
  "sentences": [
    { "id": 1, "eng": "English sentence here.", "tr": "Burada c\xFCmlenin T\xFCrk\xE7e \xE7evirisi." }
  ],
  "questions": [
    {
      "q": "Metinle ilgili soru?",
      "options": ["\u015E\u0131k 1", "\u015E\u0131k 2", "\u015E\u0131k 3"],
      "answer": 0
    }
  ],
  "targetedWordsUsed": ["kullan\u0131lan_kelimeler"]
}`;
      const candidateModels = ["gemini-3.6-flash", "gemini-3.5-flash-lite", "gemini-3.8-flash", "gemini-3.1-flash-lite"];
      let responseText = null;
      let lastError = null;
      for (const modelName of candidateModels) {
        try {
          console.info(`Attempting generation with model: ${modelName}`);
          const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
              responseMimeType: "application/json",
              temperature: 0.7
            }
          });
          if (response && response.text) {
            responseText = response.text;
            console.info(`Successfully generated text with model: ${modelName}`);
            break;
          }
        } catch (mErr) {
          console.info(`Switching from ${modelName} to next fallback model...`);
          lastError = mErr;
          await new Promise((r) => setTimeout(r, 600));
        }
      }
      if (!responseText) {
        if (lastError?.message && lastError.message.includes("503")) {
          throw new Error("Yapay zek\xE2 sunucular\u0131nda anl\u0131k bir yo\u011Funluk ya\u015Fan\u0131yor (503). L\xFCtfen birka\xE7 saniye sonra tekrar deneyin.");
        }
        throw new Error(lastError?.message || "Yapay zek\xE2 modelinden ge\xE7erli bir yan\u0131t al\u0131namad\u0131.");
      }
      let cleanText = responseText.trim();
      if (cleanText.startsWith("```json")) {
        cleanText = cleanText.replace(/^```json\s*/i, "").replace(/\s*```$/, "");
      } else if (cleanText.startsWith("```")) {
        cleanText = cleanText.replace(/^```\s*/, "").replace(/\s*```$/, "");
      }
      const parsedData = JSON.parse(cleanText);
      if (!parsedData.title || !Array.isArray(parsedData.sentences)) {
        throw new Error("\xDCretilen metin beklenen formata uygun de\u011Fil.");
      }
      res.json({
        success: true,
        data: parsedData
      });
    } catch (err) {
      console.error("AI Text Generation Error:", err);
      let userFriendlyMessage = err?.message || "Metin \xFCretilirken bir hata olu\u015Ftu.";
      try {
        if (typeof userFriendlyMessage === "string" && userFriendlyMessage.includes("503")) {
          userFriendlyMessage = "Gemini sunucular\u0131nda anl\u0131k yo\u011Funluk ya\u015Fan\u0131yor (503). L\xFCtfen birka\xE7 saniye bekleyip tekrar deneyin.";
        }
      } catch (_) {
      }
      res.status(500).json({
        error: userFriendlyMessage
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
