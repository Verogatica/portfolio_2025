import React from 'react';
import Card from './Card';
import Data from '../data/info.json';

const Gallery = () => {
  return (
    <div className="galeria">
      <div className="grid">
        {Data.proyectos.map((proyecto) => (
          <div
            key={proyecto.id}
             >
            <div>
              <Card
                imageUrl={proyecto.foto}
                title={proyecto.nombre}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
