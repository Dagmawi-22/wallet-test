import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TransactionDetail from './pages/TransactionDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transaction/:id" element={<TransactionDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
