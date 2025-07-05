import {Routes,Route,Link,BrowserRouter as Router}
    from 'react-router-dom';
import './App.css';
import Home from'./home';
import About from'./about';
import Contact from'./contact';
import Service from'./service';
function App() {
  return (
     <Router>
          <Link to="/Homepage" style={{margin:10}}>Home</Link>
          <Link to="/Aboutpage"style={{margin:10}}>About</Link>
          <Link to="/Contactpage"style={{margin:10}}>Contact</Link>
           <Link to="/Servicepage"style={{margin:10}}>Service</Link>
          <Routes>
            <Route path="/Homepage" element={<Home/>}></Route>
            <Route path="/Aboutpage" element={<About/>}></Route>
            <Route path="/Contactpage" element={<Contact/>}></Route>
            <Route path="/Servicepage" element={<Service/>}></Route>
          </Routes>
         
     </Router>

  );
}

export default App;
