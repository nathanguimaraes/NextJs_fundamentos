import Cabecalho from "../components/Cabecalho"; //importacao automatica  do nosso componente

export default function Exemplo(){
    return(
        <>
            <Cabecalho/>
            <Cabecalho/>
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