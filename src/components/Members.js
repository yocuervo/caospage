import React from 'react';
import './styles/members.css';
import imgIntegrantes from '../images/logo_integrantes.png';

import fotoTigre from '../images/member_tigre.png';
import fotoNicol from '../images/member_nicol.png';
import fotoCuervo from '../images/member_cuervo.png';
import fotoFibe from '../images/member_fibe.png';
import audioFibe from '../sounds/Fibe.mp3';

let soundFibe = new Audio(audioFibe);

function playSound() {
    soundFibe.play();
}

function Members() {
    return (
                <div className='members__container'>
                <section id='section1' />
                    <div className='members__header'>
                        <img src={ imgIntegrantes } alt="Another clan's Logo" />
                    </div>
                    <div className='members__data'>
                        Actualmente, año 2022, seguimos activos y jugando en los eventos semanales que tenemos, y si bien 
                        contamos con un grupo solido de miembros, han sido muchas las personas que pasaron por este clan, 
                        desde jugadores que compartieron solo algunos momentos, hasta verdaderos amigos quienes entendieron 
                        de que se trata Caos; A todos y cada uno de ellos les estamos agradecidos, porque absolutamente de
                        todos los comportamientos humanos, siempre se aprende algo. <br/>
                        Como todo clan, manejamos un orden de rangos que simplemente nos permite organizarnos y exponemos
                        en esta grilla los miembros mas unidos al clan hasta el momento...
                    </div>
                    <div className='row members__members'>
                        <span>Lider</span>
                            <div className='players_general_container'>
                                <div className='player__container'>
                                    <img alt='foto de miembro' src={ fotoTigre } />
                                    <div>TigreSerrano</div>
                                    <span>
                                        ⚡el amado lider <br/>
                                        ⚡borrachio <br/>
                                        ⚡el rayas <br/>
                                        ⚡carniceeeero <br/>
                                    </span>
                                </div>
                            </div>
                        <span>Oficiales</span>
                            <div className='players_general_container'>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoNicol } />
                                    <div>NicoThePig</div>
                                    <span>
                                        ⚡La colorada <br/>
                                        ⚡el Profe <br/>
                                        ⚡el que propone juegos <br/>
                                        y no juega <br/>
                                    </span>
                                </div>
                                <div className='mb-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoCuervo } />
                                        <div className='members_tag'>Yo.Cuervo</div>
                                        <div className='members_date'>07/02/1987</div>
                                    <span>
                                        ⚡Qliaaaaado <br/>
                                        ⚡El que se caga en dios <br/>
                                        ⚡0 sacrasmo <br/>
                                        ⚡la lala <br/>
                                        <button onClick={playSound} className='btn btn-outline-danger members__btn'>ESCUCHAME</button>
                                    </span>
                                </div>
                                <div className='mt-4 player__container'>
                                    <img alt='foto de miembro' src={ fotoFibe } />
                                        <div className='members_tag'>Fibe55</div>
                                        <div className='members_date'>22/02/2001</div>
                                    <span>
                                        ⚡Insultador Serial <br/>
                                        ⚡Lagggggggguero <br/>
                                        ⚡Nerd Fundamentado <br/>
                                        <button onClick={playSound} className='btn btn-outline-danger members__btn'>ESCUCHAME</button>
                                    </span>
                                </div>
                            </div>
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                            <span>Miembros</span>
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                            <div className='players_general_container'>
                                <div className='player__container'>
                                    <img alt='foto de miembro' src={ fotoCuervo } />
                                    <div>Yo.Cuervo</div>
                                    <span>
                                        ⚡Qliaaaaado <br/>
                                        ⚡El que se caga en dios <br/>
                                        ⚡0 sacrasmo <br/>
                                        ⚡la lala <br/>
                                    </span>
                                </div>
                                <div className='player__container'>
                                    <img alt='foto de miembro' src={ fotoNicol } />
                                    <div>NicoThePig</div>
                                    <span>
                                        ⚡La colorada <br/>
                                        ⚡el Profe <br/>
                                        ⚡el que propone juegos <br/>
                                        y no juega <br/>
                                    </span>
                                </div>
                                <div className='player__container'>
                                    <img alt='foto de miembro' src={ fotoFibe } />
                                    <div>Fibe</div>
                                    <span>
                                        ⚡Puteador Serial <br/>
                                        ⚡enferrrrrrrmo <br/>
                                        ⚡Sr Lag <br/>
                                        ⚡La gatita de Angora <br/>
                                    </span>
                                </div>
                                <div className='player__container'>
                                    <img alt='foto de miembro' src={ fotoTigre } />
                                    <div>TigreSerrano</div>
                                    <span>
                                        ⚡el amado lider <br/>
                                        ⚡borrachio <br/>
                                        ⚡el rayas <br/>
                                        ⚡carniceeeero <br/>
                                    </span>
                                </div>
                            </div>
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                                <span />
                            {/* Span divisor para un nuevo grupo de 4 miembros */}
                    </div>
                </div>
     );
}

export { Members };