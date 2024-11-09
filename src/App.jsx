import React, { useState } from 'react';
import MyInfoForm from './components/MyInfoForm';
import UrInfoForm from './components/UrInfoForm';
import './App.css';
import QslCard from './components/QslCard';

function App() {
  const [infoData, setInfoData] = useState({
    myname: '',
    mycallsign: '',
    mycity: '',
    mycounty: '',
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
    qsosignal: '',
    qsoexchange: '',
    psetnx: '',
  });

  function handleSetInfoData(itemName, itemValue) {
    setInfoData((prevState) => {
      return { ...prevState, [itemName]: itemValue };
    });
  }

  return (
    <div>
      <header>
        <div className='header-nav'>Nav Items Here</div>
      </header>
      <main>
        <MyInfoForm myInfoHandlerCallback={handleSetInfoData} />
        <UrInfoForm urInfoHandlerCallback={handleSetInfoData} />
        <div className='separator-bar'>{''}</div>
        <QslCard senderFields={infoData} />
      </main>
      <footer>
        <div className='footer-text'>Author: K7RMZ aka Nojronatron</div>
      </footer>
    </div>
  );
}

export default App;
