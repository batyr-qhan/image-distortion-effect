import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

function generatePositionStyles() {
  const style = document.createElement('style');
  let css = '';
  
  for (let i = 1; i <= 30; i++) {
    const position = ((i - 1) * 3.33).toFixed(2);
    css += `
      .part:nth-child(${i}),
      .part2:nth-child(${i}),
      .image:hover .part:nth-child(${i}),
      .image:hover .part2:nth-child(${i}) {
        background-position: ${position}% 0;
      }
    `;
  }
  
  style.textContent = css;
  document.head.appendChild(style);
}

generatePositionStyles();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
