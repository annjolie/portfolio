import Head from 'next/head'
import Image from 'next/image'
import Cabecera from '../components/cabecera'
import Competencias from '../components/competencias'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ann Jolie Lourido</title>
        <meta name="description" content="Aplicación web de Ann Jolie Lourido Pose" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cabecera />
        <div className={styles.contenido}>
          <div className={styles.sidebar}>
            <Competencias name="CSS3" puntuacion={4}/>            
            <Competencias name="HTML5" puntuacion={4}/>            
            <Competencias name="JQuery" puntuacion={4}/>            
            <Competencias name="Git" puntuacion={4}/> 
            <Competencias name="Bootstrap" puntuacion={3}/>             
            <Competencias name="Git" puntuacion={3}/>            
            <Competencias name="Java" puntuacion={3}/>            
            <Competencias name="Java" puntuacion={3}/>            
          </div>
          <div className={styles.cuerpo}></div>
        </div>
      </main>
    </div>
  )
}
