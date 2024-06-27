import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [section, setSection] = useState(false);
  const [contact, setContact] = useState(false);
  const [email, setEmail] = useState(false);

  function offAllButton() {
    const arrayOfFunction = [
      setHome,
      setAbout,
      setSection,
      setContact,
      setEmail,
    ];
    arrayOfFunction.forEach((fn) => {
      fn(false);
    });
  }

  return (
    <>
      <div className="flex gap-2">
        <div
          className={`${home ? "bg-slate-400" : ""} w-[85px] h-[25px] cursor-pointer`}
          onClick={() => {
            offAllButton();
            setHome(true);
          }}
        >
          <span>Home</span>
        </div>
        <div
          className={`${
            about ? "w-[85px] h-[25px] bg-slate-400" : ""
          } w-[85px] h-[25px] cursor-pointer`}
          onClick={() => {
            offAllButton();
            setAbout(true);
          }}
        >
          <span>About</span>
        </div>
        <div
          className={`${
            section ? "w-[85px] h-[25px] bg-slate-400" : ""
          } w-[85px] h-[25px] cursor-pointer` }
          onClick={() => {
            offAllButton();
            setSection(true);
          }}
        >
          <span>Section</span>
        </div>
        <div
          className={`${
            contact ? "w-[85px] h-[25px] bg-slate-400" : ""
          } w-[85px] h-[25px] cursor-pointer`}
          onClick={() => {
            offAllButton();
            setContact(true);
          }}
        >
          <span>Contact</span>
        </div>
        <div
          className={`${
            email ? "w-[85px] h-[25px] bg-slate-400" : ""
          } w-[85px] h-[25px] cursor-pointer`}
          onClick={() => {
            offAllButton();
            setEmail(true);
          }}
        >
          <span>Email</span>
        </div>
      </div>
    </>
  );
}

export default App;
