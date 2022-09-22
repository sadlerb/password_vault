import './App.scss';

import { Routes,Route} from "react-router-dom";

import  NavBar  from './components/navbar/navbar.component';
import Home  from './components/home/home.component';
import Auth from './routes/auth/auth.component';




function App() {


  return (
    <div>
      <Routes>
          <Route path={'/'} element={<NavBar />}>
          <Route index element={<Home />}/>
          <Route path='auth' element={<Auth />}/>
        </Route>
      </Routes>

    </div>

  );
}

export default App;
