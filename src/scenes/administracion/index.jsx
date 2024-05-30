import { Container } from "@mui/material";

export default function Administracion() {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <Container
           
            style={{backgroundColor: "#21295c", width: "85%", height: "89vh", borderRadius: "10px", color: "white", fontSize: "16px"}}
           >
           <h1 style={{textAlign: "center", color: "#ffe3a3"}}>Definiciones Administración</h1> 
           
           <ol style={{display: "flex", flexDirection: "column" ,gap: "50px", marginTop: "25px"}}>
            <li>La administración es el proceso de planificar, organizar, dirigir y controlar los recursos humanos, financieros, materiales y tecnológicos de una organización, con el objetivo de alcanzar sus metas de manera eficiente y efectiva. Esta definición se basa en los principios clásicos de la administración formulados por teóricos como Henri Fayol y Frederick Taylor.</li>
            
            <li>La administración se refiere al conjunto de funciones y actividades que realizan los gerentes para coordinar y optimizar el uso de los recursos en una organización. Estas funciones incluyen la planificación estratégica, la organización de tareas y recursos, la dirección del personal y el control del desempeño. La administración asegura que los objetivos organizacionales se logren de manera sistemática y coherente.</li>
            
            <li>La administración es una disciplina dinámica y multifacética que involucra la toma de decisiones estratégicas y operativas para gestionar organizaciones en un entorno cambiante y competitivo. Implica el liderazgo efectivo, la innovación, la adaptabilidad y el manejo del cambio para mejorar el desempeño organizacional y crear valor sostenible. Esta definición reconoce la complejidad y la importancia del contexto en la gestión moderna.</li>
           
            <li>La administración es el proceso mediante el cual se coordinan y armonizan los diversos componentes y actividades de una organización para lograr sus objetivos. Desde una perspectiva sistémica, la administración se enfoca en la interrelación de todos los elementos dentro de la organización, considerando factores internos y externos, así como el flujo de información y la retroalimentación, para optimizar el rendimiento global del sistema organizacional. Este enfoque enfatiza la importancia de ver la organización como un conjunto integrado de partes interdependientes.</li>
           </ol>
           </Container>
        </div>
    )
}