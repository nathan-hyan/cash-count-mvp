import { QueryClient, QueryClientProvider } from 'react-query';

import Navbar from '~components/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
      </QueryClientProvider>
    </div>
  );
}
export default App;
