import './App.css'
import Button from './components/Button/Button'
import Radio from './components/Radio/Radio'
import { FaBeer } from 'react-icons/fa';

function App() {
  const handleClick = () => {
    alert('YOOOOOOOOOOOOOOOOOOOO')
  }
  return (
    <>
      <Radio titre="titre" label="label" number={1} />
      <Button text="ok" onClick={handleClick} extraClass="danger rounded" disabled={true}/>
      <Button icon={<FaBeer />} onClick={handleClick} extraClass="success rounded" disabled={false} />
    </>
  )
}

export default App