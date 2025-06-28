import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToolsList from './pages/ToolsList';
import ToolDetail from './pages/ToolDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToolsList />} />
        <Route path="/tool/:name" element={<ToolDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
