import { Container } from "@mui/material";

export default function ProcesoAdministrativo() {
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
           <Container
           
            style={{backgroundColor: "#21295c", width: "85%", height: "89vh", borderRadius: "10px", color: "white", fontSize: "16px"}}
           >
           <h1 style={{textAlign: "center", color: "#ffe3a3"}}>Conceptos del proceso administrativo.</h1> 
           
           <ol style={{display: "flex", flexDirection: "column" ,gap: "50px", marginTop: "25px"}}>
            <li>
                Eficiencia: <br />
                La eficiencia se refiere a la relación entre los recursos utilizados y los resultados obtenidos. En el contexto del proceso administrativo, ser eficiente implica utilizar los recursos disponibles (como tiempo, dinero, personal y materiales) de la manera más económica y productiva posible para alcanzar los objetivos organizacionales. La eficiencia se centra en hacer las cosas correctamente y con el mínimo desperdicio de recursos.
            </li>
            
            <li>
                Eficacia: <br />
                La eficacia se refiere a la capacidad de alcanzar los objetivos y metas establecidos. Es un concepto que mide el grado en que se logran los resultados deseados. En la administración, ser eficaz significa hacer lo necesario para cumplir con los objetivos organizacionales, independientemente de los recursos utilizados. La eficacia se centra en hacer las cosas correctas para lograr los resultados deseados.
            </li>
            
            <li>
                Adaptabilidad: <br />
                La adaptabilidad es la capacidad de una organización para ajustar sus estrategias, estructuras y procesos en respuesta a cambios en el entorno interno y externo. Este concepto es crucial para la administración moderna, ya que los entornos empresariales son dinámicos y a menudo impredecibles. Una organización adaptable puede responder rápidamente a oportunidades y amenazas, asegurando su supervivencia y éxito a largo plazo.
            </li>
           
            
           </ol>
           </Container>
        </div>
    )
}