import { Container } from "@mui/material";

export default function Modelo() {
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
            Modelo de creacion propia.
        </h1>

        <ol
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "25px",
          }}
        >
          <img src={require('../../assets/diagrama.png')}/>
        </ol>
      </Container>
    </div>
  );
}
