
import styles from './styles.module.scss'

import Image from 'next/image'
export default function Card( {name, image, descripition} ) {
    return (
        <div className={styles.card}>
           <div className={styles.boxImage}>
                <Image src={image}  alt={name} />
           </div>
           <div className={styles.boxInfo}>
                <h3>{name}</h3>
                <p>{descripition}</p>
           </div>
           <p>Marvel WHAT IF...?</p>
        </div>
    )
}