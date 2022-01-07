import './App.css';
import {BrowserRouter as Router ,Route ,Routes ,Navigate} from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import PageEr from './Component/PageEr';
import Student from './Component/Student';
import Contact from './Component/Contact';
import { Contextdata } from './Component/Context';   //wrapping around the component to get the data//
import {Studentdesc} from './Component/Studentdesc';
// import EditCompo from './Component/EditCompo';

function App() {
  return (
    
    <Router>
      <Contextdata>   
    <div className="App">
      <Header/>
        <Routes> {/*/for enclosing route/*/}
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/studentdesc' element={<Studentdesc/>}>
        <Route path=':id' element={<Studentdesc/>}/> {/* to use navlink this must be inside the nest */}
          </Route>
        <Route path='/*' element={<PageEr/>}/>
        </Routes>
    </div>
    </Contextdata>
    </Router>
  );
}

export default App;
