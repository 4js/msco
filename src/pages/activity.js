import React, { useState, useEffect } from 'react';
import List from './list'
import usePageAuthor from './author'

export default function Activity(){
  const isAuthor = usePageAuthor('activity_id');
  const [showLogin, setShowLogin] = useState(false);
  const [showName] = useState(false);
  console.log('useState', '执行了');

  useEffect(() => {
    console.log('useEffect2', showName);
  })
  
  useEffect(() => {
    console.log('useEffect1', showLogin);
    // if(localStorage.length){
    //   setShowLogin(true);
    // }
  });

  return (
    <div>
      <h2>activity</h2>
      {showLogin ? <p>已登录</p> : <p>未登录</p>}
      <button onClick={() => setShowLogin(true)}>登录</button>
      <p>{ isAuthor }</p>
      <List type='activity' />
    </div>
  )
}