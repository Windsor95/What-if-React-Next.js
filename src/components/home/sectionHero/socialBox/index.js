import Image from 'next/image'
import instaIcon from '@/assets/instagram.svg'
import youtubeIcon from '@/assets/youtube.svg'

import styles from './styles.module.scss'

const social = [
 
    {
        name: 'instagram',
        icon: instaIcon,
        url: 'https://instagram.com',
    },
  
    {
        name: 'youtube',
        icon: youtubeIcon,
        url: 'https://youtube.com',
    },
    ]
export default function SocialBox() {
    return (
        <div className={styles.social}>
            <div className={styles.socialbox}>
                {social.map(({ name, icon, url}) => {
                    return (
                    
                            <a href={url} key={name}>
                                <Image src={icon} alt={name} width={20} height={20} />
                            </a>
                    
                    )
                })}
            </div>
        </div>
    )
}