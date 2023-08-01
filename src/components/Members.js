import React from 'react';
import './styles/members.css';
import imgIntegrantes from '../images/logos/logo_integrantes.png';

import CaoticoComponent from './CaoticoComponent';

function Members() {
    return (
        <div className='members__container'>
            <section id='section1' />
                <div className='members__header'>
                    <img src={ imgIntegrantes } alt="Another clan's Logo" />
                </div>
                <div className='members__data'>
                    Actualmente (2023), seguimos activos y compartiendo varios eventos semanales, entre los que se 
                    destaca nuestro emblemático y sagrado "Jueves de CAOS", y si bien contamos con un grupo sólido 
                    de miembros, han sido muchas las personas que pasaron por este clan, desde jugadores que compartieron 
                    solo algunos momentos hasta verdaderos amigos quienes entendieron de que se trata CAOS; a todos 
                    y cada uno de ellos les estamos agradecidos, porque absolutamente de todos los comportamientos humanos, 
                    siempre se aprende algo.<br/>
                    Como todo clan, manejamos un orden de rangos que simplemente nos permite organizarnos y exponemos 
                    en esta grilla los miembros mas relevantes del clan hasta el momento...
                </div>

                <div className='caoticos__container'>
                    <div className='row members__title'>Lider</div>
                        <div className='row members__cupula'>
                            <div className='col-12 players_general_container'>          
                                    <CaoticoComponent id='Tigre' />
                            </div>
                        </div>

                    <div className='row members__title'>Oficiales</div>
                        <div className='row members__cupula'>
                                <div className='col-4 players_general_container'>   
                                    <CaoticoComponent id='Nico' />
                                    <CaoticoComponent id='Cuervo' />
                                    <CaoticoComponent id='Fibe' /> 
                                </div>
                            </div>
                        
                    <div className='row members__title'>Miembros Destacados</div>
                        <div className='row members__caoticos'>
                            {/* Por cada Div cargar solamente a 4 Caoticos */}
                            <div className='col-3 players_general_container'>
                                   <CaoticoComponent id='Rafa' />
                                   <CaoticoComponent id='Barri' />
                                   <CaoticoComponent id='Vago' />
                                   <CaoticoComponent id='Shin' />      
                            </div>
                            <div className='col-3 players_general_container'>
                                   <CaoticoComponent id='June' />  
                            </div>
                        </div>
                </div>

        </div>
     );
}

export { Members };
