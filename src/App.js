import './App.css';
import Contact from './Components/Contact/Contact';
import Feature from './Components/Features/Feature';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Hero/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
      <Feature></Feature>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
