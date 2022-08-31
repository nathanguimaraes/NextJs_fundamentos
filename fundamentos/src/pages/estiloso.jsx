import styles from '../styles/Estiloso.module.css'  /*importando arquivo css modularizado */

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <h1>Estilo usando CSS Módulos</h1>  
        </div>
    )
}