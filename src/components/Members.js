import React from 'react';
import './styles/members.css';
import imgIntegrantes from '../images/logo_integrantes.png';

import fotoTigre from '../images/member_tigre.png';
import audioTigre from '../sounds/Tigre.mp3';
import fotoCuervo from '../images/member_cuervo.png';
import audioCuervo from '../sounds/Cuervo.mp3';
import fotoNicol from '../images/member_nicol.png';
import fotoFibe from '../images/member_fibe.png';
import audioFibe from '../sounds/Fibe.mp3';

let tigreSound = new Audio(audioTigre);
let cuervoSound = new Audio(audioCuervo);
let fibeSound = new Audio(audioFibe);

function soundTigre() {
    tigreSound.play();
}

function soundCuervo() {
    cuervoSound.play();
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
                        Actualmente, año 2022, seguimos activos y jugando eventos semanales. Y si bien 
                        contamos con un grupo solido de miembros, han sido muchas las personas que pasaron por este clan, 
                        desde jugadores que compartieron solo algunos momentos, hasta verdaderos amigos quienes entendieron 
                        de que se trata CAOS; a todos y cada uno de ellos les estamos agradecidos, porque absolutamente de
                        todos los comportamientos humanos, siempre se aprende algo. <br/>
                        Como todo clan, manejamos un orden de rangos que simplemente nos permite organizarnos y exponemos
                        en esta grilla los miembros mas unidos al clan hasta el momento...
                    </div>
                    <div className='row members__members'>
                        <span>Lider</span>
                            <div className='players_general_container'>
                                <div className='player__container'>
                                        <img alt='foto de miembro' src={ fotoTigre } />
                                            <div className='members_tag'>TigreSerrano</div>
                                            <div className='members_date'>27/05/1978</div>
                                        <span>
                                            <div className='members__phrases'>
                                                Te dicta, y no es la tarea.<br/>
                                                Toma mucho, pero no esta tan tan taan mal.<br/>
                                                Conocido como "flechitas" Serrano.<br/>
                                                Nunca se acuerda de que tiene mala memoria.<br/>
                                            </div>
                                            <button onClick={soundTigre} 
                                                    className='btn btn-outline-danger members__btn'>
                                                        ESCUCHAME</button>
                                        </span>
                                </div>
                            </div>
                        <span>Oficiales</span>
                            <div className='players_general_container'>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoNicol } />
                                        <div className='members_tag'>NicoThePig</div>
                                        <div className='members_date'>19/09/1995</div>
                                    <span>
                                        <div className='members__phrases'>
                                            Qliaaaaado <br/>
                                            El que se caga en dios <br/>
                                            0 sarcasmo <br/>
                                            la lala <br/>
                                        </div>
                                        <button onClick={soundFibe}
                                                className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </span>
                                </div>
                                <div className='mb-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoCuervo } />
                                        <div className='members_tag'>Yo.Cuervo</div>
                                        <div className='members_date'>07/02/1987</div>
                                    <span>
                                        <div className='members__phrases'>
                                            Qliaaaaado <br/>
                                            El que se caga en dios <br/>
                                            0 sacrasmo <br/>
                                            la lala <br/>
                                        </div>
                                        <button onClick={soundCuervo} 
                                                className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </span>
                                </div>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoFibe } />
                                        <div className='members_tag'>Fibe55</div>
                                        <div className='members_date'>22/02/2001</div>
                                    <span>
                                        <div className='members__phrases'>
                                            Insultador Serial.<br/>
                                            Mas tóxico que Chernobyl.<br/>
                                            Lagggggggguero.<br/>
                                            Muy en el fondo, un tierno... <br/>
                                        </div>
                                        <button onClick={soundFibe} 
                                                className='btn btn-outline-danger members__btn'>
                                                    ESCUCHAME</button>
                                    </span>
                                </div>
                            </div>
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                            <span>Miembros</span>
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                            


                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                                <span />
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                    </div>
            </div>
     );
}

export { Members };