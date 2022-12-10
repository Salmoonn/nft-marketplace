'use strict'

import './fonts/fonts.css';

import { Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import { SignUp } from "./pages/SignUp";
import { ArtistPage } from "./pages/ArtistPage";
import { NftPage } from "./pages/NftPage";
import { TopCreatorsPage } from './pages/TopCreatorsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='signup' element={<SignUp />} />
        <Route path=':user' element={<ArtistPage />} />
        <Route path='unit/:id' element={<NftPage />} />
        <Route path='topcreators' element={<TopCreatorsPage />} />
      </Route>
    </Routes>
  );
}

export default App;