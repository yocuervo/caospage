import './styles/links.css';

import imgLinks from '../images/logos/logo_redes.png';
import React from 'react';

function youTubeClan () {
    window.open('https://www.youtube.com/channel/UCa_GEyk5nmZKX6icr0o8A5w');
};

function discord () {
    window.open('https://discord.gg/cQPUMh7kcc');
};

function youTubeTigre () {
    window.open('https://www.youtube.com/user/TigreSerrano');
};

function youTubeCuervo () {
    window.open('https://www.youtube.com/channel/UCGgJ06LB1bp2NM9VDR7sErw');
};

function youTubeNico () {
    window.open('https://www.youtube.com/user/LacerdaD13');
};

function Links() {
    return (
            <div className='links__container'>
            <section id='section4' />
                <div className='links__header'>
                    <img alt='imagen separadora' src={ imgLinks } />
                </div>
                <div className='links__clan'>Redes del Clan</div>
                    <div className='links__buttons'>
                        <button className='btn btn-outline-dark' onClick={ youTubeClan }>YouTube</button>
                        <button className='btn btn-outline-dark' onClick={ discord }>Discord</button>
                    </div>
                <div className='links__clan'>Redes de Miembros</div>
                    <div className='links__buttons'>
                        <button className='btn btn-outline-dark' onClick={ youTubeCuervo }>Yo.Cuervo</button>
                        <button className='btn btn-outline-dark' onClick={ youTubeTigre }>TigreSerrano</button>
                        <button className='btn btn-outline-dark' onClick={ youTubeNico }>NicoThePig</button>
                    </div>
            </div>
     );
}

export { Links };