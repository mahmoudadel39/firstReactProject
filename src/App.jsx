import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Slider } from './components/Slider';
import { Products } from './components/Products';
import { Content } from './components/Content';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  return (
   <>
   <MyNav></MyNav>
   <Slider></Slider>
   <Products></Products>
  <Content></Content>

  <Contact></Contact>
  <Footer></Footer>

   </>
  );
}

export default App;
