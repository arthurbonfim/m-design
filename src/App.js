import './App.css';
import { useState } from "react";
import Top from "./components/Top";
import Banner from './components/Banner';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  //useState for change the page's theme
  const [theme , setTheme] = useState(true);
 
  return (
    //change the page theme based on 'theme' value
    <div className={`${'App'} ${theme ? 'light-mode' : 'dark-mode'}`}>
      <Top 
      //inverts the 'theme' value on button onclick
      btnOnClick={() => setTheme(!theme)}
      //Change the button when 'theme' change
      pageTheme={theme} />
      <Banner/>
      <About/>
      <Footer/>
  </div>
  );
}

export default App;
