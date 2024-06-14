
import "./App.css"
import Navbar from "../src/Components/navbar/navbar";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/banner/banner.js";
import Circle from "./Components/circle/circle.js";
import Roadmap from "./Components/roadmap/roadmap.js";
import Accomplishment from "./Components/accomplishment/accomplishment.js";
import Goals from "../src/Components/goals/goals.js";
import Links from "../src/Components/links/links.js";
import Footer from "../src/Components/footer/footer.js";

function App() {
  
  const divStyle = {
    backgroundImage: 'url("/images/back.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '150vh',
    width: '100%',
  };
  return (
    <div className="App" style={divStyle}>
       <div className="overlay"></div>
      <Navbar/>

      <Banner/>
      <Accomplishment/>
      <Goals/>
      <Roadmap/>
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
