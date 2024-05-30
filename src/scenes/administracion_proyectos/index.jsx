import { Container } from "@mui/material";

export default function AdministracionProyectos() {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <Container
           
            style={{backgroundColor: "#21295c", width: "85%", height: "89vh", borderRadius: "10px", color: "white", fontSize: "16px"}}
           >
           <h1 style={{textAlign: "center", color: "#ffe3a3"}}>Administración de Proyectos</h1> 
           
           <ol style={{display: "flex", flexDirection: "column" ,gap: "50px", marginTop: "25px"}}>
            <li>La administración de proyectos es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para cumplir con los requisitos del mismo. Este enfoque se basa en la planificación, ejecución, monitoreo y control de tareas y recursos para alcanzar objetivos específicos dentro de los límites de tiempo, costo y calidad preestablecidos.</li>
            
            <li>Según el Project Management Institute (PMI), la administración de proyectos es la disciplina de iniciar, planificar, ejecutar, controlar y cerrar el trabajo de un equipo para alcanzar objetivos específicos y cumplir con criterios de éxito particulares. Esta definición pone énfasis en las metodologías estandarizadas y las mejores prácticas descritas en la guía PMBOK (Project Management Body of Knowledge).</li>
            
            <li>La administración de proyectos ágil es un enfoque iterativo e incremental para la gestión de proyectos, especialmente adecuado para entornos dinámicos y complejos. En lugar de un plan detallado a largo plazo, se priorizan ciclos cortos de desarrollo llamados sprints, en los que se entrega un producto funcional en cada iteración. Este método promueve la flexibilidad, la colaboración constante con el cliente y la adaptación continua a los cambios.</li>
           
            
           </ol>
           </Container>
        </div>
    )
}