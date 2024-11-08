import React, { useState } from 'react';

function UrInfoForm({ urInfoHandlerCallback }) {
  const [psetnx, setPseTnx] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const resultData = { ...data, psetnx };
    console.log('UrInfoForm handleSubmit event data object:', resultData);
    urInfoHandlerCallback(resultData);
  };

  const handlePseChanged = (event) => {
    const pseEL = document.getElementById('pse');
    const tnxEl = document.getElementById('tnx');
    pseEL.checked = true;
    tnxEl.checked = false;
    setPseTnx(event.target.value);
  };

  const handleTnxChanged = (event) => {
    const pseEL = document.getElementById('pse');
    const tnxEl = document.getElementById('tnx');
    pseEL.checked = false;
    tnxEl.checked = true;
    setPseTnx(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-form-container'>
          <label htmlFor='urname'>UR Name</label>
          <input type='text' id='urname' name='urname' />
          <label htmlFor='urcallsign'>UR Callsign</label>
          <input type='text' id='urcallsign' name='urcallsign' />
          <label htmlFor='qsodate'>QSO Date</label>
          <input type='date' id='qsodate' name='qsodate' />
          <label htmlFor='qsotime'>QSO Time (UTC)</label>
          <input type='time' id='qsotime' name='qsotime' />
          <label htmlFor='qsobandmhz'>QSO Band/MHz</label>
          <input type='text' id='qsobandmhz' name='qsobandmhz' />
          <label htmlFor='qsomode'>QSO Mode</label>
          <select id='qsomode' name='qsomode'>
            <option value='cw'>CW</option>
            <option value="'d-star">D-Star</option>
            <option value='dmr'>DMR</option>
            <option value='ft-8'>FT-8</option>
            <option value='psk-31'>PSK-31</option>
            <option value='rtty'>RTTY</option>
            <option value='fusion'>Fusion</option>
            <option value='mfsk-16'>MFSK-16</option>
            <option value='mt-63'>MT-63</option>
            <option value='olivia'>Olivia</option>
            <option value='packet'>Packet</option>
            <option value='voice-am'>Voice-AM</option>
            <option value='voice-fm'>Voice-FM</option>
            <option value='voice-ssb'>Voice-SSB</option>
          </select>
          <label htmlFor='qsosignal'>Signal Report</label>
          <input type='text' id='qsosignal' name='qsosignal' />
          <div>
            <label htmlFor='pse'>Please Reply</label>
            <input
              type='radio'
              id='pse'
              name='psetnx'
              value='PSE'
              onChange={handlePseChanged}
            />
            <label htmlFor='tnx'>Thanks for Card!</label>
            <input
              type='radio'
              id='tnx'
              name='psetnx'
              value='TNX'
              onChange={handleTnxChanged}
            />
          </div>
        </div>
        <div className='info-button-container'>
          <button type='submit' className='urinfo-button'>
            Save QSO Info
          </button>
        </div>
      </form>
    </div>
  );
}

export default UrInfoForm;
