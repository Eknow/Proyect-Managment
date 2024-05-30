import { Avatar, Container, Button, Link } from "@mui/material";
import CurriAngel from "../../assets/CV_ANGEL_MEZA.pdf"


export default function Alumno (){
    return(
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Container
           
           style={{backgroundColor: "#21295c", width: "85%", height: "89vh", borderRadius: "10px", color: "white", fontSize: "16px"}}
          >
            <h1 style={{textAlign: "center", color: "#ffe3a3"}}>Datos Alumnos</h1> 

            <div style={{display: "flex", width: "100%", height:"84%", }}>
                <div style={{width: "33.333%", height: "89%", backgroundColor: "purple", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p>Renteria Meza Angel Eduardo</p>
                    <Avatar
                    sx={{ width: 120, height: 120 }}
                    ></Avatar>
                    <Link
                        
                        href={CurriAngel}
                    >
                        <Button variant="primary">
                            Curriculum
                        </Button>
                    </Link>
                </div>
                <div style={{width: "33.333%", height: "89%", backgroundColor: "red", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p>Ehiran</p>
                    <Avatar
                    sx={{ width: 120, height: 120 }}
                    ></Avatar>
                </div>
                <div style={{width: "33.333%", height: "89%", backgroundColor: "green", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p>Christopher</p>
                    <Avatar
                    sx={{ width: 120, height: 120 }}
                    ></Avatar>
                </div>
            </div>

          </Container>
        </div>
    )
}