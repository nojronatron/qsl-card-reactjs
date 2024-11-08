import React, { useState } from 'react';
import MyInfoForm from './components/MyInfoForm';
import UrInfoForm from './components/UrInfoForm';
import './App.css';
import QslCard from './components/QslCard';

function App() {
  const [infoData, setInfoData] = useState({
    myname: '',
    mycallsign: '',
    mycitycounty: '',
    mystate: '',
    mycqzone: '',
    myarrlsection: '',
    mygrid: '',
    urname: '',
    urcallsign: '',
    qsodate: '',
    qsotime: '',
    qsobandmhz: '',
    qsomode: '',
    psetnx: '',
  });

  function handleSetInfoData(itemName, itemValue) {
    setInfoData((prevState) => {
      return { ...prevState, [itemName]: itemValue };
    });
  }

  return (
    <article>
      <header>
        <div className='header-nav'>Nav Items Here</div>
      </header>
      <main>
        <MyInfoForm myInfoHandlerCallback={handleSetInfoData} />
        <UrInfoForm urInfoHandlerCallback={handleSetInfoData} />
        <QslCard senderFields={infoData} />
      </main>
      <footer>
        <div className='footer-text'>Author: K7RMZ aka Nojronatron</div>
      </footer>
    </article>
  );
}

export default App;
