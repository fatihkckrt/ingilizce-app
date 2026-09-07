# Project Context & Agent Guidelines

## Application Overview: İngilizce Öğren (English Learning App)
This application is a comprehensive English learning platform combining:
1. **Multi-level Reading Texts:** CEFR levels (A1, A2, B1, B2) with paired sentence-by-sentence English & Turkish translations and reading comprehension quizzes.
2. **Karaoke & Speech Synthesis (TTS):** Synchronized speech playback using `window.speechSynthesis` with real-time sentence and word-level karaoke highlights.
3. **Leitner Spaced Repetition System (SRS):** 5-box spaced repetition system for saved vocabulary with review scheduling (`LEITNER_INTERVALS`), review counts, mastery tracking, and streak calculations.
4. **Interactive Dictionary & Phrase Hunter:** Instant translation tooltips, quick-add to vocabulary notebook, and external dictionary links (Google Translate, Tureng).
5. **Robust Local Persistence:** Hybrid storage using `localStorage` for user preferences/completed items and `IndexedDB` (`EnglishLearnAppDB`, store `app_store`) for scalable vocabulary state.

## Codebase Architecture
- `src/App.tsx`: Main React component managing application views, karaoke audio player, Leitner SRS study sessions, text readers, quizzes, and vocabulary lists.
- `src/data.ts`: Core data storage including `dictionary` lookup, `wordLevelMap`, `LEITNER_INTERVALS`, `levels`, `defaultTexts`, and `IndexedDB` helper functions (`idbGet`, `idbSet`, `initDB`).
- `src/index.css`: Tailwind configuration and custom styling for `.karaoke-highlight`, `.word-highlight`, `.phrase-hunter-highlight`, glassmorphism, and scrollbars.

## Critical Development Rules
- **Base Baseline:** All future user requests must be built on top of this existing codebase.
- **Preserve Existing Features:** Do not remove or regress the Leitner SRS engine, the Web Speech karaoke synchronization, the vocabulary storage, or the reading texts.
- **Incremental Modifications:** When modifying or adding features, ensure compatibility with `src/data.ts` and `src/App.tsx` data structures.
