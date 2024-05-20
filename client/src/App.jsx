import React, { useEffect, useState } from "react";
import { BASE_URL } from "./main";
import axios from "axios";

const App = () => {
  const [demo, setDemo] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`${BASE_URL}/api/v1/demo/demo`);
        console.log(resp);
        setDemo(resp.data.domoData); // Assuming the data you want is in resp.data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{BASE_URL}</h1>
      <button className="btn btn-primary">Button</button>
      {demo && <div>{demo}</div>} {/* Display the fetched data */}
    </div>
  );
};

export default App;
