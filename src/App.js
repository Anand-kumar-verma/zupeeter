import './App.css';
import './assets/styles/main.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Dashboard from './pages/dashboard/Dashboard';



function App() {

  return (
    <Routes>
      <Route path='login' Component={Login}></Route>
      <Route path='Register' Component={Register}></Route>
      <Route path='dashboard' Component={Dashboard}></Route>
    </Routes>
  );
}

export default App;
