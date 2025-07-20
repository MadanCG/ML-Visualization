import Button from "./components/Button";
import KmeansAlgo from "./components/kmeans";
import React from "react";


function App() {
  const [show, setShow] = React.useState(false);
  return (
    <>
  <h1>hello</h1>
  <Button label={'GET Kmeans'} onClick={()=>setShow(true)}/>
  {show && <KmeansAlgo />}
  </>
  );
}

export default App;
