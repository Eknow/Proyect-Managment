import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Administracion from "scenes/administracion";
import AdministracionProyectos from "scenes/administracion_proyectos";
import Negociacion from "scenes/negociacion";
import ProcesoAdministrativo from "scenes/proceso_administrativo";
import Alumno from "scenes/alumno";


function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route element={<Layout />}>
                            <Route
                                path="/"
                                element={<Navigate to="/dashboard" replace />}
                            />
                            <Route path="/dashboard" />
                            <Route path="/administración" element={<Administracion />}/>
                            <Route path="/administración de proyectos" element={<AdministracionProyectos />}/>
                            <Route path="/negociación" element={<Negociacion />}/>
                            <Route path="/proceso administrativo" element={<ProcesoAdministrativo />}/>
                            <Route path="/datos alumnos" element={<Alumno/>}/>
                            {/* <Route path="/products" element={<Products />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route
                                path="/transactions"
                                element={<Transactions />}
                            />
                            <Route path="/geography" element={<Geography />} />
                            <Route path="/overview" element={<Overview />} />
                            <Route path="/daily" element={<Daily />} />
                            <Route path="/monthly" element={<Monthly />} />
                            <Route path="/breakdown" element={<Breakdown />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route
                                path="/performance"
                                element={<Performance />}
                            />
                            */}
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
