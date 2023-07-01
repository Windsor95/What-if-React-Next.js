import styles from './styles.module.scss'
import Image from 'next/image'
import BgHero from '@/assets/bg-hero.jpg'
import SocialBox from './socialBox'
import InfoBox from './infoBox'
import SectionCard from '../sectionCard'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.boxHero}>
                    <SocialBox />
                    <InfoBox />
                </div>     
            </div>            
        </section>
    )
}