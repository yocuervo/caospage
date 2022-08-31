import React from 'react';
import './styles/games.css';
import imgGames from '../images/logo_juegos.png';
import imgAssassins from '../images/games_assassins.png';
import imgPaladins from '../images/games_paladins.png';
import imgWarface from '../images/games_warface.png';
import imgIron from '../images/games_iron.png';
import imgRainbow from '../images/games_rainbow.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Games() {
    
    return (
        <div className='games__container'>
                <section id='section2' />
                <div className='games__header'>
                    <img src={ imgGames } />
                </div>
                <div className='games__list'>

                    <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Assassin's Creed</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                <img src={ imgAssassins } />
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                Assassin’s Creed: El juego donde todo comenzó, el que encendió la llama de nuestra HERMANDAD.<br/>
                                Justamente allí entre el Brotherhood y el Revelations fué que comenzamos a cruzarnos un pequeño 
                                grupo de latinos, en un server europeo donde lográbamos destacarnos y competir a pesar de la enorme 
                                desventaja técnica que teníamos al jugar con 300ms de diferencia. En un principio fuimos simplemente 
                                rivales con muchas cosas en común, luego con el tiempo fuimos de a poco compartiendo horas y 
                                estrechando vínculos, hasta que un día se abrió la posibilidad de formar clanes dentro del juego. 
                                Fué allí cuando surgió la idea de agruparnos bajo un mismo estandarte, romper con el juego individual 
                                y crear nuestro propio clan, sumando la comunicación en las juntadas virtuales que hacíamos mediante 
                                Skype (si, usábamos Skype). En los primeros meses nos llamábamos RIP (Requiescat in pace, por la 
                                célebre frase que los Asesinos pronunciaban a sus víctimas al asesinarlos). Pero al poco tiempo y 
                                con la llegada de Assassin’s Creed 4: Black Flag, nos pasamos a llamar CAOS y ese pequeño grupo 
                                inicial de latinos fué creciendo y adoptando miembros de los 5 continentes.<br/>
                                Sin dudas Assassin's Creed fué el juego que nos vió nacer y por el cual aún en la nostalgia de poco 
                                mas de una década conservamos una debilidad extraordinaria. Lamentablemente el paso del tiempo y 
                                sobretodo la falta de mantenimiento en su server, hizo que buscáramos nuevos horizontes.
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Warface</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                jugando descubrimos que el juego ya no progresaba y no nos retribuía de la misma 
                                forma, la constante pelea por un servidor en Latinoamérica y el deterioro del mismo 
                                nos llevó nuevamente a abrir el abanico de opciones y salir en busca de un nuevo 
                                proyecto. Para cuando Warface tenía su servidor regional a nosotros ya no nos 
                                llenaba con la misma ilusión de un principio
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                <img src={ imgWarface } />
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Paladins</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                <img src={ imgPaladins } />
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                Tuvimos un breve paso por este juego en el año 2017, frente al constante fallo de los 
                                servidores de Assassins Creed empezamos a buscar un nuevo juego para compartir y
                                continuar con la mecánica de dos juegos en nuestro evento semanal Jueves de Caos, 
                                Paladins fue una muy buena opción pero no se llevo muchos votos por parte de los
                                miembros del clan por lo que no lo seguimos jugando.
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Ironsight</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                Este juego nació casi como una necesidad impostergable en el clan.<br/>
                                Una mezcla de cansancio e impotencia debido a la falta de server regional en Warface
                                le puso fin a nuestra historia en este juego y le dió paso a este frenético y renovador 
                                shooter llamado Ironsight.<br/>
                                En este juego no solamente logramos mantener viva la llama de nuestra hermandad a pesar 
                                de la incertidumbre que siempre plantea un cambio de juego si no que además logramos a 
                                pesar de algunos momentos álgidos fortalecer el gran espíritu de CAOS.<br/>
                                Desde finales del año 2019 hasta el día de hoy, es uno de los juegos que aún siguen siendo 
                                referentes en los eventos del clan.
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                <img src={ imgIron } />
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Rainbow Six Siege</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay="300" className='col games__list_game'>
                                <img src={ imgRainbow } />
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                Después de una exhaustiva búsqueda por ampliar nuestro repertorio de juegos nos llega 
                                después de muchos años la opción de pasar a un juego de paga nuevamente (estuvimos mucho 
                                tiempo en juegos F2P). Y así surge la idea de darle una chance a Rainbow Six Siege un juego 
                                donde la estrategia sí importa y no el rush al bardo, como veníamos acostumbrados de otros 
                                juegos, algo que a muchos nos costó entender. Siege es sin embargo uno de nuestros actuales 
                                juegos ya que de a poco va robándose el corazón de algunos caóticos que lo miraban de costado
                                con miedo a lo desconocido hace un tiempo atrás. Cosas como el buen registro, encontrar salas 
                                rápidas y otras cosas han sido fundamentales para que Siege siga siendo uno de nuestros actuales 
                                pasatiempos.<br/>
                                Éste grupo de locos va a estar siempre en constante crecimiento, evolución y obvio con una 
                                "pisquita" de CAOS, si no, ¿pa' que el nombre?
                            </div>
                        </div>

                </div>
            </div>
     );
}

export { Games };