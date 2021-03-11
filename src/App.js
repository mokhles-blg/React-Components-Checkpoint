import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import Card from "./Component/Profile/ProfileCard/Card";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Body">
        <Card />
      </div>
    </div>
  );
}

export default App;
