import './styles/navbar.css';
import { Link, animateScroll as scroll } from 'react-scroll';

function Navbar() {
    return ( 
        <div className='navbar__container'>
            <div className='button__container'>
                <span></span>

                <Link   type="button" className='btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section1'
                        offset={40}
                        >Integrantes</Link>

                <Link   type="button" 
                        className='btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section2'
                        offset={40}
                        >Juegos</Link>

                <Link   type="button" 
                        className='btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section3'
                        offset={0}
                        >Reunion</Link>

                <Link   type="button" 
                        className='btn btn-outline-dark navbar__buttons'
                        activeClass='Active'
                        to='section4'
                        offset={60}
                        >Redes</Link>
            </div>
        </div>
     );
}

export { Navbar };