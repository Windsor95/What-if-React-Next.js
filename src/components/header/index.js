
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import LogoMain from '@/assets/logo-main.svg'



export default function Header() {
    return (
       <header className={styles.header} >
            <div className={styles.boxHeader}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <Image src={Logo} alt="Marvel" />
                    </Link>    
                </div>
                <div className={styles.wind}>
                    <Link href={'https://meu-portfolio-beta-two.vercel.app/'} target='_blank'>
                        <Image src={LogoMain} alt="Marvel" />
                    </Link>
                </div>
            </div>      
       </header>
    )
}