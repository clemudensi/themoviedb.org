import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SearchMovieProvider } from 'context';
import { BrowserRouter } from 'react-router-dom';
import { MovieRoutes } from 'routes';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <SearchMovieProvider>
              <BrowserRouter>
                  <MovieRoutes/>
              </BrowserRouter>
          </SearchMovieProvider>
      </QueryClientProvider>
  );
}

export default App;
