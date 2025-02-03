import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./component/Terms/Terms";
import Privacy from "./component/Privacy/Privacy";
import Cancellation from "./component/Cancellation/Cancellation";
import Contact from "./component/Contact/Contact";
import Home from './component/Home/Home';
// Define your App component
function App() {
  return (<div class="w-full justify-center">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
