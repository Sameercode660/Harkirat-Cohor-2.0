import React, { useEffect, useState } from "react";

function useDebounce(callback, delay, value) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      callback(value)
    }, delay);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [value]);
}

function App() {
  const [value, setValue] = useState();

  useDebounce(valuePriting, 1000, value);

  function valuePriting() {
    console.log(value);
  }
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
