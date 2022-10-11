import React from 'react';
import './styles/footer.css';
import logoMail from '../images/logos/logo_mail.png';
import logoLinkedin from '../images/logos/logo_linkedin.png';

function toMail() {
    window.open('mailto:loustau.exequiel@gmail.com', '_blank');
};

function toLinkedin() {
    window.open('https://www.linkedin.com/in/e-a-loustau/', '_blank');
};

function Footer() {
    return (
        <div className='footer__container__dev'>
            <hr className='footer__line' />
            <div className='footer__container__dev_info'>
                    Página web desarrollada por Exequiel Adrian Loustau. 2022
                    <button className='btn btn-outline-dark footer__button' onClick={ toMail }>
                        <img alt='logo mail' src={ logoMail } />
                    </button>
                    <button className='btn btn-outline-dark footer__button' onClick={ toLinkedin }>
                        <img alt='logo linkedin' src={ logoLinkedin } />
                    </button>
                </div>
        </div>
     );
}

export { Footer };
