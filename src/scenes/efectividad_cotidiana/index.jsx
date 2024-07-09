import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const CalculadoraEfectividad = () => {
  const [realizados, setRealizados] = useState('');
  const [total, setTotal] = useState('');
  const [efectividad, setEfectividad] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const numRealizados = parseFloat(realizados);
    const numTotal = parseFloat(total);

    if (numRealizados > numTotal) {
      alert('El número de logros alcanzados no puede ser mayor que el número total de objetivos.');
      return;
    }

    const calculoEfectividad = (numRealizados / numTotal) * 100;
    setEfectividad(calculoEfectividad.toFixed(2));
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
          Calculadora de Efectividad
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Logros alcanzados"
            type="number"
            id="realizados"
            name="realizados"
            value={realizados}
            onChange={(e) => setRealizados(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Total de objetivos"
            type="number"
            id="total"
            name="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
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
            Calcular
          </Button>
        </Box>
        {efectividad !== null && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Efectividad: {efectividad}%
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default CalculadoraEfectividad;
