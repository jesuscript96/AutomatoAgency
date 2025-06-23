import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// The necessary styles (bg-white, font-family) are applied to the body and #root in index.html
// So, no extra wrapper needed here if index.html is correctly set up.
// Tailwind will pick up the font-family from the body.

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);