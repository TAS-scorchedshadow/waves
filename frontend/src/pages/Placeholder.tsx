import React, { useRef } from "react";
import reactLogo from "../assets/react.svg";
import { useState, useEffect } from "react";
import "../App.css";
import { trpc } from "../utils/trpc";

const Placeholder: React.FC = () => {
  const [count, setCount] = useState(0);
  const testLogin = trpc.auth.login.useMutation();

  const hello = trpc.hello.helloWorld.useQuery(undefined, {
    staleTime: Infinity,
  });

  if (!hello.isLoading) {
    console.log(hello.data);
  }

  useEffect(() => {
    testLogin.mutate(
      { username: "henry", userid: 1 },
      {
        onSuccess: (data) => {
          console.log(data);
        },
      }
    );
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Placeholder;