import fotoRafa from '../images/memb/member_rafa.png';
import audioRafa from '../sounds/Rafa.mp3';
import fotoBarri from '../images/memb/member_barri.png';
import audioBarri from '../sounds/Barri.mp3';
import fotoVago from '../images/memb/member_vago.png';
import audioVago from '../sounds/Vago.mp3';
import fotoShin from '../images/memb/member_shin.png';
import audioShin from '../sounds/Shin.mp3';

const members = {
    caoticos: [
        {
            name: 'Rafa',
            pic: fotoRafa,
            sound: new Audio(audioRafa),
            phrases: [
                'El brasilero mas rioplatense.',
                'Qué menchiira.',
                'Sus explosivos tienen vida propia.',
                'Juega a 10ms pero contiene su KI para no abusar del clan.',
            ]
        },
        {
            name: 'Barri',
            pic: fotoBarri,
            sound: new Audio(audioBarri),
            phrases: [
                'Este juego no me anda, mis balas no matan.',
                'Son todos hackers, olvidaaaggtheee.',
                'Le faltan teclas pero le sobran excusas.',
                'Master en Todología.',
            ]
        },
        {
            name: 'Vago',
            pic: fotoVago,
            sound: new Audio(audioVago),
            phrases: [
                'Es el abuelito mimoso del clan.',
                'Dueño de unos reflejos en diferido.',
                'Sus MACROS son estéticos.',
                'Su Aim está como él mismo.. Jubilado.',
            ]
        },
        {
            name: 'Shin',
            pic: fotoShin,
            sound: new Audio(audioShin),
            phrases: [
                'Su dulce voz esconde un camionero en horas pico.',
                'Tan diminuta como letal.',
                'Deditos cortos pero Aim largo.',
                'Auspiciada por chizitos y papitas "Ruidolin".',
            ]
        }
    ]
}

export default members;