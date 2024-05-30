import { Container } from "@mui/material";

export default function Manipulacion() {
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
                    Manipulacion.
                </h1>

                <ol
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        marginTop: "25px",
                    }}>
                    <li>
                        Manipulación emocional: <br />
                        Este concepto se refiere a la influencia o control que
                        una persona ejerce sobre las emociones de otra para
                        lograr sus propios objetivos. Puede implicar el uso de
                        tácticas como la culpa, la vergüenza, el miedo o la
                        lisonja para obtener ventajas personales, como la
                        sumisión o la obtención de favores. La manipulación
                        emocional puede ser sutil y difícil de detectar, pero
                        puede tener efectos significativos en la autoestima y el
                        bienestar emocional de la persona manipulada.
                    </li>

                    <li>
                        Manipulación mediática: <br />
                        La eficacia se refiere a la capacidad de alcanzar los
                        objetivos y metas establecidos. Es un concepto que mide
                        el grado en que se logran los resultados deseados. En la
                        administración, ser eficaz significa hacer lo necesario
                        para cumplir con los objetivos organizacionales,
                        independientemente de los recursos utilizados. La
                        eficacia se centra en hacer las cosas correctas para
                        lograr los resultados deseados.
                    </li>
                </ol>
            </Container>
        </div>
    );
}
