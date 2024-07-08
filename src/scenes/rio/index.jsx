import React, { useState } from "react";
import "./style.css";
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';


const CalculadoraROI = () => {
  const [inversion, setInversion] = useState("");
  const [beneficio, setBeneficio] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const inv = parseFloat(inversion);
    const ben = parseFloat(beneficio);

    if (isNaN(inv) || isNaN(ben)) {
      setResultado("Error: Ingrese valores numéricos válidos.");
      return;
    }

    const roi = ((ben - inv) / inv) * 100;

    if (roi >= 0) {
      setResultado(`ROI: ${roi.toFixed(2)}%`);
    } else {
      setResultado(`ROI: -${(-roi).toFixed(2)}% (Pérdida)`);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          border: 1,
          borderColor: "grey.300",
          borderRadius: 2,
          p: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Calculadora de Retorno de Inversión
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Inversión"
            type="number"
            id="inversion"
            name="inversion"
            value={inversion}
            onChange={(e) => setInversion(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Beneficio"
            type="number"
            id="beneficio"
            name="beneficio"
            value={beneficio}
            onChange={(e) => setBeneficio(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Calcular ROI
          </Button>
        </Box>
        {resultado && (
          <Alert
            severity={resultado.startsWith("Error") ? "error" : "success"}
            sx={{ mt: 3 }}
          >
            {resultado}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default CalculadoraROI;
