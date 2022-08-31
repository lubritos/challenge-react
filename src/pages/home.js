import { useState} from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Home = ()=>{
    const colums = ["nombre", "edad", "carrera", "hobbies"]
    const [rows, setRows] = useState([
    {
        nombre: "Pedro",
        edad: 20,
        carrera: "Ingeniería",
        hobbie: "Futbol"
    },
    {
        nombre: "Rodrigo",
        edad: 22,
        carrera: "Arquitectura",
        hobbie: "Bajo eléctrico"
    },
    {
        nombre: "Romina",
        edad: 21,
        carrera: "Abogacía",
        hobbie: "Acrobacia"
    },
    {
        nombre: "Ana",
        edad: 23,
        carrera: "Contadora",
        hobbie: "Astronomía"
    }
    ]);
    return <div>
        <Navbar/>
        <h1>home</h1>
        <Table rows={rows} colums={colums} />
    </div>
}
export default Home;