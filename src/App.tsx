import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Success from './pages/Success';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/success" element={<Success />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
