import styles from './styles.module.scss'
export default function InfoBox() {
    return (
        <section className={styles.info}>
            <div className={styles.container}>
                <div className={styles.boxLeft}>
                    <h3>COMING SON</h3>
                    <h1> Marvel <br/> WHAT IF… ?</h1>
                    <p>Disponível no Disney+, What If… ? é uma série de animação que leva o público para um terreno desconhecido ao contar, de forma alternativa, momentos cruciais do Universo Cinematográfico Marvel, imaginando o que teria acontecido aos super-heróis se a história fosse totalmente diferente e se passasse em outra realidade.</p>
                    <a href="#">Saiba Mais</a>
                </div>
                <div className={styles.boxRight}>
                <span> Assista ao trailer</span>
                <iframe width="373" height="210" src="https://www.youtube.com/embed/zq-dKITdTsE"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>            
        </section>
    )
}