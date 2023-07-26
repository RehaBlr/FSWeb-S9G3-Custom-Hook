import React, { useState, useEffect } from "react";

export function useLocalStorage(key, initalData) {
  const [data, setData] = useState(initalData);

  useEffect(() => {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      const lsData = JSON.parse(localStorage.getItem(key));
      console.log("lsData : ", lsData);
      setData(lsData);
    }
  }, [data]);

  const writeToLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  // window.localStorage.setItem("darkMode", data);

  return [data, writeToLocalStorage];
}
