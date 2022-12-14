
import Navegador from '../components/Navegador'

export default function Inicio(){
return(
    <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        height:'100vh'
    }}>
     <Navegador texto="Estiloso" destino="/estiloso" colors="#9400d3"/>
     <Navegador texto="Exemplo" destino="/exemplo" colors="crimson"/>
     <Navegador texto="JSX" destino="/jsx"/>
     <Navegador texto="Navegação #01" destino="/navegacao" colors="green"/>
     <Navegador texto="Navegação #02" destino="/cliente/123" colors="blue"/>
     <Navegador texto="Componente com Estado" destino="/estado" colors="yellow"/>


    </div>
)
}

