import Layout from "../components/Layout"
import { useState } from "react"    //propriedade para estado state[0][1] 

export default function Estado(){
                //esse modo primeiro lê nosso useState e ja atribui os respectivos valores as variaveis passadas como parametro
    const [numero, setNumero] = useState(0) //React Hooks          //definindo constante recebendo propriedade para estado state[0][1] 
   
   //modo nao refatorado
    //let numero = state[0]               //atribuindo state[0] para numero(estado incial)
   // let alterarNumero = state[1]        //atribuido state[1] para alteraNumero(estado incremental)
    
  //console.log(state)
    function incrementar() {
            setNumero(numero + 1)       //com o state[1] podemos apartir dai incrementar
    }
    return(
        <Layout titulo = "Componete com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}