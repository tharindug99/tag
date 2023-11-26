import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/gallery" element={ <Gallery/> } />
            <Route path="/signIn" element={ <SignIn/> } />
            <Route path="/signUp"element={<SignUp/>}/>
          </Routes> 
        </BrowserRouter>
      </>
  );
}

export default App;
