import "./styles/App.css";
import Navbar from "./components/NavBar";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/Contact";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import PostsPage from "./components/pages/Posts";
// create simple about component
// create simple contact us component

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Lets router react</h1>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
