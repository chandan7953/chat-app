import React from "react";
import { BASE_URL } from "./main";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{BASE_URL}</h1>
      <button class="btn btn-primary">Button</button>
    </div>
  );
};

export default App;
