import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  filterSelector,
  todoListAtom,
  typeOfFilterAtom,
} from "./store/todoAtoms/todoAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function App() {
  const filteredTodo = useRecoilValue(filterSelector);
  const setTypeOfFilter = useSetRecoilState(typeOfFilterAtom);

  return (
    
    <>
      <div>
        <div>
          <button
            onClick={() => {
              setTypeOfFilter("SHOW_ALL");
            }}
          >
            Show all
          </button>

          <button
            onClick={() => {
              setTypeOfFilter("COMPLETED");
            }}
          >
            Completed
          </button>

          <button
            onClick={() => {
              setTypeOfFilter("PENDING");
            }}
          >
            Pending
          </button>
        </div>
        {filteredTodo.map((todo) => {
          return (
            <div
              key={todo.name}
              style={{
                border: "2px solid gray",
              }}
            >
              <div>
                <span>{todo.name}</span>
              </div>
              <div>
                <span>{todo.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
