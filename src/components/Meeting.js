import React from 'react';
import './styles/meeting.css';
import imgMeet from '../images/logo_reunion.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';

import meet1 from '../images/meet/Meet01.png';
import meet2 from '../images/meet/Meet02.png';
import meet3 from '../images/meet/Meet03.png';
import meet4 from '../images/meet/Meet04.png';
import meet5 from '../images/meet/Meet05.png';
import meet6 from '../images/meet/Meet06.png';
import meet7 from '../images/meet/Meet07.png';
import meet8 from '../images/meet/Meet08.png';



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
                    <div className='meeting__pics_container'>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                                }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className='mySwiper'>
                                <SwiperSlide className='meet_pic_text'>
                                    2017<br/>Primer Juntada Caotica<br/>
                                    <img alt='Foto de Juntada' src={meet1} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2019<br/>Bien Alcohompañados<br/>
                                    <img alt='Foto de Juntada' src={meet2} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2019<br/>No somos fotógrafos claramente<br/>
                                    <img alt='Foto de Juntada' src={meet3} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2019<br/>El lider tomo la foto (o ya estaba desmayado?)<br/>
                                    <img alt='Foto de Juntada' src={meet4} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2020<br/>Hay Equipo!<br/>
                                    <img alt='Foto de Juntada' src={meet5} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2020<br/>No lo soñeeee ieee eeee<br/>
                                    <img alt='Foto de Juntada' src={meet6} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2020<br/>medios ebriormidos<br/>
                                    <img alt='Foto de Juntada' src={meet7} />
                                </SwiperSlide>
                                <SwiperSlide className='meet_pic_text'>
                                    2020<br/>8 Caoticos y nadie noto que la pelota quedo al otro lado... Sigamos con los videojuegos nomas<br/>
                                    <img alt='Foto de Juntada' src={meet8} />
                                </SwiperSlide>
                                
                        </Swiper>
                    </div>
            </div>
     );
}

export { Meeting };