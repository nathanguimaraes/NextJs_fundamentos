import styles from '../styles/Estiloso.module.css'
import Cabecalho from "../components/Cabecalho"; //importacao automatica  do nosso componente
import Link from "next/link";

export default function Exemplo(){
    return(
        <>
        <Link href={"/estiloso"}> "Ir para Estiloso"</Link>
            <Cabecalho titulo="Next.Js & React"/>
            
        </> 
        
    )
    /* 
     return(
        <div>
            <Cabecalho/>    //formato nao aceito é necessario trocar <div> por <> (js fragment para eliminar a repeticao de divs)
            <Cabecalho/>
        </div>
        
    )
    */
}