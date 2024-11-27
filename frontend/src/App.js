import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
 <>
    <Header/> 
    <main className=' main-h [calc(100vh-120px)]'>
<Outlet/>
    </main>
 <Footer/>   
    
    
       </>
  );
}

export default App;
