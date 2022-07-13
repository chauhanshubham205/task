import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SideNav from "./components/SideNav";
import jobTitle from "./EmployApi";

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <SideNav />
        <Section jobTitle={jobTitle} />
      </div>
      {/* <Joblist /> */}
    </>
  );
}

export default App;
