
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preventHorizontalScroll } from './utils/preventHorizontalScroll'

// Remove dark mode class addition
createRoot(document.getElementById("root")!).render(<App />);

// Prevent horizontal scrolling globally
preventHorizontalScroll();
