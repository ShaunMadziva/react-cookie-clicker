import { useState, useEffect } from "react";
import CookieCounter from "./components/CookieCounter";
import CookieButton from "./components/CookieButton";
import UpgradeButton from "./components/UpgradeButton";
import "./App.css";

function App() {
  // State for the number of cookies
  const [cookies, setCookies] = useState(0);
  // State for cookies per second
  const [cps, setCps] = useState(0);
  // State for upgrade cost
  const [upgradeCost, setUpgradeCost] = useState(10);

  // Effect to update the number of cookies every second based on CPS
  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((prevCookies) => prevCookies + cps);
    }, 1000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [cps]); // Re-run effect only when cps changes

  // Function for buying an upgrade
  function buyUpgrade() {
    if (cookies >= upgradeCost) {
      setCookies(cookies - upgradeCost); // Deduct the cost of the upgrade
      setCps(cps + 1); // Increase the cookies per second
      setUpgradeCost(Math.floor(upgradeCost * 1.15)); // Increase the upgrade cost
    }
  }

  return (
    <div>
      <CookieCounter cookies={cookies} />
      <CookieButton
        onClick={() => {
          setCookies(cookies + 1);
        }}
        buttonText={"Click me for Cookies!"}
      />
      <UpgradeButton
        upgradeCost={upgradeCost}
        onClick={buyUpgrade}
        disabled={cookies < upgradeCost}
      />
    </div>
  );
}

export default App;
