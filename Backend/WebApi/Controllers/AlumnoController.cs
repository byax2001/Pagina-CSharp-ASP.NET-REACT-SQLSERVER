﻿using backend.Models;
using backend.Operaciones;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api")]
    [ApiController]
    public class AlumnoController : ControllerBase
    {
        AlumnoDAO alumnoDAO = new AlumnoDAO();

        [HttpGet("alumnosP")]
        public List<AlumnosProfesor> alumnosPorProfesor(string usuario)
        {
            var alumnos = alumnoDAO.alumnosPorProfesor(usuario);
            return alumnos;
        }

        [HttpGet("infoalumno")]
        public Alumno InfoAlumno(int id)
        {
            var alumno = alumnoDAO.seleccionarAlumno(id);
            return alumno;
        }

        [HttpPut("editaralumno")]
        public Boolean editarAlumno([FromBody]Alumno alumno) //Colocar FromBody para recibir parametros en el body de la peticion
        {
            try
            {
                //El metodo tiene la opcion de que si algun parametro se envia vacio no se actualiza en la base de datos
                return alumnoDAO.ActualizarAlumno(alumno.Id, alumno.Dni, alumno.Nombre, alumno.Direccion, alumno.Edad, alumno.Email);
            }
            catch(Exception e)
            {
                return false;
            }
        }
        //Metodo para matricular un alumno, crea un nuevo alumno si no existe y lo matricula en una asignatura
        [HttpPost("matricular")]
        public Boolean matricularAlumno([FromBody] Alumno alumno, int idasignature) //Solo puede haber un solo [FromBody] en un metodo, los otros parametros se envian por la url
                                                                                   //En este caso el id de la asignatura se envia por la url, en postman se enviaria en params y en la url
        {
            return alumnoDAO.crear_Matricular(alumno.Dni, alumno.Nombre, alumno.Direccion, alumno.Edad, alumno.Email, idasignature);
            //Actualmente el Id del alumno es el unico elemento que se puede omitir en el body ya que es autoincremental y por lo tanto no es necesario
            //enviarlo en la peticion (y en el caso de posible creación no se deberia), sin embargo puede hacerse si se desea

        }
        [HttpDelete("alumno")]
        public Boolean eliminarAlumno(int id)
        {
            try
            {
                
                return alumnoDAO.eliminarAlumno(id);
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
