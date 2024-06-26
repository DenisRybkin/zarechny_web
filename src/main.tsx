import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/styles/index.css';
import { App } from './app';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('No element with `root` id found');
const root = createRoot(rootElement);
root.render(createElement(App));
