import { useLocalStorage } from "./useLocalStorage";
// import { useState } from "react";

function geceModuAc(initialMode = false) {
  const [geceModu, setGeceModu] = useLocalStorage("darkMode", initialMode);

  const toggleMode = () => {
    console.log("geceModuAc.js: toggleMode() çalıştı", geceModu);
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
}

export default geceModuAc;
