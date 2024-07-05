import React from "react";
import { countAtom } from "../store/atoms/countAtoms";
import { useSetRecoilState } from "recoil";

function CountIncrement() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default CountIncrement;




