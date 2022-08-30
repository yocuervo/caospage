import './styles/footer.css';
import logoMail from '../images/logo_mail.png';
import logoLinkedin from '../images/logo_linkedin.png';
import React from 'react';

function toMail() {
    window.open('mailto:loustau.exequiel@gmail.com', '_blank');
};

function toLinkedin() {
    window.open('https://www.linkedin.com/in/e-a-loustau/', '_blank');
};

function Footer() {
    return (
        <React.Fragment>
            <hr className='footer__line' />
            <div className='footer__container__dev'>
                    Página web desarrollada por Exequiel Adrian Loustau. 2022
                    <button className='btn btn-outline-dark footer__button' onClick={ toMail }>
                        <img alt='logo mail' src={ logoMail } />
                    </button>
                    <button className='btn btn-outline-dark footer__button' onClick={ toLinkedin }>
                        <img alt='logo linkedin' src={ logoLinkedin } />
                    </button>
                </div>
        </React.Fragment>
     );
}

export { Footer };
