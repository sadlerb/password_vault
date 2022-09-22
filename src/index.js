import React from 'react';
import ReactDOM from 'react-dom/client';

import { FormProvider } from './context/password-form-context/password-form.context';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { ListProvider } from './context/password-list-context/password-list.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider >
        <ListProvider>
          <App />
        </ListProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);

