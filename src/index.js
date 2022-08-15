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

import { SeeCard } from './components/SeeCard';
import { FavoritesList } from './components/FavoritesList';

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
              <Route path="/favorites" element={<FavoritesList />} />
              <Route path="/see/:id" element={<SeeCard />} />          
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
);
