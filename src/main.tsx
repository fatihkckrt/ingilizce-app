import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (typeof (window as unknown as { __APP_MOUNTED__?: () => void }).__APP_MOUNTED__ === 'function') {
  (window as unknown as { __APP_MOUNTED__?: () => void }).__APP_MOUNTED__!();
}
