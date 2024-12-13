
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Home from './components/home';
import Project from './components/project';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <About/>
     <Project/>
     <Resume/>
     <Contact/>
    </div>
  );
}

export default App;
