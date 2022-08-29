import './styles/games.css';
import imgGames from '../images/logo_cuatro.png';
import imgPaladins from '../images/games_paladins.png';

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
                        <div className='col'>
                            Tuvimos un breve paso por este juego en el año 2017, frente al constante fallo de los 
                            servidores de Assassins Creed empezamos a buscar un nuevo juego para compartir y
                            continuar con la mecánica de dos juegos en nuestro evento semanal Jueves de Caos, 
                            Paladins fue una muy buena opción pero no se llevo muchos votos por parte de los
                            miembros del clan por lo que no lo seguimos jugando.
                        </div>
                    </div>
            </div>
        </div>
     );
}

export { Games };