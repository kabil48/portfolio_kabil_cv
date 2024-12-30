import React from 'react'; // Assurez-vous que ce contexte existe
import { LanguageProvider }  from '@/contexts/languageContext'
import Hero from '@/components/hero'  // Assurez-vous que le composant Hero existe
import { Import } from 'lucide-react';

function App() {
  return (
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  );
}

export default App;
