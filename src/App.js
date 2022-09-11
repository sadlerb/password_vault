import './App.scss';

import { Routes,Route} from "react-router-dom";

import  NavBar  from './components/navbar/navbar.component';
import Body  from './components/body/body.component'


function App() {
  return (
    <div className='app-container'>
      <Routes>
          <Route path={'/'} element={<NavBar />}>
          <Route index element={<Body />}/>
        </Route>
      </Routes>

    </div>

  );
}

export default App;
