// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "react-oidc-context"

const oidcConfig = {
  authority: "https://identity.s5g.gos.y-cloud.eu/auth/realms/s5g",
  client_id: "osr-client",
  redirect_uri: "http://localhost:3000/callbackurl",
  client_secret: "QJeD8p7zCosFC5etJJIqIR9YbJL2BeXa",
  response_type: "code",
  scope: "openid email profile",
  post_logout_redirect_uri: "http://localhost:3000/",

}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </BrowserRouter> 
);
