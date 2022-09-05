import './styles/navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
    return ( 
        <div className='navbar__container'>
            <div className='row button__container'>
                <span></span>
                <Link   type="button" className='col-xs-12 col-lg btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section1'
                        offset={0}
                        >Integrantes</Link>

                <Link   type="button" 
                        className='col-xs-12 col-lg btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section2'
                        offset={-10}
                        >Juegos</Link>

                <Link   type="button" 
                        className='col-xs-12 col-lg btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section3'
                        offset={0}
                        >Reuniones</Link>

                <Link   type="button" 
                        className='col-xs-12 col-lg btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section4'
                        offset={-10}
                        >Redes</Link>
            </div>
        </div>
     );
}

export { Navbar };