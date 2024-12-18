import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { customStyles } from "./components/styleTable";
import DataTable from "react-data-table-component";
import BasePage from "../../components/BasePage/BasePage";
import { Button, Input, Box, Text, Grid, GridItem} from "@chakra-ui/react";
import { addCalificacion, getCalificaciones, deleteCalificacion } from "../../services/data";
import { NoDataTableComponent } from "../../components/NoDataTableComponent/NoDataTableComponent";

const CalificacionesTable = ({ data, updateTableF, idMatr}) => {  
    const [calificacionReal, setCalificacionReal] = useState(0);
    const columns = [
        { name: "Descripción", selector: (row) => row.descripcion, center: true.toString() },
        { name:"Nota", selector: (row) => row.nota, center: true.toString() },
        { name: "Porcentaje", selector: (row) => row.porcentaje, center: true.toString() },
        { cell:(row) => <Button onClick={() => _deleteCalificacion(row.id)}><MdDelete/></Button> }
    ];

    const _deleteCalificacion = (id) => {
        Swal.fire({
              title: "¿Estás seguro de eliminar este alumno?",
              text: "No podrás revertir esta acción",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Sí, eliminar",
              cancelButtonText: "Cancelar",
            }).then((result) => {

                if (result.isConfirmed) {
                    deleteCalificacion(id).then((resp)=>
                    {
                        if (resp) {
                            Swal.fire("Calificación eliminada", "La calificación ha sido eliminada correctamente.", "success");
                            updateTableF();
                        } else {
                            Swal.fire("Error", "No se ha podido eliminar la calificación.", "error");
                        }
                    });
                }
            });
    }

    useEffect(() => {
        let notaReal = 0;
        data.forEach((calificacion) => {
            notaReal += (calificacion.nota * calificacion.porcentaje) / 100;
        });
        setCalificacionReal(notaReal);
    },[data])

    return (
        <Box
           p={5}
        >
            <DataTable
                title="Calificaciones"
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                striped
                noDataComponent={<NoDataTableComponent />}
                highlightOnHover
                theme="dark" // Cambia el tema de la tabla a oscuro, si no se pone theme los estilos de las líneas no se verán correctamente
            />
            {/* Nota Real */}
            <Box
                width={"100%"}
                shadow={"md"}
            >
                <Text fontSize="xl" fontWeight="bold" textAlign="center">Nota Real: {calificacionReal}</Text>
            </Box>
            {/* Inputs para añadir nuevas calificaciones, Uso de Diseño Responsive */}

            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(4, 1fr)",
                    md: "repeat(10, 1fr)",
                    lg: "repeat(10,1fr)",
                }} // Configuración de columnas responsivas
                gap={4}
                justifySelf={{ base: "center", sm: "auto", md: "auto", lg: "auto" }} // Alineación horizontal
                alignItems="center"
            >
                <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                    <Input
                        placeholder="Descripción"
                        id="newDescripcion"
                        size="sm"
                    />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                <Input
                    placeholder="Nota"
                    id="newNota"
                    size="sm"
                    type="number"
                />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, md: 3, lg: 3 }}>
                <Input
                    placeholder="Porcentaje"
                    id="newPorcentaje"
                    size="sm"
                    type="number"
                    
                    onInput={(e) => { // Limita el porcentaje a 100
                        if (e.target.value > 100) {
                            e.target.value = 100;
                        }
                    }}
                />
                </GridItem>
                <GridItem colSpan={{ base: 1, sm: 2, md: 1, lg: 1 }} justifySelf={{ base: "center", sm: "auto", md: "center", lg: "center" }}>
                <Button
                    onClick={() => {
                        const descripcion = document.getElementById("newDescripcion").value;
                        const nota = parseInt(document.getElementById("newNota").value);
                        const porcentaje = parseInt(document.getElementById("newPorcentaje").value);
                        if (descripcion && !isNaN(porcentaje)) {
                            const calificacion = {
                                descripcion:descripcion,
                                nota:nota,
                                porcentaje:porcentaje,
                                matriculaid:idMatr
                            }
                            addCalificacion(calificacion);
                            updateTableF();
                            Swal.fire("Calificación añadida", "La calificación ha sido añadida correctamente.", "success");
                        } else {
                            Swal.fire("Error", "Por favor, completa los campos correctamente.", "error");
                        }
                    }}
                    colorScheme="blue"
                >
                    Agregar
                </Button>
                </GridItem>

            </Grid>
        </Box>
    );

}

export default function CalificarAlumnos () {
    const [calificaciones, setCalificaciones] = useState([]);
    const [updateCalificaciones, setUpdateCalificaciones] = useState(false);
    const navigate = useNavigate();
    const [idMatricula, setIdMatricula] = useState(0);
    const params = useParams();
    useEffect(() => {
        setIdMatricula(params.idmatricula);
       fillCalificaciones(params.idmatricula);
    }, [updateCalificaciones]);

    const fillCalificaciones = (idmatricula) => {  
        getCalificaciones(idmatricula).then(setCalificaciones);
    }

    return (
        <BasePage bodyPage={<CalificacionesTable data={calificaciones} updateTableF={()=>setUpdateCalificaciones(!updateCalificaciones)} idMatr={idMatricula} />}/>
    );

}