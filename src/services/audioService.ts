// Audio & Speech Synthesis (TTS) Abstraction Layer
export interface AudioServiceOptions {
  rate?: number;
  pitch?: number;
  voiceURI?: string;
  onBoundary?: (charIndex: number, charLength?: number) => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

class AudioService {
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.isSupported()) return [];
    return window.speechSynthesis.getVoices() || [];
  }

  public stop(): void {
    if (this.isSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        console.warn('SpeechSynthesis cancel error:', e);
      }
    }
    this.currentUtterance = null;
  }

  public pause(): void {
    if (this.isSupported()) {
      window.speechSynthesis.pause();
    }
  }

  public resume(): void {
    if (this.isSupported()) {
      window.speechSynthesis.resume();
    }
  }

  public speak(text: string, options: AudioServiceOptions = {}): SpeechSynthesisUtterance | null {
    if (!this.isSupported() || !text) return null;

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = options.rate ?? 1.0;
    utterance.pitch = options.pitch ?? 1.0;

    const voices = this.getVoices();
    if (options.voiceURI) {
      const selected = voices.find(v => v.voiceURI === options.voiceURI || v.name === options.voiceURI);
      if (selected) {
        utterance.voice = selected;
      }
    }

    if (options.onBoundary) {
      utterance.onboundary = (event) => {
        options.onBoundary?.(event.charIndex, (event as any).charLength);
      };
    }

    if (options.onEnd) {
      utterance.onend = () => {
        this.currentUtterance = null;
        options.onEnd?.();
      };
    }

    if (options.onError) {
      utterance.onerror = (event) => {
        this.currentUtterance = null;
        options.onError?.(event);
      };
    }

    this.currentUtterance = utterance;
    try {
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn('SpeechSynthesis speak call error:', e);
    }

    return utterance;
  }
}

export const audioService = new AudioService();
