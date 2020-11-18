import React from 'react'

const Flag = ({type}) => {
  console.log(type)
  switch (type) {
    case "micro":
     return <div className="flag green">{type}</div>;

    case "regional":
     return <div className="flag blue">{type}</div>;

    case "brewpub":
     return <div className="flag red">{type}</div>;

    case "large":
     return <div className="flag yellow">{type}</div>;

    case "planning":
    return <div className="flag gray">{type}</div>;

    case "bar":
    return <div className="flag light-green">{type}</div>;

    case "contract":
    return <div className="flag cian">{type}</div>;

    case "proprietor":
    return <div className="flag pink">{type}</div>;

    default:
      return <div className="flag dark">{type}</div>;
  }
};

export default Flag;
