import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Features = () => {
  const [data, setData] = useState([]);
  const data1 = useLoaderData();
  

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="mt-20">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Features of Our Group Study Platform
      </h2>
      <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-3">
        {data.map((item, idx) => (
          <Card key={idx} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
