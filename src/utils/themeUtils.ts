import React from 'react';

export interface ThemeClasses {
  container: string;
  card: string;
  header: string;
  footer: string;
}

export const getBadgeStyle = (lvl?: string): string => {
  switch(lvl) {
    case 'A1': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    case 'A2': return 'bg-blue-100 text-blue-800 border-blue-300';
    case 'B1': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
    case 'B2': return 'bg-purple-100 text-purple-800 border-purple-300';
    default: return 'bg-amber-100 text-amber-800 border-amber-300';
  }
};

export const getBoxStyle = (boxNum?: number): string => {
  switch(boxNum) {
    case 1: return 'bg-rose-100 text-rose-800 border-rose-300';
    case 2: return 'bg-orange-100 text-orange-800 border-orange-300';
    case 3: return 'bg-amber-100 text-amber-800 border-amber-300';
    case 4: return 'bg-blue-100 text-blue-800 border-blue-300';
    case 5: return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    default: return 'bg-slate-100 text-slate-700 border-slate-300';
  }
};

export const getThemeClasses = (readerTheme: string): ThemeClasses => {
  switch(readerTheme) {
    case 'sepia':
      return {
        container: 'bg-[#f7f0e1] text-[#433422]',
        card: 'bg-[#ede2cb] border-[#dfd0b4] text-[#3d2e1e]',
        header: 'bg-[#433422] text-[#f7f0e1] border-[#342718]',
        footer: 'bg-[#ede2cb] border-[#dfd0b4]'
      };
    case 'oled':
      return {
        container: 'bg-[#000000] text-[#e2e8f0]',
        card: 'bg-[#121212] border-[#262626] text-[#e2e8f0]',
        header: 'bg-[#0a0a0a] text-white border-[#1f1f1f]',
        footer: 'bg-[#121212] border-[#262626]'
      };
    case 'forest':
      return {
        container: 'bg-[#07170e] text-[#d1fae5]',
        card: 'bg-[#0e2719] border-[#18422b] text-[#ecfdf5]',
        header: 'bg-[#05100a] text-white border-[#103420]',
        footer: 'bg-[#0e2719] border-[#18422b]'
      };
    case 'glass':
    default:
      return {
        container: 'bg-slate-100 text-slate-800',
        card: 'bg-white border-slate-200 text-slate-800 shadow-sm',
        header: 'bg-indigo-950 text-white border-indigo-800/50',
        footer: 'bg-white border-slate-200'
      };
  }
};

export const getFontSizeClass = (fontSize: string): string => {
  switch(fontSize) {
    case 'sm': return 'text-sm';
    case 'lg': return 'text-lg';
    case 'xl': return 'text-xl';
    case 'base':
    default: return 'text-base';
  }
};

export const getFontFamilyStyle = (fontFamily: string): React.CSSProperties => {
  return fontFamily === 'serif' 
    ? { fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' } 
    : { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' };
};
