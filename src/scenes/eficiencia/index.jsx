import { Container } from "@mui/material";

export default function Eficiencia() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Container
                style={{
                    backgroundColor: "#21295c",
                    width: "85%",
                    height: "auto",
                    borderRadius: "10px",
                    color: "white",
                    fontSize: "16px",
                }}>
                <h1 style={{ textAlign: "center", color: "#ffe3a3" }}>
                    Eficiencia.
                </h1>

                <ol
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        marginTop: "25px",
                    }}>
                    <li>
                        La eficiencia se refiere a la capacidad de realizar una
                        tarea, proceso o actividad de manera óptima, utilizando
                        los recursos disponibles de la manera más adecuada
                        posible para lograr el máximo resultado con el mínimo
                        desperdicio. En otras palabras, la eficiencia implica
                        hacer las cosas de manera rápida, económica y con el
                        menor uso de recursos posible.
                    </li>

                    <li>
                        Eficiencia en la producción:
                        <br />
                        Una fábrica que logra producir una gran cantidad de
                        bienes en poco tiempo y con un bajo costo de producción
                        se consideraría eficiente en su proceso productivo.
                    </li>
                    <li>
                        Eficiencia energética:
                        <br />
                        Un electrodoméstico que consume menos energía para
                        realizar la misma tarea que otro dispositivo se
                        considera más eficiente energéticamente.
                    </li>
                    <li>
                        Eficiencia en el trabajo:
                        <br />
                        Un empleado que logra completar sus tareas asignadas en
                        menos tiempo y con menos errores que otros se
                        consideraría más eficiente en su trabajo.
                    </li>
                </ol>
            </Container>
        </div>
    );
}
