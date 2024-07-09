import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
} from "@mui/material";

const EffectivenessCalculator = () => {
    const [eficacia, setEficacia] = useState("");
    const [eficiencia, setEficiencia] = useState("");
    const [resultado, setResultado] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const efc = parseFloat(eficacia);
        const efn = parseFloat(eficiencia);

        if (isNaN(efc) || isNaN(efn) || efc > 100 || efn > 100) {
            setResultado(
                "Error: Ingrese valores numéricos válidos y menores o iguales a 100."
            );
            return;
        }

        const efectividad = (efc * efn) / 100;

        setResultado(`Efectividad: ${efectividad.toFixed(2)}%`);
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    border: 1,
                    borderColor: "grey.300",
                    p: 3,
                    borderRadius: 2,
                    mt: 5,
                }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Calculadora de Efectividad
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Eficacia"
                        type="number"
                        value={eficacia}
                        onChange={(e) => setEficacia(e.target.value)}
                        margin="normal"
                        inputProps={{ min: 0, max: 100, step: 0.01 }}
                        required
                    />

                    <TextField
                        fullWidth
                        label="Eficiencia"
                        type="number"
                        value={eficiencia}
                        onChange={(e) => setEficiencia(e.target.value)}
                        margin="normal"
                        inputProps={{ min: 0, max: 100, step: 0.01 }}
                        required
                    />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            mt: 2,
                        }}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">
                            Calcular
                        </Button>
                    </Box>
                </form>

                {resultado && (
                    <Alert
                        severity={
                            resultado.startsWith("Error") ? "error" : "success"
                        }
                        sx={{ mt: 3 }}>
                        {resultado}
                    </Alert>
                )}
            </Box>
        </Container>
    );
};

export default EffectivenessCalculator;
