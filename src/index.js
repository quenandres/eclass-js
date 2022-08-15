import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Provider } from 'react-redux';
import {store} from './app/store';

import { CardCharacter } from './components/CardCharacter';
import { Favorites } from './components/Favorites';

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/see/:id" element={<CardCharacter />} />          
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
);
