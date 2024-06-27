import React, { useCallback } from "react";

function App() {
  const sample = useCallback(function () {
    console.log("I'm a memoized function");
  }, []);

  return (
    <div>
      <Demo a={sample}></Demo>
    </div>
  );
}

const Demo = React.memo(function ({ a }) {
  console.log("rerender");

  return <div>hi, there</div>;
});

export default React.memo(App);
