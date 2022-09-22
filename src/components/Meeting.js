import React from 'react';
import './styles/meeting.css';
import imgMeet from '../images/logo_reunion.png';

import junt1 from '../images/Juntada1.jpg';
import junt2 from '../images/Juntada2.jpg';
import junt3 from '../images/Juntada3.jpg';
import junt4 from '../images/Juntada4.jpg';
import junt5 from '../images/Juntada5.jpg';
import junt6 from '../images/Juntada6.jpg';



function Meeting() {
    return ( 
            <div className='meeting__container'>
                <section id='section3' />
                    <div className='meeting__header'>
                        <img src={ imgMeet } alt="Another clan's Logo" />
                    </div>
                    <div className='meeting__title'>
                        Corrían los últimos meses del año 2016 y el clan ya llevaba 3 años de su creación, muchos de nosotros 
                        un poco en broma y otro poco en serio comenzamos a plantearnos que era increíble el hecho de compartir 
                        tanto tiempo juntos y no conocernos personalmente, así que sólo faltaba la excusa perfecta y esta apareció 
                        a fines de ese mismo año, cuando Ubisoft (Empresa creadora de Assassin´s Creed) anunció que su película 
                        se estrenaría en cines a fines de 2016... Listo, era el momento de romper la virtualidad.<br/>
                        Esa primer "juntada" real de un puñado de caóticos que a duras penas llegábamos a la media docena, el cine 
                        y un asado en la casa del líder fue el puntapié inicial de lo que luego dio paso a lo que denominamos 
                        "Juntada Anual de CAOS".<br/>
                        El éxito de estas reuniones fue poco a poco en aumento, para el año 2019 duplicamos el número de 
                        participantes de la primera, pero ya para el año 2020 era prácticamente imposible de organizar dentro de 
                        una casa, así que dimos un gran paso y el evento de ese año se convirtió en todo un hito dentro del clan, 
                        CAOS ya no solamente se destacaba por su longevidad y hermandad, ahora también sus reuniones anuales se 
                        convirtieron en culto.<br/>
                        La "Juntada Anual de CAOS 2020" fue especialmente destacable, ya que fue la primera a nivel internacional, 
                        no sólo contamos con los miembros de Uruguay si no que se sumaron grandes amigos desde Argentina. Tamaño 
                        despliegue necesitaba otra organización, pero por sobre todo mas tiempo y logística para sacarle el jugo a 
                        tanto esfuerzo. Fue así que pensamos alquilar una casa en la playa por todo un fin de semana!!!<br/>
                        Hubo de todo y el tiempo quedó muy corto entre charlas, chistes, anécdotas, playa, cartas, fútbol, asados, 
                        alcohol, pero por sobre todo HERMANDAD... lo que nos define!
                    </div>
                    <div className='row meeting__pics_row'>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt1} />
                            Aca se puede poner un texto laaaaaaaargo y aun asi va a quedar bien porque soy muy copado</div>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt2} />
                            Foto 2</div>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt3} />
                            Foto 3</div>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt4} />
                            Foto 4</div>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt5} />
                            Foto 5</div>
                        <div className='col-6 meeting__pics_col'>
                            <img alt='foto de la Juntada' src={junt6} />
                            Foto 6</div>
                    </div>
            </div>
     );
}

export { Meeting };