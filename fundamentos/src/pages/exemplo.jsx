import styles from '../styles/Estiloso.module.css'
import Cabecalho from "../components/Cabecalho"; //importacao automatica  do nosso componente
import Link from "next/link";
import Layout from '../components/Layout';

export default function Exemplo(){
    return(
       
       <Layout titulo="Usando Componentes">
        <Link href={"/estiloso"}> "Ir para Estiloso"</Link>
            <Cabecalho titulo="Next.Js & React"/>
            
        </Layout> 
        
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