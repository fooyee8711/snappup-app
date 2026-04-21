/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressProvider } from './store/progress';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Review } from './pages/Review';
import { ManageWords } from './pages/ManageWords';
import { Settings } from './pages/Settings';
import { PasswordGate } from './components/PasswordGate';
import { CurriculumMap } from './pages/CurriculumMap';
import { SpecialCollection } from './pages/SpecialCollection';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('app_authenticated') === 'true';
  });

  // If no password is set in env, bypass the gate
  const hasPasswordSet = !!import.meta.env.VITE_APP_PASSWORD;

  if (hasPasswordSet && !isAuthenticated) {
    return <PasswordGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <ProgressProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/review" element={<Review />} />
            <Route path="/curriculum" element={<CurriculumMap />} />
            <Route path="/special-collection" element={<SpecialCollection />} />
            <Route path="/manage" element={<ManageWords />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProgressProvider>
  );
}
