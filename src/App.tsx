import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hero } from 'components';
import { Movies } from 'pages';
import { SearchMovieProvider } from 'context';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <SearchMovieProvider>
              <Hero />
              <Movies />
          </SearchMovieProvider>
      </QueryClientProvider>
  );
}

export default App;
