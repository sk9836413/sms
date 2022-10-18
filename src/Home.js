import logo from './logo.svg';
import './App.css';
import Navhead from './navbar/Navhead.js'
import Sidebar from './navbar/SideBar.js'
import Side from './navbar/Side.js'
import Footer from './navbar/Footer';
import Card from './navbar/Card/Card.js'
import Sidenew from './navbar/Sidenew.js'
import { ProSidebarProvider } from 'react-pro-sidebar';


function App() {
  return (
    <>
    <div className="App">

    <Navhead/>
    <div className='body'>
    <ProSidebarProvider>
<Sidenew/>
</ProSidebarProvider>

    <Card/>
    </div>
   
    
    
     
     
     
     
     
     
     
     
     
     
    </div>
    <Footer/>
    </>
  );
}

export default App;
