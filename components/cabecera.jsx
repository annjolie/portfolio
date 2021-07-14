
import Image from 'next/image'
import styles from '../styles/Cabecera.module.scss'
import profilePic from '../public/perfil.jpg'

export default function Cabecera() {
    return (
        <div className={styles.cabecera}>
            <Image
                className={styles.imagen}
                src={profilePic}
                alt="Ann Jolie Lourido Pose"
                width={230}
                height={200} />
            <div className={styles.hero}>
                <h1>Ann Jolie Lourido Pose</h1>
                <h2>Desarrollo Web</h2>
                <p>España</p>
                <p><a href="mailto:annjolie.lourido@gmail.com">annjolie.lourido@gmail.com</a></p>
            </div>
        </div>
    )
}
