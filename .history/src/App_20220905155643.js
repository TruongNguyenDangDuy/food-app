import MenuDetail from './Pages/MenuDetail';
import Default from './Pages/Default'
import './App.css';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';


function App() {
  
  return (
   
    <>
      <Default />
      <Outlet />
      
    </>
   
  );
}

export default App;