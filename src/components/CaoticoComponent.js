import React from 'react';
import caoticos from './Caoticos';
import './styles/CaoticoComponent.css';

const CaoticoComponent = ({ id }) => {
const caotico = caoticos.find((caotico) => caotico.id === id);

if (!caotico) {
    return <div>No se encontró el Caótico con el ID proporcionado.</div>;
  }

  return (
    <div key={id} className='player__container'>
        <img src={caotico.pic} alt={`Foto de ${caotico.name}`} />
            <div className='members__phrases'>
                {caotico.phrases.map((phrase, i) => (
                <div key={i}>{phrase}<br/></div>
                ))}
            </div>
                <button onClick={() => caotico.sound.play()} className='btn btn-outline-danger members__btn'>
                    ESCUCHAME
                </button>
    </div>
  );
};

export default CaoticoComponent;