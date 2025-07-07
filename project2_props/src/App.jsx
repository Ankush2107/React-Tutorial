// import Card from "./components/Card";
// import data from "./assets/data";
import { useState } from "react";
// import Counter1 from "./components/Counter1";
// import Counter2 from "./components/Counter2";
import Home from "./components/Home";

function App() {
  const [ count, setCount ] = useState(0);
  return (
    <div>
     {/* { data.map((ele, idx) => (
      <Card key={idx} imageSrc={ele.imageSrc} name={ele.name} place={ele.place} />
     )) } */}
     {/* <Counter1 count={count} setCount={setCount} />
     <Counter2 count={count} setCount={setCount} /> */}
     <Home/>
    </div>
  )
};
export default App;