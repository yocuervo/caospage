import './styles/header.css';
import logoOne from '../images/logo_uno.png';
import logoTwo from '../images/logo_dos.png';

function touchMe() {
        alert('11111')
}

function Header() {
    return (
        <div className='row header__container'>
            <div className='col-7 header_one'>
                <img alt="Clan's name" src={logoOne} />
            </div>
            <div className='col header_two'>
                <img onClick={touchMe} alt="Clan's logo" src={logoTwo} />
            </div>
        </div>
    );
}

export { Header };