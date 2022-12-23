'use strict'

import './fonts/fonts.css';

import { Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import { SignUp } from "./pages/SignUp";
import { ArtistPage } from "./pages/ArtistPage";
import { NftPage } from "./pages/NftPage";
import { TopCreatorsPage } from './pages/TopCreatorsPage';
import { Marketplace } from './pages/Marketplace';
import { Add } from './pages/Add';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path=':user' element={<ArtistPage />} />
        <Route path='unit/:id' element={<NftPage />} />
        <Route path='topcreators' element={<TopCreatorsPage />} />
        <Route path='marketplace' element={<Marketplace />} />
        <Route path='add' element={<Add />} />
      </Route>
    </Routes>
  );
}

export default App;