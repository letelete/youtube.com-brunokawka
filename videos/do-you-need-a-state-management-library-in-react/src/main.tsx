import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';

import './globals.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';

import { ThemeProvider } from '@/components/theme-provider';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  );
}
