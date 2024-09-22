/* eslint-disable react/prop-types */

function CookieButton({ onClick, buttonText }) {
  return <button onClick={onClick}>{buttonText}</button>; //buttonText param makes the component more re-usable if needed
}

export default CookieButton;
