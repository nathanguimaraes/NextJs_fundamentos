import styles from '../styles/Estiloso.module.css'  /*importando arquivo css modularizado */
import Layout from '../components/Layout'


export default function Estiloso(){
    return (

        <Layout titulo="Exemplo de CSS Modularizado">
        <div className={styles.roxo}>
           <h1>Estilo usando CSS Módulos</h1> 
        </div>
        </Layout>
    )
}