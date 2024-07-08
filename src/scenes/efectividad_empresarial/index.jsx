import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const CalculadoraEfectividadEmpresarial = () => {
  const [unidadesProducidas, setUnidadesProducidas] = useState('');
  const [tiempoPlaneado, setTiempoPlaneado] = useState('');
  const [tiempoReal, setTiempoReal] = useState('');
  const [resultado, setResultado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const unidades = parseFloat(unidadesProducidas);
    const tiempoP = parseFloat(tiempoPlaneado);
    const tiempoR = parseFloat(tiempoReal);

    if (tiempoR <= 0) {
      alert('El tiempo real no puede ser menor o igual a cero.');
      return;
    }

    const eficiencia = (tiempoP / tiempoR) * 100;
    const efectividad = (unidades / tiempoP) * 100;

    setResultado(
      <>
        <p>Eficiencia: {eficiencia.toFixed(2)}%</p>
        <p>Efectividad: {efectividad.toFixed(2)}%</p>
      </>
    );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          border: 1,
          borderColor: 'grey.300',
          borderRadius: 2,
          p: 3,
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Calculadora de Efectividad en la Producción
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Unidades producidas"
            type="number"
            id="unidades_producidas"
            name="unidades_producidas"
            value={unidadesProducidas}
            onChange={(e) => setUnidadesProducidas(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Tiempo planeado"
            type="number"
            id="tiempo_planeado"
            name="tiempo_planeado"
            value={tiempoPlaneado}
            onChange={(e) => setTiempoPlaneado(e.target.value)}
            fullWidth
            margin="normal"
            step="0.01"
            required
          />
          <TextField
            label="Tiempo real"
            type="number"
            id="tiempo_real"
            name="tiempo_real"
            value={tiempoReal}
            onChange={(e) => setTiempoReal(e.target.value)}
            fullWidth
            margin="normal"
            step="0.01"
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
        {resultado && (
          <Alert severity="info" sx={{ mt: 3 }}>
            {resultado}
          </Alert>
        )}
      </Box>
    </Container>
  );
};

export default CalculadoraEfectividadEmpresarial;