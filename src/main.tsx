// import React from 'react'
import App from './components/App/App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const container = document.getElementById('root')!
const root = createRoot(container);
root.render(<App />);