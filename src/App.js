
//import "./App.css"
import Navbar from "../src/Components/navbar/navbar";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/banner/banner.js";
import Circle from "./Components/circle/circle.js";
import Roadmap from "./Components/roadmap/roadmap.js";
import Accomplishment from "./Components/accomplishment/accomplishment.js";

function App() {
  return (
    <div className="App">
       <div className="overlay"></div>
      <Navbar/>

      <Banner/>
      <Accomplishment/>
      <Roadmap/>
    </div>
  );
}

export default App;
