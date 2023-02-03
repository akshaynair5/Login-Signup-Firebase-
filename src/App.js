import './App.css';
import {HashRouter,Route,Routes} from 'react-router-dom'
import Register from './pages/register';
import Login from './pages/login';
import Profile from './pages/profile';
import { Navigate } from 'react-router-dom';
import { Authcontext } from './contextProvider';
import { useContext } from 'react';
function App() {
  const {currentUser} = useContext(Authcontext)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return(
        <Navigate to="/Login"/>
      )
    }
    return(
      children
    )
  }
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/Register" element={<Register/>}></Route>
        <Route  path="/Login" element={<Login/>}></Route>
        <Route  path="/Profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;