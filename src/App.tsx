import React from 'react';  
import { BrowserRouter } from 'react-router-dom';
import { NotificationProvider } from './context/Notification.context';
import { URLSProvider } from './context/URLs.context';
import { AppRouter } from './Router';

function App() {
  return (
    <NotificationProvider>
      <URLSProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </URLSProvider>
    </NotificationProvider>
  );
}

export default App;
