import Image from 'next/image'
import styles from '../styles/competencias.module.scss'


export default function Competencias(props) {

    let puntuaciones = []
    for(let i=1; i<=5; i++){
        if (i <= props.puntuacion){
            puntuaciones.push(<div key={"puntuacion-" + props.name + i} className={styles.dark}></div>)
        }
        else{
            puntuaciones.push(<div className={styles.light}></div>)

        }
    }

    return ( 
        <div className={styles.competencias}>
            <h3>{props.name}</h3>
            <div className={styles.imagenes}>
                {puntuaciones}
            </div>
        </div>
    )
}