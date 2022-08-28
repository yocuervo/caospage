import './styles/navbar.css';

function Navbar() {
    return ( 
        <div className='navbar__container'>
            <div className='button__container'>
                <span></span>
                <button type="button" className='btn btn-outline-dark navbar__buttons'>Orígenes</button>
                <button type="button" className='btn btn-outline-dark navbar__buttons'>Integrantes</button>
                <button type="button" className='btn btn-outline-dark navbar__buttons'>Juegos</button>
                <button type="button" className='btn btn-outline-dark navbar__buttons'>Redes</button>
            </div>
        </div>
     );
}

export { Navbar };