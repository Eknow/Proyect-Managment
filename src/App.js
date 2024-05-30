import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import Dashboard from "./scenes/Dashboard";
import RequireAuth from "./middleware/RequireAuth";
import RedirectIfAuthenticated from "./middleware/RedirectIfAuthenticated";
import Login from "login";
import Layout from "scenes/layout";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RedirectIfAuthenticated>
                                    <Login />
                                </RedirectIfAuthenticated>
                            }
                        />
                        <Route
                            element={
                                <RequireAuth>
                                    <Layout />
                                </RequireAuth>
                            }>
                            <Route path="/dashboard" element={<Dashboard />} />
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
                            /> */}
                            <Route path="/profile/:id" />{" "}
                            {/* Añadimos la ruta del perfil */}
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
