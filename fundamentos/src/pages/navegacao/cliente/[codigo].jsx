import Layout from "../../../components/Layout";
import router from 'next/router';
import { useEffect } from "react";

export default function ClienteProCodigo(){
    useEffect(() => {
         console.log(router.query.codigo)
    }, [])
   
    return(
        <Layout titulo = "Navegação Dinâmica">
            <span>Código = ???? </span>
        </Layout>
    )
}
