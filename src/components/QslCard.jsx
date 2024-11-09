import convertKeyToName from './ConvertElementName.mjs';

function QslCard(senderFields) {
  function keysToDisplayElements(key, value) {
    const lowerKey = key
      .toLowerCase()
      .replaceAll(/\s/g, '-')
      .replaceAll(/\(|\)|\//g, '');
    const divId = `qsl-parentdiv-${lowerKey}`;
    const labelId = `qsl-label-${lowerKey}`;
    return (
      <div key={key} className='qsl-card-infocell' id={divId}>
        <label htmlFor={key} className='qsl-card-label' id={labelId}>
          {key}
        </label>
        <div id={key} name={key} className='qsl-card-content'>
          {value}
        </div>
      </div>
    );
  }

  const senderFieldsProps = Object.entries(senderFields.senderFields);
  const DisplayItems = senderFieldsProps.map(([key, value]) => {
    if (value !== '') {
      const keyName = convertKeyToName(key);
      return keysToDisplayElements(keyName, value);
    }
  });

  return (
    <article className='qsl-card-container'>
      <div className='qsl-card-block'>{DisplayItems}</div>
    </article>
  );
}

export default QslCard;
