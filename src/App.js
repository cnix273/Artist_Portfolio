import { BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Main from './components/mainRouter/index';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Main/>
      <Footer/>
    </Router>
  );
}

export default App;
