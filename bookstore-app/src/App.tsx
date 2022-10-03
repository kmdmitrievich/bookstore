import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/action_creators';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header';
import { SignIn } from './components/signin/SignIn';
import { SignUp } from './components/signup/SignUp';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { NewsLatter } from './components/newslatter/NewsLatter';
import { Line } from './components/line/Line';
import { Footer } from './components/footer/Footer';
import { Books } from './components/books/Books';

function App() {
  const dispatch = useDispatch();
  const isAuthorized = !!localStorage.getItem('jwtAccess');

  useEffect(() => {
    const token = localStorage.getItem('jwtAccess');
    if (token) {
      dispatch(getUser())
    } else {
      const { pathname } = window.location;
      // if (pathname !== '/signin' && pathname !== '/posts' && pathname !== '/signup')
      //   window.location.href = '/signin'
    }
  }, [localStorage.getItem('jwtAccess')])
  return (
    <div>
      <Header />
      <Line />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ipsum. Necessitatibus quod laborum eaque nihil atque,
              assumenda maxime quo, totam illo veritatis error consequuntur sint tempora quae quam excepturi illum.
            </div>} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="books" element={<Books />} />
            <Route path="newslatter" element={<NewsLatter />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Line />
      <Footer />
    </div>

  );
}

export default App;
