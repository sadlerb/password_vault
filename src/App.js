import './App.scss';

import { NavBar } from './components/header/navbar.component';
import { SideBar } from './components/sidebar/sidebar.component'


function App() {
  return (
    <div className='app-container'>
      <div className='navigation'>
        <NavBar />
      </div>
      <div className='sidebar'>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
