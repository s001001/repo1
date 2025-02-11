// App.jsx
import './App.css'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Login from './Login/login';
import Rough from './Rough/Rough';
import { Route, Routes } from 'react-router-dom';
import Users from './Login/loginUsers';
import MyDataTable from './DataTable/dataTable';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/DataTable' element={<MyDataTable />} />
      </Routes>
    </Provider>
  );
}

export default App;

