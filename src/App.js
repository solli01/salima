import logo from './logo.svg';
import './App.css';
import Container from './components/container/Container';
import Header from './components/header/Header';
import Section__Home from './components/main/Section__Home';
import Tech_Product from './components/main/Tech-Product';
import Section__Part__1 from './components/main/Section__Part__1';
import Section__Contact from './components/main/Section__Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      < Container />
      < Header />
      < Section__Home />
      < Tech_Product />
      < Section__Part__1 />
      < Section__Contact />
      < Footer />
    </div>
  );
}

export default App;
