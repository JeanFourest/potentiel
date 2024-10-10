import React, { useState } from 'react';
import Input from './components/Input';  // Assurez-vous que le chemin est correct

const App = () => {
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    password: '',
    number: '',
    date: '',
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
    console.log('Formulaire soumis:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Texte"
        type="text"
        value={formData.text}
        onChange={handleChange}
        required
        placeholder="Entrez votre texte"
        name="text"  // Assurez-vous que chaque input a un nom unique
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
  );
};

export default App;
