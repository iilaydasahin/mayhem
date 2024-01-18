import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscribe from "./pages/Subscribe";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={Features} />
          <Route path="/story" exact component={Story} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/subscribe" exact component={Subscribe} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;