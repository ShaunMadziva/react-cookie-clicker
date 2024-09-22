/* eslint-disable react/prop-types */
function UpgradeButton({ upgradeCost, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      Buy Upgrade ({upgradeCost} Cookies)
    </button>
  );
}

export default UpgradeButton;
