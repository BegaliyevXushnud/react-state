import React, { useState } from 'react';

const Animals = () => {
  const [animals] = useState([
    { id: 1, animalName: "Lion", type: "Panthero leo", weight: "140kg", food: "meat" },
    { id: 2, animalName: "Gorilla", type: "Gorillla beringei", weight: "205kg", food: "plants, insects" },
    { id: 3, animalName: "Zebra", type: "Equus quuage", weight: "322kg", food: "plants" }
  ]);

  return (
   <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection:'column', alignItems:'center' }}>
    <h1>Task-3</h1>
    <h1>Animals</h1>
     <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      
      {animals.map(animal => (
        <div key={animal.id} style={cardStyle}>
          <h2>{animal.animalName}</h2>
          <p><strong>Type:</strong> {animal.type}</p>
          <p><strong>Weight:</strong> {animal.weight}</p>
          <p><strong>Food:</strong> {animal.food}</p>
        </div>
      ))}
    </div>
   </div>
  );
};

// Inline card style (you can also use a CSS file for better organization)
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '250px',
  textAlign: 'center'
};

export default Animals;
