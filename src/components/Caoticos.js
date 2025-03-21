import fotoTigre from '../images/memb/member_tigre.png';
import audioTigre from '../sounds/Tigre.mp3';
import fotoCuervo from '../images/memb/member_cuervo.png';
import audioCuervo from '../sounds/Cuervo.mp3';
import fotoNicol from '../images/memb/member_nicol.png';
import audioNicol from '../sounds/Nicol.mp3';
import fotoFibe from '../images/memb/member_fibe.png';
import audioFibe from '../sounds/Fibe.mp3';
import fotoRafa from '../images/memb/member_rafa.png';
import audioRafa from '../sounds/Rafa.mp3';
import fotoBarri from '../images/memb/member_barri.png';
import audioBarri from '../sounds/Barri.mp3';
import fotoVago from '../images/memb/member_vago.png';
import audioVago from '../sounds/Vago.mp3';
import fotoShin from '../images/memb/member_shin.png';
import audioShin from '../sounds/Shin.mp3';
import fotoJune from '../images/memb/member_june.png';
import audioJune from '../sounds/June.mp3';
import fotoAmun from '../images/memb/member_amun.png';
import audioAmun from '../sounds/Amun.mp3';
import fotoBolas from '../images/memb/member_bolas.png';
import audioBolas from '../sounds/Bolas.mp3';
import fotoEsteban from '../images/memb/member_esteban.png';
import audioEsteban from '../sounds/Esteban.mp3';

const caoticos = [
        {
            name: 'Tigre',
            id: 'Tigre',
            pic: fotoTigre,
            sound: new Audio(audioTigre),
            phrases: [
                'Te dicta, y no es la tarea.',
                'Toma mucho, pero no esta tan tan taan mal.',
                'Conocido como "flechitas" Serrano.',
                'Nunca se acuerda de que tiene mala memoria.',
            ]
        },
        {
            name: 'Cuervo',
            id: 'Cuervo',
            pic: fotoCuervo,
            sound: new Audio(audioCuervo),
            phrases: [
                'Ginecólogo y puteador compulsivo de deidades.',
                'Es cordobés pero odia el cuarteto.',
                'El Guasón dark del clan.',
                'Imprime penes en 3D.',
            ]
        },
        {
            name: 'Nico',
            id: 'Nico',
            pic: fotoNicol,
            sound: new Audio(audioNicol),
            phrases: [
                'Habla mal 3 idiomas.',
                'Cambió su primer Nickname por el acoso de los hombres.',
                'Se pregunta porque no le contestan y está muteado.',
                'Todavía va al colegio, pero ahora es "El Profe"',
            ]
        },
        {
            name: 'Fibe',
            id: 'Fibe',
            pic: fotoFibe,
            sound: new Audio(audioFibe),
            phrases: [
                'Insultador Serial.',
                'En los juegos es mas tóxico que Chernobyl.',
                'Laggggguero (el 55 de su nick es porque no supera los 56kbps)',
                'Muy en el fondo, (pero muy adentro) un tierno...',
            ]
        },
        {
            name: 'Rafa',
            id: 'Rafa',
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
            id: 'Barri',
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
            id: 'Vago',
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
            id: 'Shin',
            pic: fotoShin,
            sound: new Audio(audioShin),
            phrases: [
                'Su dulce voz esconde un camionero en horas pico.',
                'Tan diminuta como letal.',
                'Deditos cortos pero Aim largo.',
                'Auspiciada por chizitos y papitas "Ruidolin".',
            ]
        },
        {
            name: 'June',
            id: 'June',
            pic: fotoJune,
            sound: new Audio(audioJune),
            phrases: [
                'Centroamericano, ping de mrd pero Presente!',
                'Desaparece del ds mas rapido que Batman cuando te distraes.',
                'Su nivel de paz nerfea sus insultos.',
                'De June a Junemalteco… De Guatepior al Mundo',
            ]
        },
        {
            name: 'Amun',
            id: 'Amun',
            pic: fotoAmun,
            sound: new Audio(audioAmun),
            phrases: [
                'Tankea en la vida real.',
                'Es Alto, alto en contraste, peso y buena onda.',
                'De dia es Amun... De noche, Roncamilo.',
                'Su heterosexualidad esta mas perdida que su aim.',
            ]
        },
        {
            name: 'Bolas',
            id: 'Bolas',
            pic: fotoBolas,
            sound: new Audio(audioBolas),
            phrases: [
                'Hizo la escuela en… no, no hizo la escuela.',
                'Es el chileno más entendible de todos.',
                'Tiene una técnica de pañales explosivos infalible.',
                'Su salud rectal es más importante que los eventos de CAOS.',
            ]
        },
        {
            name: 'Esteban',
            id: 'Esteban',
            pic: fotoEsteban,
            sound: new Audio(audioEsteban),
            phrases: [
                'Venera al Dios "Zonda" para poder jugar.',
                'Aplica "del orto" como referencia para todo.',
                'Confunde especies animales con mucha facilidad.',
                'Revive el "Secreto de la montaña" pero con una cabra y wifi',
            ]
        }
    ];

export default caoticos;
