import React, { useState } from 'react';
import MyInfoForm from './components/MyInfoForm';
import UrInfoForm from './components/UrInfoForm';
import QslCard from './components/QslCard';
import './App.css';

function App() {
  const [myInfoData, setMyInfoData] = useState(null);
  const [urInfoData, setUrInfoData] = useState(null);

  function handleSetMyInfoData(data) {
    setMyInfoData(data);
  }

  const handleSetUrInfoData = (data) => {
    setUrInfoData(data);
  };

  return (
    <article>
      <header>
        <div className='header-nav'>Nav Items Here</div>
      </header>
      <main>
        <MyInfoForm myInfoHandlerCallback={handleSetMyInfoData} />
        <UrInfoForm urInfoHandlerCallback={handleSetUrInfoData} />
        <QslCard myInfo={myInfoData} urInfo={urInfoData} />
      </main>
      <footer>
        <div className='footer-text'>Author: K7RMZ aka Nojronatron</div>
      </footer>
    </article>
  );
}

export default App;
