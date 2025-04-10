
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import ExamplePage from './pages/ExamplePage';
import AnalyticsPage from './pages/AnalyticsPage';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/example" element={<ExamplePage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
