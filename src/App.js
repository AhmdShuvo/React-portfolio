import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import '@react-pdf-viewer/core/lib/styles/index.css';
import Header from '../src/Components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Projects from './Components/Projects/Projects';
import Details from './Components/Details/Details';

function App() {
  return (
     <div>

        <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="myprojects" element={<Projects/>}/>
          <Route path="/myprojects/project/:id" element={<Details/>}/>
        </Routes>
        </BrowserRouter>
     </div>
   
  );
}

export default App;
