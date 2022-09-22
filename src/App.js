import "./Styles/main.css"
import "./Styles/reset.css"
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage"
import FeauturedBooks from "./Components/FeauturedBooks"

// App Components
function App() {
  return (
    <div>
    {/* Navbar*/}
      <Navbar />
      <LandingPage/>
      {/* Books */}
      <FeauturedBooks/>
    </div>
  );
}

export default App;
