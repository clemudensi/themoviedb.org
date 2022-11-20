import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hero } from 'components';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Hero />
      </QueryClientProvider>
  );
}

export default App;
