import Radio from "./components/Radio/Radio";

import "./App.css";
import "./components/assets/styleGeneral.css";

import { useState } from "react";
import { FaBeer } from "react-icons/fa";

import SelectExample from "./components/Select/Select.example";
import Checkbox from "./components/checkbox/Checkbox";
import Button from "./components/Button/Button";
import Toggle from "./components/Toggle/Toggle";

import Card from "./components/Card/Card";
import imageUrl from "./components/assets/images/beau gosse.png";

import Input from "./components/Input/Input";
import LoaderExample from "./components/Loader/Loader.example";

function App() {
  const [values, setValues] = useState<(string | number)[]>([]);
  console.log(values);

  const handleClick = () => {
    alert("YOOOOOOOOOOOOOOOOOOOO");
  };

  const [formData, setFormData] = useState({
    text: "",
    email: "",
    password: "",
    number: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Met à jour l'état pour le champ spécifique
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
  };

  const [isToggled, setIsToggled] = useState(true);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <SelectExample />
      <LoaderExample />
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
        extraClass="danger"
        disabled={true}
      />
      <Button
        icon={<FaBeer />}
        onClick={() => handleClick()}
        extraClass="outline-success"
        disabled={false}
      />
      <Radio titre="titre" labels={["label", "ntm", "bitch"]} />
      <Button
        text="ok"
        onClick={handleClick}
        extraClass="danger fullWidth"
        disabled={true}
      />
      <Button
        icon={<FaBeer />}
        text="bière"
        onClick={handleClick}
        extraClass="success right"
        disabled={false}
      />

      <div className="width">
        <Card
          titre="WOW"
          imageUrl={imageUrl}
          description="Chokbar"
          actionText="voir plus"
          extraClass="height-500 width-30"
          onActionClick={handleClick}
        />
        <Card
          titre="WOW"
          imageUrl={imageUrl}
          description="Chokbar"
          actionText="voir plus"
          extraClass="height-500 width-50"
          onActionClick={handleClick}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          label="Texte"
          type="text"
          value={formData.text}
          onChange={handleChange}
          required
          placeholder="Entrez votre texte"
          name="text" // Assurez-vous que chaque input a un nom unique
        />
        <Input
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Entrez votre email"
          name="email"
        />
        <Input
          label="Mot de passe"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Entrez votre mot de passe"
          name="password"
        />
        <Input
          label="Nombre"
          type="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Entrez un nombre"
          name="number"
        />
        <Input
          label="Date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />
        <button type="submit">Soumettre</button>
      </form>
      <Toggle
        rounded={true}
        onToggle={() => handleToggle()}
        isToggled={isToggled}
        className="switch-lg"
      />
    </>
  );
}

export default App;
