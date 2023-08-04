import React, { useState, useEffect } from 'react';
import caoticos from './Caoticos';
import './styles/caoticoComponent.css';

const CaoticoComponent = ({ id, activeAudio, setActiveAudio, className }) => {
  const caotico = caoticos.find((caotico) => caotico.id === id);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(activeAudio && activeAudio.id === id && activeAudio.isPlaying);
  }, [activeAudio, id]);

  function listenMe() {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveAudio({ id, isPlaying: true });
    caotico.sound.play();

    caotico.sound.onended = () => {
      setIsPlaying(false);
      setActiveAudio((prev) => (prev.id === id ? { ...prev, isPlaying: false } : prev));
    };
  }

  if (!caotico) {
    return <div>No se encontró el Caótico con el ID proporcionado.</div>;
  }

  const isButtonDisabled = activeAudio && activeAudio.id !== id && activeAudio.isPlaying;

  return (
    <div key={id} className={`player__container ${className}`}>
      <img src={caotico.pic} alt={`Foto de ${caotico.name}`} />
      <div className='members__phrases'>
        {caotico.phrases.map((phrase, i) => (
          <div key={i}>{phrase}<br /></div>
        ))}
      </div>
      <button
        onClick={listenMe}
        className='btn btn-outline-danger members__btn'
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? 'ESPERA UN TOQUE' : 'ESCUCHAME'}
      </button>
    </div>
  );
};

export default CaoticoComponent;
