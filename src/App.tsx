import './App.css';
import './components/assets/styleGeneral.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SelectExample from './components/Select/Select.example';
import LoaderExample from "./components/Loader/Loader.example";
import InputExample from './components/Input/Input.example';
import CarouselExample from './components/Carousel/Carousel.example';
import ButtonExample from './components/Button/Button.example';
import RadioExample from './components/Radio/Radio.example';
import CardExample from './components/Card/Card.example';
import ModalExample from './components/Modal/Modal.example';
import AccordeonExample from './components/Accordeon/Accordeon.example';
import CheckboxExample from './components/Checkbox/Checkbox.example';
import ToggleExample from './components/Toggle/Toggle.example';
import AlertExample from './components/Alert/Alert.example';
import TableauExample from './components/Tableau/Tableau.example';

function App() {

  /*
  * Navigation entre les composants
  */
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
              <Route path="/input" element={<InputExample />} />
              <Route path="/checkbox" element={<CheckboxExample />} />
              <Route path="/select" element={<SelectExample />} />
              <Route path="/radio" element={<RadioExample />} />
              <Route path="/toggle" element={<ToggleExample />} />
              <Route path="/button" element={<ButtonExample />} />
              <Route path="/loader" element={<LoaderExample />} />
              <Route path="/alert" element={<AlertExample />} />
              {/* <Route path="/input" element={<BreadcrumbExample />} /> */}
              <Route path="/card" element={<CardExample />} />
              <Route path="/accordeon" element={<AccordeonExample />} /> 
              <Route path="/carousel" element={<CarouselExample />} />
              <Route path="/modal" element={<ModalExample />} />
              {/* <Route path="/input" element={<TabsExample />} /> */}
              <Route path="/tableau" element={<TableauExample />} />
            </Routes>
        </main>
      </div>
    </Router>
  );

}

export default App;
