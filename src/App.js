import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import PersonalDetail from "./components/PersonalDetail";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Header />
    <main>
        <Route path="/" component={Home} exact />
        <Route path="/aman-portfolio/index.html" component={Home} exact />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/education" component={Education } />
        <Route path="/personaldetail" component={PersonalDetail} />
        <Route path="/skills" component={Skills} />
      
    </main>
    <Footer />
  </Router>
   
    
  );
}

export default App;
