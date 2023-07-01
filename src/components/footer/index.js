import Image from "next/image"
import Logo from "@/assets/logo.svg"
import styles from "./styles.module.scss"

export default function Footer() {
    return (

        <div className={styles.footer}>
            <div className={styles.container}>
                <span>© 2023 Windsor <br />Front End Developer</span>
                <p>
                What If é uma série da Marvel que explora realidades alternativas e possibilidades diferentes dentro do Universo Cinematográfico da Marvel (MCU). Ela apresenta histórias que imaginam como os eventos poderiam ter se desenrolado de forma completamente diferente.
                </p>
                <Image src={Logo} alt="Marvel" />
            </div>
        </div>
    )
}