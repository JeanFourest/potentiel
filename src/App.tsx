import './App.css';
import './components/assets/styleGeneral.css';

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SelectExample from './components/Select/Select.example';
import LoaderExample from "./components/Loader/Loader.example";
import Card from "./components/Card/Card";
import imageUrl from './components/assets/images/beaugosse.png';
import CarouselExample from './components/Carousel/Carousel.example';
import CheckboxExample from './components/checkbox/Checkbox.example';
import ToggleExample from './components/toggle/Toggle.example';
import ButtonExample from './components/Button/Button.example';
import RadioExample from './components/Radio/Radio.example';
import CardExample from './components/Card/Card.example';
import ModalExample from './components/Modal/Modal.example';
import AccordeonExample from './components/Accordeon/Accordeon.example';

function App() {
  const [values, setValues] = useState<(string | number)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  console.log(values);

  const openModal = (card: CardData) => {
    setSelectedCard(card);
    setIsModalOpen(true);
};

const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
};

const cardData: CardData = {
    titre: "WOW",
    imageUrl: imageUrl,
    content: "Chokbar",
    actionText: "voir plus",
    extraClass: "height-500 width-30"
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
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <h2>Composants</h2>
          <div className="menu-section">
            <h3>Atoms</h3>
            <ul>
              <li><Link to="/input">Input</Link></li>
              <li><Link to="/checkbox">Checkbox</Link></li>
              <li><Link to="/select">Select</Link></li>
              <li><Link to="/radio">Radio</Link></li>
              <li><Link to="/toggle">Toggle</Link></li>
              <li><Link to="/button">Button</Link></li>
              <li><Link to="/loader">Loader</Link></li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Molécules</h3>
            <ul>
              <li><Link to="/alert">Alert</Link></li>
              <li><Link to="/breadcrumb">BreadCrumb</Link></li>
              <li><Link to="/card">Card</Link></li>
            </ul>
          </div>
          <div className="menu-section">
            <h3>Organismes</h3>
            <ul>
              <li><Link to="/accordeon">Accordeon</Link></li>
              <li><Link to="/carousel">Carousel</Link></li>
              <li><Link to="/modal">Modal</Link></li>
              <li><Link to="/tabs">Tabs</Link></li>
              <li><Link to="/tableau">Tableau</Link></li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
            <Routes>
            <Route path="/select" element={<SelectExample />} />
            <Route path="/loader" element={<LoaderExample />} />
            <Route path="/card" element={<CardExample />} />
            <Route path="/checkbox" element={<CheckboxExample />} />
            <Route path="/button" element={<ButtonExample />} />
            <Route path="/radio" element={<RadioExample />} />
            <Route path="/toggle" element={<ToggleExample />} />
            {/* <Route path="/input" element={<AlertExample />} /> */}
            {/* <Route path="/input" element={<BreadcrumbExample />} /> */}
            {/* <Route path="/input" element={<CardExample />} /> */}
            <Route path="/accordeon" element={<AccordeonExample />} /> 
            <Route path="/carousel" element={<CarouselExample />} />
            <Route path="/modal" element={<ModalExample />} />
            {/* <Route path="/input" element={<TabsExample />} /> */}
            {/* <Route path="/input" element={<TableauExample />} /> */}
            </Routes>
        </main>
      </div>
    </Router>
    
  );

  // return (
  //   <>
  //     <SelectExample/>
  //     <LoaderExample/>
  //     <Checkbox
  //       group={[
  //         { label: "All", value: "all", checked: false, checkAll: true },
  //         { label: "Number", value: 6, checked: false, checkAll: false },
  //         { label: "Hello", value: "hello", checked: false, checkAll: false },
  //         { label: "Baka", value: "baka", checked: false, checkAll: false },
  //       ]}
  //       onChange={(e: any) => setValues(e)}
  //       className="checkbox"
  //     />
  //     <Button
  //       text="ok"
  //       onClick={() => handleClick()}
  //       extraClass="danger"
  //       disabled={true}
  //     />
  //     <Button
  //       icon={<FaBeer />}
  //       onClick={() => handleClick()}
  //       extraClass="outline-success"
  //       disabled={false}
  //     />
  //     <Radio titre="titre" labels={["label", "ntm", "bitch"]} />
  //     <Button text="ok" onClick={handleClick} extraClass="danger fullWidth" disabled={true}/>
  //     <Button icon={<FaBeer />} text="bière" onClick={handleClick} extraClass="success right" disabled={false} />

      // <div className='width'>
      //   <Card titre="WOW" imageUrl={imageUrl} description='Chokbar' actionText='voir plus' extraClass="height-500 width-30" onActionClick={handleClick} />
      //   <Card titre="WOW" imageUrl={imageUrl} description='Chokbar' actionText='voir plus' extraClass="height-500 width-50" onActionClick={handleClick} />
      // </div>

  //     <form onSubmit={handleSubmit}>
  //     <Input
  //       label="Texte"
  //       type="text"
  //       value={formData.text}
  //       onChange={handleChange}
  //       required
  //       placeholder="Entrez votre texte"
  //       name="text"  // Assurez-vous que chaque input a un nom unique
  //     />
  //     <Input
  //       label="Email"
  //       type="email"
  //       value={formData.email}
  //       onChange={handleChange}
  //       required
  //       placeholder="Entrez votre email"
  //       name="email"
  //     />
  //     <Input
  //       label="Mot de passe"
  //       type="password"
  //       value={formData.password}
  //       onChange={handleChange}
  //       required
  //       placeholder="Entrez votre mot de passe"
  //       name="password"
  //     />
  //     <Input
  //       label="Nombre"
  //       type="number"
  //       value={formData.number}
  //       onChange={handleChange}
  //       placeholder="Entrez un nombre"
  //       name="number"
  //     />
  //     <Input
  //       label="Date"
  //       type="date"
  //       value={formData.date}
  //       onChange={handleChange}
  //       name="date"
  //     />
  //     <button type="submit">Soumettre</button>
  //   </form>
  //   </>
  // );
}

export default App;
