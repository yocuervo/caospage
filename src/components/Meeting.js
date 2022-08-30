import './styles/meeting.css';
import imgMeet from '../images/logo_reunion.png';
import React from 'react';

function Meeting() {
    return ( 
        <React.Fragment>
            <section id='section3' />
            <div className='meeting__container'>
                    <div className='meeting__header'>
                        <img src={ imgMeet } alt="Another clan's Logo" />
                    </div>
                <div className='meeting__title'>
                    Juntada
                </div>
            </div>
        </React.Fragment>
     );
}

export { Meeting };