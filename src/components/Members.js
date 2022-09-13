import React from 'react';
import './styles/members.css';
import imgIntegrantes from '../images/logo_integrantes.png';

import fotoTigre from '../images/member_tigre.png';
import audioTigre from '../sounds/Tigre.mp3';
import fotoCuervo from '../images/member_cuervo.png';
import audioCuervo from '../sounds/Cuervo.mp3';
import fotoNicol from '../images/member_nicol.png';
import audioNicol from '../sounds/Nicol.mp3';
import fotoFibe from '../images/member_fibe.png';
import audioFibe from '../sounds/Fibe.mp3';

let tigreSound = new Audio(audioTigre);
let cuervoSound = new Audio(audioCuervo);
let nicolSound = new Audio(audioNicol);
let fibeSound = new Audio(audioFibe);

function soundTigre() {
    tigreSound.play();
}

function soundCuervo() {
    cuervoSound.play();
}

function soundNicol() {
    nicolSound.play();
}

function soundFibe() {
    fibeSound.play();
}


function Members() {
    return (
        <div className='members__container'>
            <section id='section1' />
                <div className='members__header'>
                    <img src={ imgIntegrantes } alt="Another clan's Logo" />
                </div>
                <div className='members__data'>
                    Actualmente (2022), seguimos activos y compartiendo varios eventos semanales, entre los que se 
                    destaca nuestro emblemático y sagrado "Jueves de CAOS", y si bien contamos con un grupo sólido 
                    de miembros, han sido muchas las personas que pasaron por este clan, desde jugadores que compartieron 
                    solo algunos momentos hasta verdaderos amigos quienes entendieron de que se trata CAOS; a todos 
                    y cada uno de ellos les estamos agradecidos, porque absolutamente de todos los comportamientos humanos, 
                    siempre se aprende algo.<br/>
                    Como todo clan, manejamos un orden de rangos que simplemente nos permite organizarnos y exponemos 
                    en esta grilla los miembros mas relevantes del clan hasta el momento...
                </div>
                <div className='caoticos__container'>
                    <div className='row members__title'>Lider</div>
                        <div className='row members__lider'>
                            <div className='col-12 players_general_container'>
                                <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoTigre } />
                                            <div className='members__phrases'>
                                                Te dicta, y no es la tarea.<br/>
                                                Toma mucho, pero no esta tan tan taan mal.<br/>
                                                Conocido como "flechitas" Serrano.<br/>
                                                Nunca se acuerda de que tiene mala memoria.<br/>
                                            </div>
                                    <button onClick={soundTigre} className='btn btn-outline-danger members__btn'>
                                                ESCUCHAME</button>
                                </div>
                            </div>
                        </div>

                    <div className='row members__title'>Oficiales</div>
                        <div className='col-4 members__oficial'>
                            <div className='players_general_container'>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoNicol } />
                                        <div className='members__phrases'>
                                            Habla mal 3 idiomas.<br/>
                                            Cambió su primer Nickname por el acoso de los hombres.<br/>
                                            Se pregunta porque no le contestan y está muteado.<br/>
                                            Todavía va al colegio, pero ahora es "El Profe".<br/>
                                        </div>
                                        <button onClick={soundNicol} className='btn btn-outline-danger members__btn'>
                                                ESCUCHAME</button>
                                </div>
                                <div className='mb-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoCuervo } /> 
                                        <div className='members__phrases'>
                                            Ginecólogo y puteador compulsivo de deidades.<br/>
                                            Es cordobés pero odia el cuarteto.<br/>
                                            El Guasón dark del clan.<br/>
                                            Imprime penes en 3D.<br/>
                                        </div>
                                        <button onClick={soundCuervo} className='btn btn-outline-danger members__btn'>
                                                ESCUCHAME</button>
                                </div>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoFibe } />
                                        <div className='members__phrases'>
                                            Insultador Serial.<br/>
                                            En los juegos es mas tóxico que Chernobyl.<br/>
                                            Laggggguero (el 55 de su nick es porque no supera los 56kbps).<br/>
                                            Muy en el fondo, (pero muy adentro) un tierno...<br/>
                                        </div>
                                        <button onClick={soundFibe} className='btn btn-outline-danger members__btn'>
                                                ESCUCHAME</button>
                                </div>
                            </div>
                        </div>
                        
                    <div className='row members__title'>Miembros Destacados</div>
                    
                        <div className='col-3 members__caoticos'>
                                <div className='players_general_container'>
                                    <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoNicol } />
                                            <div className='members__phrases'>
                                                Qliaaaaado <br/>
                                                El que se caga en dios <br/>
                                                0 sarcasmo <br/>
                                                la lala <br/>
                                            </div>
                                            <button onClick={soundFibe} className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </div>
                                    <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoCuervo } /> 
                                            <div className='members__phrases'>
                                                Qliaaaaado <br/>
                                                El que se caga en dios <br/>
                                                0 sacrasmo <br/>
                                                la lala <br/>
                                            </div>
                                            <button onClick={soundCuervo} className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </div>
                                    <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoFibe } />
                                            <div className='members__phrases'>
                                                Insultador Serial.<br/>
                                                Mas tóxico que Chernobyl.<br/>
                                                Lagggggggguero.<br/>
                                                Muy en el fondo, un tierno... <br/>
                                            </div>
                                            <button onClick={soundFibe} className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </div>
                                    <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoFibe } />
                                            <div className='members__phrases'>
                                                Insultador Serial.<br/>
                                                Mas tóxico que Chernobyl.<br/>
                                                Lagggggggguero.<br/>
                                                Muy en el fondo, un tierno... <br/>
                                            </div>
                                            <button onClick={soundFibe} className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </div>
                                </div>
                        </div>
                            <span />
                        {/* Span divisor para un nuevo grupo de 4 miembros */}
                </div>
        </div>
     );
}

export { Members };
