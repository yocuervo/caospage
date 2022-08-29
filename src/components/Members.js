import './styles/members.css';
import logoThree from '../images/logo_tres.png';

import fotoTigre from '../images/member_tigre.png';
import fotoNicol from '../images/member_nicol.png';
import fotoCuervo from '../images/member_cuervo.png';
import fotoFibe from '../images/member_fibe.png';

function Members() {
    return ( 
        <div className='members__container'>
            <div className='members__header'>
                <img src={ logoThree } alt="Another clan's Logo" />
            </div>
            <div className='members__data'>
                Actualmente, año 2022, seguimos activos y jugando en los eventos semanales que tenemos, y si bien 
                tenemos un grupo solido de miembros, han sido muchas las personas que pasaron por este clan, 
                desde jugadores que compartieron solo algunos momentos, hasta verdaderos amigos quienes entendieron 
                de que se trata Caos, a todos y cada uno de ellos les estamos agradecidos, porque absolutamente de
                todos los comportamientos humanos, siempre se aprende algo.
                Como todo clan, manejamos un orden de rangos que simplemente nos permite organizarnos y exponemos
                en esta grilla los miembros mas unidos al clan hasta el momento...
            </div>
            <div className='row members__members'>
                <span>Lider</span>
                    <div className='players_general_container'>
                        <div className='player__container'>
                            <img src={ fotoTigre } />
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
                        <div className='player__container'>
                            <img src={ fotoCuervo } />
                            <div>Yo.Cuervo</div>
                            <span>
                                ⚡Qliaaaaado <br/>
                                ⚡El que se caga en dios <br/>
                                ⚡0 sacrasmo <br/>
                                ⚡la lala <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoNicol } />
                            <div>NicoThePig</div>
                            <span>
                                ⚡La colorada <br/>
                                ⚡el Profe <br/>
                                ⚡el que propone juegos <br/>
                                y no juega <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoFibe } />
                            <div>Fibe</div>
                            <span>
                                ⚡Puteador Serial <br/>
                                ⚡enferrrrrrrmo <br/>
                                ⚡Sr Lag <br/>
                                ⚡La gatita de Angora <br/>
                            </span>
                        </div>
                    </div>
                <span>Miembros</span>
                    <div className='players_general_container'>
                        <div className='player__container'>
                            <img src={ fotoCuervo } />
                            <div>Yo.Cuervo</div>
                            <span>
                                ⚡Qliaaaaado <br/>
                                ⚡El que se caga en dios <br/>
                                ⚡0 sacrasmo <br/>
                                ⚡la lala <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoNicol } />
                            <div>NicoThePig</div>
                            <span>
                                ⚡La colorada <br/>
                                ⚡el Profe <br/>
                                ⚡el que propone juegos <br/>
                                y no juega <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoFibe } />
                            <div>Fibe</div>
                            <span>
                                ⚡Puteador Serial <br/>
                                ⚡enferrrrrrrmo <br/>
                                ⚡Sr Lag <br/>
                                ⚡La gatita de Angora <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoTigre } />
                            <div>TigreSerrano</div>
                            <span>
                                ⚡el amado lider <br/>
                                ⚡borrachio <br/>
                                ⚡el rayas <br/>
                                ⚡carniceeeero <br/>
                            </span>
                        </div>
                    </div>
                        <span />
                    <div className='players_general_container'>
                        <div className='player__container'>
                            <img src={ fotoCuervo } />
                            <div>Yo.Cuervo</div>
                            <span>
                                ⚡Qliaaaaado <br/>
                                ⚡El que se caga en dios <br/>
                                ⚡0 sacrasmo <br/>
                                ⚡la lala <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoNicol } />
                            <div>NicoThePig</div>
                            <span>
                                ⚡La colorada <br/>
                                ⚡el Profe <br/>
                                ⚡el que propone juegos <br/>
                                y no juega <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoFibe } />
                            <div>Fibe</div>
                            <span>
                                ⚡Puteador Serial <br/>
                                ⚡enferrrrrrrmo <br/>
                                ⚡Sr Lag <br/>
                                ⚡La gatita de Angora <br/>
                            </span>
                        </div>
                        <div className='player__container'>
                            <img src={ fotoTigre } />
                            <div>TigreSerrano</div>
                            <span>
                                ⚡el amado lider <br/>
                                ⚡borrachio <br/>
                                ⚡el rayas <br/>
                                ⚡carniceeeero <br/>
                            </span>
                        </div>
                    </div>
            </div>
        </div>
     );
}

export { Members };