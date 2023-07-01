
import Card from './card'
import styles from './styles.module.scss'
import IronMan from '@/assets/iron-man.jpg'
import Thor from '@/assets/thor.jpg'
import CaptainAmerica from '@/assets/c-america.jpg'
import Gamora from '@/assets/gamora.jpg'
import Killmonger from '@/assets/killmonger.jpg'
import DrStrange from '@/assets/dr-strange.jpg'
import Ultron from '@/assets/ultron.jpg'
import Carter from '@/assets/carter.jpg'

const characters = [

    {
        id: 1,
        name: 'Iron Man Z',
        descripition: 'Tecnológico',
        image: IronMan
    },
    
    {
        id: 2,
        name: 'Thor',
        descripition: 'Nobre',
        image: Thor
    },
  
    {
        id: 3,
        name: 'Captain America Z',
        descripition: 'Líder',
        image: CaptainAmerica
    },

    {
        id: 4,
        name: 'Dr. Strange',
        descripition: 'Místico',
        image: DrStrange
    },

    {
        id: 5,
        name: 'Capitã Britânia',
        descripition: 'Corajosa',
        image: Carter
    },
    {
        id: 6,
        name: 'Killmonger',
        descripition: 'Complexo',
        image: Killmonger
    },

    {
        id: 7,
        name: 'Visão Ultron',
        descripition: 'Imparcial',
        image: Ultron
    },
   
    {
        id: 8,
        name: 'Gamora Thanos',
        descripition: 'Determinada',
        image: Gamora
    },
    
]

export default function SectionCard() {
    return (
        <section className={styles.cards}>
            <div className={styles.container}>   

                <header>
                    <p>what if</p>
                    <h3>Personagens <br/> Marvel</h3>
                </header>
               
                <div className={styles.cardsBox}>

                    {characters.map(({id, name, image, descripition}) => {
                        return <Card 
                        key={id} 
                        name={name} 
                        descripition={descripition}
                        image={image} />
                    })}
              
                </div>

            </div>
        </section>
    )
}