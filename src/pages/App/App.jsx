// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

let f=0;
export default function App({handleAddBoard}) {
  const [user, setUser] = useState(getUser());
  const [form, setForm] = useState(1);

  function formDisplayed(evt) {
      f = f + 1;
      if (f % 2 === 0) {
          setForm(1);
      } else {
          setForm(null);
      }
  }
  console.log(f)
  console.log(form)

  return (
    <main className="App">
      {
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={ <NewOrderPage user={user} setUser={setUser} handleAddBoard={handleAddBoard}/> } />
            <Route path="/boards" element={ <OrderHistoryPage user={user} setUser={setUser} handleAddBoard={handleAddBoard}/> } />
          </Routes>
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} form={form} formDisplayed={formDisplayed}/>
          <AuthPage setUser={setUser} form={form}/>
        </>
      }
    </main>
  );
}
