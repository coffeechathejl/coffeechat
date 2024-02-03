import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root') || document.createElement('div'));

root.render(
  <Auth0Provider
    domain="coffeechatqh23.us.auth0.com"
    clientId="nHk2jk4EJup7xfDgcs9WAwSS2zzopsEV"
    onRedirectCallback={(appState) =>
      window.history.replaceState({}, document.title, appState?.targetUrl ?? '')
    }
    cacheLocation='localstorage'
  >
    <App />
  </Auth0Provider>
);