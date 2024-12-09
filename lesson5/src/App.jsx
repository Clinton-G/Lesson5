import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostList from './PostList';
import CreatePost from './CreatePost';
import { useTranslation } from 'react-i18next';

const queryClient = new QueryClient();

const App = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <h1>{i18n.t('header.title')}</h1>
      
      <div>
        <button onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>
          English
        </button>
        <button onClick={() => handleLanguageChange('sv')} disabled={language === 'sv'}>
          Svenska
        </button>
      </div>

      <CreatePost />
      <PostList />
    </QueryClientProvider>
  );
};

export default App;
