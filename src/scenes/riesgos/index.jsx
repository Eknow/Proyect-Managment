import { Container } from "@mui/material";

export default function Riesgos() {
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
        <h1 style={{ textAlign: "center", color: "#ffe3a3" }}>Riesgos.</h1>

        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "25px",
          }}
        >
          <li>
            En un proyecto de TI (Tecnología de la Información), los riesgos
            pueden surgir en diversas áreas, y cada uno de ellos puede afectar
            el desarrollo y la implementación de maneras significativas. Aquí se
            detallan los principales tipos de riesgos y cómo pueden influir en
            un proyecto de TI:
          </li>

          <li>
            Riesgos Económicos: <br />
            a. Presupuesto insuficiente Descripción: Falta de fondos necesarios
            para completar el proyecto. Impacto: Puede llevar a retrasos,
            reducción de la calidad, o incluso la cancelación del proyecto. b.
            Sobrecostos Descripción: Gastos inesperados que exceden el
            presupuesto inicial. Impacto: Requiere reasignación de recursos o
            búsqueda de financiamiento adicional, afectando otras áreas del
            proyecto o la empresa.
          </li>

          <li>
            Riesgos de Gestión y Planificación: <br />
            En un proyecto de TI (Tecnología de la Información), los riesgos
            pueden surgir en diversas áreas, y cada uno de ellos puede afectar
            el desarrollo y la implementación de maneras significativas. Aquí se
            detallan los principales tipos de riesgos y cómo pueden influir en
            un proyecto de TI: 1. Riesgos Económicos a. Presupuesto insuficiente
            Descripción: Falta de fondos necesarios para completar el proyecto.
            Impacto: Puede llevar a retrasos, reducción de la calidad, o incluso
            la cancelación del proyecto. b. Sobrecostos Descripción: Gastos
            inesperados que exceden el presupuesto inicial. Impacto: Requiere
            reasignación de recursos o búsqueda de financiamiento adicional,
            afectando otras áreas del proyecto o la empresa. 2. Riesgos de
            Gestión y Planificación a. Mala planificación Descripción:
            Estimaciones inexactas de tiempo y recursos. Impacto: Resulta en
            cronogramas poco realistas, retrasos, y posibles conflictos entre
            equipos. b. Falta de liderazgo Descripción: Dirección y toma de
            decisiones deficientes. Impacto: Causa falta de claridad y
            dirección, desmotivación del equipo, y potenciales conflictos
            internos.
          </li>
          <li>
            Riesgos Externos: <br />
            a. Cambios en el mercado Descripción: Variaciones en las demandas o
            tendencias del mercado. Impacto: Pueden requerir cambios
            significativos en el proyecto para adaptarse a nuevas necesidades,
            afectando tiempos y costos. b. Regulaciones y cumplimiento
            Descripción: Nuevas leyes o normativas que afectan el proyecto.
            Impacto: Necesidad de ajustes en el proyecto para cumplir con las
            normativas, lo que puede aumentar los costos y tiempos de
            desarrollo.
          </li>
        </ol>
      </Container>
    </div>
  );
}
