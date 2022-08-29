import './styles/links.css';

import imgLinks from '../images/logo_seis.png';

function youTubeClan () {
    window.open('https://www.youtube.com/channel/UCa_GEyk5nmZKX6icr0o8A5w');
};

function discord () {
    window.open('https://discord.gg/cQPUMh7kcc');
};

function youTubeCuervo () {
    window.open('https://www.youtube.com/channel/UCGgJ06LB1bp2NM9VDR7sErw');
};

function Links() {
    return ( 
        <div className='links__container'>
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
                    </div>
        </div>
     );
}

export { Links };