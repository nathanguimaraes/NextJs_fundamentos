import Layout from "../components/Layout"

export default function Jsx(){
 
    const a = 4
    const b = 3
    console.log(a * b)
    const obj = {nome:"João"}
    const titulo = <h2>titulo declarado como constante</h2>

    function subtitulo() {
        return <h2>{"Subtitulo retornado na funcao subtitulo".toUpperCase()}</h2>
        
    }
 
    return(
        <Layout titulo="Exemplo de CSS Modularizado">
            <div>
                {titulo}
                {subtitulo()}
                <h1>JSX é um conceito central.</h1>
                <h2>{"Essa tag mostra que é possivel usar jsx dentro do html, basta usas as chaves{}".toUpperCase()}</h2>
            
            </div>
        </Layout>
    )
}