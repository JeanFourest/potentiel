import { useState } from "react";
import "./App.css";
import Checkbox from "./components/checkbox/Checkbox";

function App() {
  const [values, setValues] = useState<(string | number)[]>([]);

  console.log(values);

  return (
    <>
      <Checkbox
        group={[
          { label: "All", value: "all", checked: false, checkAll: true },
          { label: "Number", value: 6, checked: false, checkAll: false },
          { label: "Hello", value: "hello", checked: false, checkAll: false },
          { label: "Baka", value: "baka", checked: false, checkAll: false },
        ]}
        onChange={(e) => setValues(e)}
        className="checkbox"
      />
    </>
  );
}

export default App;
