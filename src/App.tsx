import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Component1,
  Component2,
  Component3,
  Component4,
} from "./Componets/practice";

export interface prac {
  location: string;
  zipCode: number;
}

export interface Lavash {
  phone: number;
  country: { city: string };
  address: string[];
  job: [{ CS: string }];
}

function App() {
  const [sevan, setSevan] = useState<string>("");
  const [romel, setRomel] = useState<prac>({ location: "LA", zipCode: 91201 });
  const [bread, setBread] = useState<Lavash[]>();

  useEffect(() => {
    setBread([
      {
        phone: 123456,
        country: { city: "LA" },
        address: ["elm ave"],
        job: [{ CS: "JS" }],
      },
      {
        phone: 123456789,
        country: { city: "NYC" },
        address: ["Alameda ave"],
        job: [{ CS: "React JS" }],
      },
      {
        phone: 78894565,
        country: { city: "MD" },
        address: ["Allen ave"],
        job: [{ CS: "Angular JS" }],
      },
    ]);
  }, []);
  // console.log(bread[0]?.job[0]?.CS);
  return (
    <div className="App">
      <Component1 title={"sevan"} />
      <Component2 title={"romel"} age={20} />
      <Component3 age={20} title={"romel"} />
      <Component4 />
      <span>
        {romel.zipCode} {romel.location}
      </span>
      {bread?.map((e) => {
        return (
          <p>
            {e.phone} {e.address[0]} {e.country.city} {e.job[0]?.CS}
            {/* {e.phone} */}
          </p>
        );
      })}
    </div>
  );
}

export default App;
