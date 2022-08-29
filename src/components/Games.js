import './styles/games.css';
import imgGames from '../images/logo_cuatro.png';
import imgPaladins from '../images/games_paladins.png';
import imgWarface from '../images/games_warface.png';

function Games() {
    return ( 
        <div className='games__container'>
            <div className='games__header'>
                <img src={ imgGames } />
            </div>
            <div className='games__list'>
                    <div className='games__list_name'>Paladins</div>
                    <div className='row games__list_container'>
                        <div className='col games__list_game'>
                            <img src={ imgPaladins } />
                        </div>
                        <div className='col games__list_game'>
                            Tuvimos un breve paso por este juego en el año 2017, frente al constante fallo de los 
                            servidores de Assassins Creed empezamos a buscar un nuevo juego para compartir y
                            continuar con la mecánica de dos juegos en nuestro evento semanal Jueves de Caos, 
                            Paladins fue una muy buena opción pero no se llevo muchos votos por parte de los
                            miembros del clan por lo que no lo seguimos jugando.
                        </div>
                    </div>

                    <div className='games__list_name'>Warface</div>
                    <div className='row games__list_container'>
                        <div className='col games__list_game'>
                            jugando descubrimos que el juego ya no progresaba y no nos retribuía de la misma 
                            forma, la constante pelea por un servidor en Latinoamérica y el deterioro del mismo 
                            nos llevó nuevamente a abrir el abanico de opciones y salir en busca de un nuevo 
                            proyecto. Para cuando Warface tenía su servidor regional a nosotros ya no nos 
                            llenaba con la misma ilusión de un principio
                        </div>
                        <div className='col games__list_game'>
                            <img src={ imgWarface } />
                        </div>
                    </div>
            </div>
        </div>
     );
}

export { Games };