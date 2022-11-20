import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hero } from 'components';
import { Movies } from 'pages';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Hero />
          <Movies />
      </QueryClientProvider>
  );
}

export default App;
