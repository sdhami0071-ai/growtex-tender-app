import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';
import SearchTenders from './pages/SearchTenders';
import TenderDetails from './pages/TenderDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/success" element={<Success />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/search" element={<SearchTenders />} />
      <Route path="/tender/:id" element={<TenderDetails />} />
    </Routes>
  );
}

export default App;
