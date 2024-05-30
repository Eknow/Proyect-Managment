import { Container } from "@mui/material";

export default function Eficacia() {
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
                    Eficacia.
                </h1>

                <ol
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "50px",
                        marginTop: "25px",
                    }}>
                    <li>
                        La eficacia se refiere a la capacidad de lograr un
                        resultado deseado o de cumplir un objetivo específico
                        con éxito. En términos más simples, es la medida en la
                        que algo es capaz de producir el resultado deseado. La
                        eficacia está estrechamente relacionada con la capacidad
                        de hacer las cosas de manera efectiva, maximizando los
                        recursos disponibles para lograr un resultado deseado.
                        Es un concepto fundamental en áreas como la gestión
                        empresarial, la psicología organizacional y la
                        planificación estratégica, donde se busca optimizar el
                        desempeño y alcanzar metas específicas.
                    </li>

                    <li>
                        Gestión Empresarial: <br />
                        En el ámbito empresarial, la eficacia se refiere a la
                        capacidad de una empresa para lograr sus objetivos
                        comerciales y financieros de manera efectiva. Esto
                        implica que la empresa utilice sus recursos (como
                        capital, personal, tecnología, etc.) de manera eficiente
                        para generar resultados positivos. Por ejemplo, una
                        empresa puede considerarse eficaz si logra aumentar sus
                        ventas, mejorar la satisfacción del cliente y maximizar
                        sus beneficios.
                    </li>

                    <li>
                        Desempeño Laboral: <br />
                        En el ámbito empresarial, la eficacia se refiere a la
                        capacidad de una empresa para lograr sus objetivos
                        comerciales y financieros de manera efectiva. Esto
                        implica que la empresa utilice sus recursos (como
                        capital, personal, tecnología, etc.) de manera eficiente
                        para generar resultados positivos. Por ejemplo, una
                        empresa puede considerarse eficaz si logra aumentar sus
                        ventas, mejorar la satisfacción del cliente y maximizar
                        sus beneficios.
                    </li>
                    <li>
                        Educación: <br />
                        En el ámbito educativo, la eficacia se refiere a la
                        capacidad de los sistemas educativos, programas, métodos
                        y prácticas para lograr los objetivos de aprendizaje de
                        los estudiantes. Un programa educativo eficaz es aquel
                        que facilita el aprendizaje y el desarrollo de
                        habilidades de manera significativa y duradera. Esto
                        implica utilizar métodos pedagógicos adecuados, recursos
                        apropiados y evaluaciones precisas para garantizar el
                        progreso del estudiante.
                    </li>
                </ol>
            </Container>
        </div>
    );
}
