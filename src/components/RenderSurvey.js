function RenderSurvey({ data }) {
    return (
      <div>
        {data.map(title => (
          <div key={title.name}>
            <h2>{title.name}</h2>
            {title.elements.map(sousTitre => {
              switch(sousTitre.type) {
                case 'paneldynamic':
                  return <PanelDynamic {...sousTitre} />;
                // ... other cases
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
    );
  }
  
  function PanelDynamic(props) {
    return (
      <div>
        <h3>{props.title}</h3>
        {props.templateElements.map(element => {
          switch(element.type) {
            case 'paneldynamic':
              return <PanelDynamic {...element} />;
            case 'rating':
              return <RatingInput {...element} />;
            // ... other cases
            default:
              return null;
          }
        })}
      </div>
    );
  }
  
  function RatingInput(props) {
    return (
      <div>
        <label>{props.title}</label>
        {props.rateValues.map(rate => (
          <button key={rate.value} value={rate.value}>
            {rate.text}
          </button>
        ))}
      </div>
    );
  }
  