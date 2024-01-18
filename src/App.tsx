import { QueryClient, QueryClientProvider } from 'react-query';

import LandingPage from '~components/LandingPage';
import Navbar from '~components/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <LandingPage />
      </QueryClientProvider>
    </div>
  );
}
export default App;
