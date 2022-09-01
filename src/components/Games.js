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
                    <img alt='otro logo del Clan' src={ imgGames } />
                </div>
                <div className='games__list'>

                    <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Assassin's Creed</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                <img alt='Imagen de Assassins Creed' src={ imgAssassins } />
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
                                La incursión de CAOS en Warface es una de las etapas mas recordadas, también fue el momento 
                                en el que CAOS contó con la mayor cantidad de jugadores activos dentro de un mismo videojuego, 
                                disfrutábamos eventos con salas llenas y listas de espera a veces eternas, también cabe destacar 
                                que contábamos con miembros del clan activos sin importar la hora, siempre había alguien 
                                jugando!<br/>
                                Fuimos reconocidos por gran parte de la comunidad latina y de NA debido a la actividad 
                                constante que tuvimos en el juego, cosechando seguidores y un par de broncas también (no se 
                                le puede caer bien a todo el mundo jaja). Este genial shooter, que tenía gran potencial para 
                                convertirse en un juegazo, nos acompañó por un buen tiempo, tal vez sus defectos fueron las 
                                fallas de registro y el hecho de que no contaba con un servidor regional, este fue un importante 
                                punto en contra que nos impulsó a buscar nuevos juegos y finalmente darle una oportunidad a 
                                Ironsight que sí reunía estas características y más.<br/>
                                CAOS así finalizaba su aventura en Warface un juego recordado y querido por todos nosotros.
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                <img alt='Imagen de Warface' src={ imgWarface } />
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Paladins</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay='300' className='col games__list_game'>
                                <img alt='Imagen de Paladins' src={ imgPaladins } />
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
                                En este juego no solamente logramos mantener viva la llama de nuestra hermandad, a pesar 
                                de la incertidumbre que siempre plantea un cambio de juego, si no que además logramos, a 
                                pesar de algunos momentos álgidos, fortalecer el gran espíritu de CAOS.<br/>
                                Desde finales del año 2019 hasta el día de hoy, es uno de los juegos que aún siguen siendo 
                                referentes en los eventos del clan.
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                <img alt='Imagen de Ironsight' src={ imgIron } />
                            </div>
                        </div>

                        <div data-aos='fade-up' data-aos-delay='300' className='games__list_name'>Rainbow Six Siege</div>
                        <div className='row games__list_container'>
                            <div data-aos='fade-up-right' data-aos-delay="300" className='col games__list_game'>
                                <img alt='Imagen de Rainbow 6' src={ imgRainbow } />
                            </div>
                            <div data-aos='fade-up-left' data-aos-delay='300' className='col games__list_game'>
                                Después de una exhaustiva búsqueda por ampliar nuestro repertorio de juegos, nos llega 
                                nuevamente, tras muchos años, la opción de pasar a un juego de paga una vez más (estuvimos 
                                mucho tiempo en juegos F2P). Y así surge la idea de darle una chance a Rainbow Six Siege, un 
                                juego mucho mas estratégico que otros shooters, algo que a muchos nos costó entender, pero 
                                supimos apreciar. R6 es, sin embargo, uno de nuestros videojuegos principales de la actualidad, 
                                ya que de a poco, fue robándose el corazón de algunos caóticos que lo miraban de costado con 
                                miedo a lo desconocido.<br/> 
                                Cosas como el buen registro, una gran comunidad y encontrar salas públicas en tiempos cortos, 
                                han sido fundamentales para que R6 siga siendo uno de nuestros actuales pasatiempos.<br/> 
                                Para saber como continúa esta historia, te invitamos a que te unas a CAOS y nos acompañes 
                                siempre que quieras... Este grupo de locos va a estar siempre en constante crecimiento y 
                                evolución, sumando siempre una "pisquita" de caos, si no, ¿pa' que el nombre?
                            </div>
                        </div>

                </div>
            </div>
     );
}

export { Games };