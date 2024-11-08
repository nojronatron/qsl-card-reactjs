function QslCard(senderFields) {
  function setElements(key, value) {
    return (
      <div key={key}>
        <label htmlFor={key}>{key}</label>
        <p id={key} name={key}>
          {value}
        </p>
      </div>
    );
  }

  const senderFieldsProps = Object.entries(senderFields.senderFields);
  const DisplayItems = senderFieldsProps.map(([key, value]) => {
    if (value !== '') {
      return setElements(key, value);
    }
  });

  return (
    <section>
      <header>
        <h2>QSL Card</h2>
      </header>
      <main>
        <p>QSL Card Will Render Here</p>
        {DisplayItems}
      </main>
    </section>
  );
}

export default QslCard;
