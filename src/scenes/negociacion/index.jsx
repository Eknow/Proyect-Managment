import { Container } from "@mui/material";

export default function Negociacion() {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <Container
           
            style={{backgroundColor: "#21295c", width: "85%", height: "89vh", borderRadius: "10px", color: "white", fontSize: "16px"}}
           >
           <h1 style={{textAlign: "center", color: "#ffe3a3"}}>Conceptos de negociación</h1> 
           
           <ol style={{display: "flex", flexDirection: "column" ,gap: "50px", marginTop: "25px"}}>
            <li>El BATNA, o la Mejor Alternativa a un Acuerdo Negociado, es el curso de acción que una parte seguirá si las negociaciones fracasan y no se llega a un acuerdo. Conocer tu BATNA te proporciona poder y seguridad en la negociación, ya que te permite entender hasta qué punto puedes ceder y cuándo es mejor retirarse. Tener una BATNA fuerte fortalece tu posición negociadora y te protege de aceptar términos desfavorables.</li>
            
            <li>La ZOPA, o Zona de Posible Acuerdo, es el rango en el cual las partes pueden encontrar un terreno común y alcanzar un acuerdo mutuamente aceptable. Esta zona existe si hay una superposición entre los mínimos aceptables de ambas partes. Identificar la ZOPA es crucial para que las negociaciones sean efectivas, ya que ayuda a las partes a concentrarse en soluciones viables en lugar de posiciones extremas o inalcanzables.</li>
            
            <li>En una negociación, es importante diferenciar entre intereses y posiciones. Las posiciones son las demandas o lo que las partes dicen que quieren, mientras que los intereses son las necesidades subyacentes, deseos, preocupaciones y motivaciones que impulsan esas posiciones. Centrar la negociación en los intereses en lugar de las posiciones puede conducir a soluciones más creativas y satisfactorias para ambas partes, ya que permite identificar opciones que satisfagan los verdaderos deseos de todos los involucrados.</li>
           
            
           </ol>
           </Container>
        </div>
    )
}