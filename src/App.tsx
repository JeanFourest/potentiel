import { useState } from "react";
import "./App.css";
import Checkbox from "./components/checkbox/Checkbox";
import Button from "./components/Button/Button";
import { FaBeer } from "react-icons/fa";

function App() {
  const [values, setValues] = useState<(string | number)[]>([]);
  console.log(values);

  const handleClick = () => {
    alert("YOOOOOOOOOOOOOOOOOOOO");
  };

  return (
    <>
      <Checkbox
        group={[
          { label: "All", value: "all", checked: false, checkAll: true },
          { label: "Number", value: 6, checked: false, checkAll: false },
          { label: "Hello", value: "hello", checked: false, checkAll: false },
          { label: "Baka", value: "baka", checked: false, checkAll: false },
        ]}
        onChange={(e: any) => setValues(e)}
        className="checkbox"
      />
      <Button
        text="ok"
        onClick={() => handleClick()}
        extraClass="danger rounded"
        disabled={true}
      />
      <Button
        icon={<FaBeer />}
        onClick={() => handleClick()}
        extraClass="success rounded"
        disabled={false}
      />
    </>
  );
}

export default App;
