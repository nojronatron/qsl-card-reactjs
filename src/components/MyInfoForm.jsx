function MyInfoForm({ myInfoHandlerCallback }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('MyInfoForm handleSubmit event data object:', data);
    myInfoHandlerCallback(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-form-container'>
          <label htmlFor='myname'>My Name</label>
          <input type='text' id='myname' name='myname' />
          <label htmlFor='mycallsign'>My Callsign</label>
          <input type='text' id='mycallsign' name='mycallsign' />
          <label htmlFor='mycitycounty'>My City or County</label>
          <input type='text' id='mycitycounty' name='mycitycounty' />
          <label htmlFor='mystate'>My State</label>
          <input type='text' id='mystate' name='mystate' />
          <label htmlFor='mycqzone'>My CQ Zone</label>
          <input type='number' id='mycqzone' name='mycqzone' />
          <label htmlFor='myarrlsection'>My ARRL Section</label>
          <input type='text' id='myarrlsection' name='myarrlsection' />
          <label htmlFor='mygrid'>My Grid</label>
          <input type='text' id='mygrid' name='mygrid' />
        </div>
        <div className='info-button-container'>
          <button className='myinfo-button' type='submit'>
            Save My Info
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyInfoForm;
