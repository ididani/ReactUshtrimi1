import logo from "./logo.svg";
import "./App.css";
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="main">
      <LeftSide />
      <RightSide />
    </div>
  );
}

export default App;
