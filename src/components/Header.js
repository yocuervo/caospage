import './styles/header.css';
import Swal from 'sweetalert2';
import logoOne from '../images/logo_uno.png';
import logoTwo from '../images/logo_dos.png';
import fun from '../images/fun.png';
import funTwo from '../images/funTwo.png';

let cont = 0;

function touchMe() {
    if(cont === 0) {
        Swal.fire(
            'Que tocas???'
        );
        cont = 1
    } else if(cont === 1) {
        Swal.fire(
            'En serio??? 😡'
        );
        cont = 2
    } else if(cont === 2) {
        Swal.fire(
            {
            icon: 'error',
            title: 'Uhh blandito...',
            text: 'Te vas a arrepentir... 😏',
          });
        cont = 3
    } else if(cont === 3) {
        Swal.fire({
            imageUrl: fun,
            imageHeight: 10000,
            imageAlt: 'A tall image',
            allowOutsideClick: false,
            allowEnterKey: false,
            stopKeydownPropagation: false
          });
        cont = 4
    } else if(cont === 4) {
        Swal.fire({
            imageUrl: funTwo,
            title: 'Cuanto tiempo al vicio picaron...'
        });
        cont = 0
    }
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