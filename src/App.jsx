import react from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Rowpost/RowPost";
import { original,action } from "./urls";
import Footer from "./components/Footer/Footer";
const App = () => {
  return <div>
    <NavBar/>
    <Banner/>
    <RowPost title="Netflix Originals" url={original}/>
    <RowPost title="Action" url={action} isSmall/>
    <Footer/>
  </div>;
};

export default App;