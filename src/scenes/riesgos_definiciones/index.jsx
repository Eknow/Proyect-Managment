import { Container } from "@mui/material";

export default function Riesgos_def() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          backgroundColor: "#21295c",
          width: "85%",
          height: "auto",
          borderRadius: "10px",
          color: "white",
          fontSize: "16px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#ffe3a3" }}>
          Riesgos en proyectos.
        </h1>

        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "25px",
          }}
        >
          <li>
            Ejemplo 1: Riesgo Económico - Sobrecostos Descripción: Durante el
            desarrollo de una nueva aplicación móvil para una empresa de
            comercio electrónico, se estimó inicialmente un presupuesto de
            $200,000 para completar el proyecto en seis meses. Sin embargo, a
            medida que el proyecto avanzaba, surgieron varias complicaciones
            técnicas no previstas, como la necesidad de desarrollar
            integraciones adicionales con sistemas de pago externos y la
            incorporación de características de seguridad avanzadas para
            proteger los datos de los usuarios. Impacto: Sobrecostos: El
            presupuesto original se vio superado debido a la contratación de
            expertos adicionales y la compra de herramientas de seguridad más
            avanzadas, aumentando los costos totales a $300,000. Retrasos: El
            proyecto, que se planeó para seis meses, finalmente tomó nueve meses
            para completarse, lo que también incrementó los costos laborales.
            Ajuste de recursos: La empresa tuvo que reasignar fondos de otros
            departamentos para cubrir el sobrecosto, afectando otras iniciativas
            internas.
          </li>

          <li>
            Ejemplo 2: Riesgo Técnico - Fallos en la Integración: <br />
            Descripción: Una empresa de salud decidió implementar un nuevo
            sistema de gestión de registros médicos electrónicos (EMR) que debía
            integrarse con sus sistemas de gestión de citas y facturación.
            Durante la fase de integración, se descubrió que los sistemas
            existentes no eran compatibles con el nuevo software debido a
            diferencias en los protocolos de comunicación y la estructura de
            datos. Impacto: Interrupciones del servicio: La incompatibilidad
            llevó a múltiples fallos en el sistema, lo que causó interrupciones
            en la programación de citas y el procesamiento de facturas. Aumento
            de costos: Se necesitaron consultores externos especializados para
            resolver los problemas de integración, lo que incrementó los costos
            del proyecto en un 25%. Pérdida de datos: Hubo varios incidentes de
            pérdida de datos durante las fases iniciales de integración, lo que
            resultó en la necesidad de restaurar datos desde copias de
            seguridad, provocando retrasos adicionales. Satisfacción del
            cliente: Los pacientes y el personal médico experimentaron
            frustraciones debido a la inestabilidad del sistema, lo que afectó
            la percepción de la empresa y la satisfacción del cliente.
          </li>
        </ol>
      </Container>
    </div>
  );
}
