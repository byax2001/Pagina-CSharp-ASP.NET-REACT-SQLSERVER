# Pagina-CSharp-ASP.NET-REACT-SQLSERVER
Se desarrollará una página web utilizando C# y ASP.NET para el backend, React para el frontend y SQL Server como base de datos. El proyecto incluirá dos versiones del frontend, ambas creadas con React Vite: una implementará Material-UI (MUI) y la otra Chakra UI. Se comparara el rendimiento y estilo de ambas tecnologias.


# Índice

## Introducción
- [Descripción del proyecto](#descripción-del-proyecto)

## Frontend
- [Frontend con `React`, `Vite` y `Material-UI (MUI)`](#frontend-react-vite-y-material-ui)
  - [Instalar React y Vite](#instalar-react-y-vite)
  - [Instalar MUI](#instalar-mui)
  - [Instalación de `CssBaseline` para resetear estilos](#instalación-de-cssbaseline-para-resetear-estilos-del-navegador)
  - [Instalación de MUI Lab y React Router](#instalación-de-mui-lab-y-react-router)
- [Frontend con `React`, `Vite` y `Chakra UI`](#frontend-react-vite-y-chakra-ui)
  - [Instalar `Chakra UI`](#instalar-chakra-ui)
  - [Iconos en `Chakra`](#iconos-en-chakra)
  - [Formularios con `Chakra UI`](#formularios-con-chakra-ui)
  - [Tablas en `Chakra UI`](#tablas-en-chakra-ui)

## Backend
- [Configuración del proyecto base](#base-del-proyecto)
- [Librerías y dependencias](#librerías-y-dependencias)
- [Pasos para instalar y configurar la API](#pasos-para-instalar-y-configurar-la-api)
  - [Explicación de la API y sus componentes](#explicación-de-la-api-y-componentes)
  - [Agregar un nuevo controlador](#agregar-un-controlador)
  - [Swagger para probar endpoints](#página-de-swagger-para-probar-endpoints)
  - [Formas de crear un endpoint](#formas-de-crear-un-endpoint)
- [Configuración de CORS](#configuración-de-cors-en-la-api)

## Descripción del Proyecto
El proyecto consistira en una pagina web de calificaciones en la cual x , para dichos metodos se realizaran desde peticionese inserciones normales hasta inner joins

## Frontend `React Vite` y `Material UI`

### Instalar React y Vite
---
1. Para iniciar una proyecto con react vite ejecutar el siguiente comando en la terminal, reemplazando ``nombre_minusculas`` por el nombre de tu proyecto::

```
npm create vite@latest nombre_minusculas
````
2. En el asistente de Vite, elegir las siguientes opciones:

- **Framework**: React
- **Librería de JavaScript**: JavaScript + SWC

>NOTA: SWC (Speedy Web Compiler) es un compilador de JavaScript y TypeScript altamente optimizado. En React con Vite, se usa para transformar código más rápidamente, mejorando el rendimiento en el desarrollo y la compilación de aplicaciones.

3. Una vez creado el proyecto, navegar al directorio del proyecto y ejecuta:

```
npm i
```
4. Elimina la configuración predeterminada de App.css y index.css en la carpeta src, ya que podría interferir con el resultado esperado de Chakra UI. Puedes reemplazar el contenido del archivo index.css o en App.css con lo siguiente:
```css
#root {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```
   - **Root**:
      - **`padding: 0` y `margin: 0`**: Elimina cualquier margen o relleno por defecto en el contenedor `#root`, que es el contenedor principal donde se monta toda la aplicación en React.
      - **`min-height: 100vh`**: Asegura que el contenedor `#root` ocupe al menos el 100% de la altura de la ventana del navegador, lo que garantiza que siempre cubra toda la pantalla.
      - **`width: 100%`**: Hace que el contenedor `#root` ocupe todo el ancho disponible de la pantalla.

   - **Body**:
      - **`margin: 0` y `padding: 0`**: Elimina cualquier margen o relleno por defecto en el `body` para evitar desplazamientos o espacios extra alrededor del contenido.
      - **`display: flex`**: Configura el `body` como un contenedor `flexbox`, lo que facilita la alineación de los elementos dentro de él.
      - **`place-items: center`**: Usa esta propiedad de flexbox para centrar los elementos hijos (en este caso, los componentes de React) tanto horizontal como verticalmente. Es equivalente a usar `justify-content: center` y `align-items: center` al mismo tiempo.
      - **`min-width: 320px`**: Establece un ancho mínimo de 320 píxeles para el `body`, asegurando que el diseño sea accesible incluso en dispositivos pequeños.
      - **`min-height: 100vh`**: Asegura que el `body` ocupe al menos la altura completa de la ventana del navegador.








### Instalar Mui
---
Página oficial [Material UI](https://mui.com/material-ui/getting-started/installation)

1. Ejecutar el siguiente comando en el directorio del proyecto creado con Vite:

```
npm install @mui/material @emotion/react @emotion/styled
```

2. Para un mayor control en la edición de estilos, instalar también Styled Components:
```
npm install @mui/material @mui/styled-engine-sc styled-components
```

3. Instalar la libreria de iconos proporcionada por Mui (opcional)

```
npm install @mui/icons-material
```
4. La tipografía Roboto es recomendada para MUI y se instala con:

```
npm install @fontsource/roboto
```
5. Posteriormente agregar estas importaciones en ``main.jsx`` para configurar la tipografía:

```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

![image](https://github.com/user-attachments/assets/3d11b9d5-5f6f-49bc-8cb3-2e4075010445)

### Instalación de ``CssBaseline`` para Resetear Estilos del Navegador
---
CssBaseline es una herramienta proporcionada por Material UI para resetear los estilos predeterminados del navegador y asegurar que los estilos aplicados no sean afectados por la configuración del navegador. Para añadirlo al proyecto agregar la siguiente importación:

```jsx 
import { CssBaseline} from '@mui/material 
```

![image](https://github.com/user-attachments/assets/cf821ff7-0da5-493e-b8a0-753b83b212a5)

### Instalación de MUI Lab y React Router
---
1. Para obtener acceso a componentes experimentales de MUI, instalar Mui Lab:

```
npm i @mui/lab
```

2. Para manejar rutas en el proyecto, instalar react-router-dom:

```
npm i react-router-dom
```


## Frontend `React Vite` y `Chakra UI`
### Instalar Chakra UI
1. Ejecuta el siguiente comando en la raíz del proyecto para instalar Chakra UI y sus dependencias necesarias:
```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```
2. Elimina la configuración por defecto en los archivos App.css y index.css en la carpeta src, ya que puede interferir con el resultado que genera Chakra UI. Puedes reemplazar su contenido por lo siguiente en index.css o App.css:
```css
#root {
  padding: 0;
  margin: 0;
  min-height: 100vh;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}
```
3. Configura el `ChakraProvider` y el sistema en el archivo `main.jsx` de la siguiente manera:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
```
### Iconos en Chakra
**Comando para instalar la librería de iconos** (opcional):

  ```bash
  npm i react-icons
  ```
Para ver la libreria de iconos revisar su pagina oficial [React-Icons](https://react-icons.github.io/react-icons/)

### Formularios con Chakra UI:
Para usar formularios con Chakra UI seguir los siguientes pasos:
1. Instalar la librería de control de formularios:
```bash
npm i @chakra-ui/form-control
```
2. Importa los componentes necesarios de la siguiente forma:
```jsx
import {
   FormControl,
   FormLabel,
   FormErrorMessage,
   FormHelperText,
   FormErrorIcon,
} from "@chakra-ui/form-control"
```
### Tablas en Chakra UI:
Para manejar tablas en tu proyecto con Chakra UI, puedes optar por una biblioteca externa como React Data Table Component, ya que la versión actual de Chakra UI no cuenta con soporte completo para tablas estilizadas de manera nativa.
1. Ejecuta el siguiente comando para instalar la biblioteca:
```bash
npm i react-data-table-component
```
2. Utiliza el siguiente import para incorporar los componentes necesarios en tu proyecto:
```jsx
import DataTable from "react-data-table-component";
```

Con esta solución, puedes crear tablas con funcionalidades avanzadas como paginación, ordenamiento y personalización de estilos.

## Backend (ASP.NET Core)

### Base del proyecto
---

1. Selecciona la opción `Nuevo Proyecto` y busca  y escoge `Biblioteca de Clases`.
2. Asigna un nombre al proyecto, define su ubicación y crea una solución (la solución será el nombre de la carpeta que se generará como backend, así como el archivo ejecutable `.sln`).
3. Hacer clic en `Crear`.
4. Crea un gitignore usando el siguiente comando en la raiz del nuevo proyecto:

```Powershell
dotnet new gitignore --force
```


### Librerias y Dependencias
---
1. Haz clic derecho sobre el proyecto en Visual Studio y selecciona `Administrar Paquetes NuGet`.
2. Ve a la pestaña `Examinar` de la nueva ventana.
3. Busca e instala las siguientes librerías para conectar con SQL Server:

```
Microsoft.Entityframeworkcore
Microsoft.Entityframeworkcore.Design
Microsoft.Entityframeworkcore.SqlServer
Microsoft.Entityframeworkcore.Tools

```
4. Para conectar SQL Server con ASP.NET a través de Entity Framework y generar clases para las tablas de la base de datos, utiliza la siguiente cadena de conexión:
- Haz clic en el menú `Herramientas` en Visual Studio.
- Selecciona `Administrador de Paquetes NuGet`.
- Abre la `Consola del Administrador de Paquetes`.
- Escribe el siguiente comando (sin los corchetes `[]` y respetando las mayúsculas y minúsculas):

  ```
  Scaffold-DbContext "Server=[Escribir_Servidor]; Encrypt=False; DataBase=[Escribir_BaseDeDatos]; Trust Server Certificate=true; User Id=[Escribir_Usuario]; Password=[Escribir_Contraseña]; MultipleActiveResultSets=true" Microsoft.EntityFrameworkCore.SqlServer -ContextDir "[Escribir_Carpeta_Contexto]" -OutPutDir "[Escribir_Carpeta_Modelos]"
  ```

- En caso de que no se utilice contraseña, el comando sería:

  ```
  Scaffold-DbContext "Server=(Elnombredetuserver); Encrypt=False; DataBase=(Nombredelabasededatosquecreaste);Integrated Security=true" Microsoft.EntityFrameworkCore.SqlServer -OutPutDir Models
  ```

- Con este comando se generarán dos carpetas:
  - **Context**: Contendrá las clases de contexto.
  - **Models**: Contendrá las clases correspondientes a las tablas de la base de datos. Estas clases también pueden servir como modelos para estructurar las respuestas de los endpoints de la API (Como respuestas Json). Si la respuesta de una consulta es compleja o contiene diversos atributos, será necesario crear un nuevo modelo que refleje la estructura deseada.

- Agregar un Nuevo Modelo
   - Hacer clic derecho en la carpeta definida como **Models**.
   - Seleccionar la opción **Agregar > Clase**.
   - Asignar un nombre representativo al modelo y posteriormente hacer clic en **Agregar**.

> NOTA: Recordar cambiar la clase creada del Modelo de `internal` a `public`

### Pasos para Instalar y Configurar la API
---
La API REST, encargada de recibir y responder a las solicitudes, no se crea automáticamente al configurar un proyecto con una `Biblioteca de Clases`. Por lo tanto, debe agregarse manualmente como un proyecto adicional.

1. **Crear la API en ASP.NET Core Web API**
   - Hacer clic derecho en el proyecto.
   - Seleccionar la opción **Agregar > Nuevo Proyecto**.
   - Eligir `ASP.NET Core Web API` como tipo de proyecto.
   - Dejar las opciones por defecto y haz clic en **Crear**.

2. **Establecer la API como Proyecto de Inicio**
   - Hacer clic derecho sobre el proyecto de la API que acabas de crear.
   - Seleccionar **Establecer como proyecto de Inicio** para que Visual Studio compile y ejecute esta API al iniciar el proyecto.

3. **Agregar Referencia del Proyecto Base en la API**
   - Hacer clic derecho sobre el proyecto de la API.
   - Seleccionar **Agregar > Referencia del proyecto**.
   - Marcar el proyecto base (backend) y haz clic en **Aceptar** para agregar la referencia.

### Explicación de la API y Componentes
---

1. **Archivo `Program.cs`**
   - Este archivo es el punto de entrada donde se ejecuta la API y se configuran ajustes iniciales.

2. **Archivos de Ejemplo (`WeatherForecast.cs` y `WeatherForecastController.cs`)**
   - Estos archivos, ubicados en la carpeta `Controllers`, son ejemplos generados por defecto y es recomendable eliminarlos para mantener la estructura de la API limpia.

3. **Carpeta `Controllers`**
   - En esta carpeta se definen los controladores, los cuales establecen los endpoints de la API (los puntos de acceso o rutas de la API).

4. **Agregar un Controlador**
   - Hacer clic derecho en la carpeta `Controllers`, seleccionar **Agregar > Controlador**.
   - Eligir **API > Controlador de API en blanco**. Esto creará una plantilla similar a la siguiente:

   ![image](https://github.com/user-attachments/assets/2301c0c7-8efd-4f4d-bb43-72527f3d4394)

   > **Nota:** La URL de los endpoints incluirá, en este caso, `/api` seguido del nombre del controlador, de modo que las rutas se verán como `http://localhost:XXXX/api/[endpoint]`.

5. **Página de Swagger para Probar Endpoints**
   - Al ejecutar el backend, se abrirá la página de Swagger en `https://localhost:XXXX/swagger/index.html`. Algunos navegadores pueden alertar que esta página es riesgosa, pero Swagger es una herramienta similar a Postman que permite probar los endpoints.

   ![image](https://github.com/user-attachments/assets/305846bb-bb93-40ff-8613-2cc55a283f47)

6. **Formas de Crear un Endpoint**

   - **Primera Forma**  
     La URL del endpoint será `http://localhost:XXXX/api/[NombreControladorSinController]/[endpoint]`.  
     En este caso, el nombre del controlador determina parte de la ruta, y el nombre del método define el segmento final.

     ```csharp
      [Route("api/[controller]")] // "api" seguido del nombre del controlador define la URL base.
      [ApiController]
      public class PruebaController : ControllerBase
      {
         [HttpGet("prueba")] // Define el endpoint como "http://localhost:XXXX/api/Prueba/prueba"
         public string prueba()
         {
            return "Hola Mundo";
         }
      }
     ```

   - **Segunda Forma**  
     En esta forma, la URL del endpoint es más personalizada, eliminando la dependencia del nombre del controlador. La URL será `http://localhost:XXXX/api/[endpoint]`.

     ```csharp
      [Route("api")] // Define una ruta fija, independiente del nombre del controlador.
      [ApiController]
      public class PruebaController : ControllerBase
      {
         [HttpGet("prueba")]// Define el endpoint como "http://localhost:XXXX/api/prueba"
         public string prueba()
         {
            return "Hola Mundo";
         }
      }
     ```
> **Nota:** En ambos casos, se puede ajustar las rutas según las necesidades utilizando atributos como `[Route]` y `[HttpGet]`. Recordar que "api" es un prefijo común para diferenciar los endpoints de la API.

7. **Verificación de Endpoints a Través de Swagger**
   - Se puede consultar todos los endpoints de la API en la página generada automáticamente por Visual Studio al ejecutar la API.

   ![image](https://github.com/user-attachments/assets/9196c355-7e5d-422a-a5e0-66f584e76698)

   > **Nota:** Si no seve el botón **Execute** en la página de Swagger, hacer clic en **Try out** para habilitar la opción de prueba.


### Configuración de CORS en la API

Para habilitar CORS (Cross-Origin Resource Sharing) en tu API, sigue estos pasos:

1. Abre el archivo `Program.cs` de tu proyecto API.

2. Agrega las siguientes líneas de código para configurar y habilitar CORS:

   ```csharp
   // Configuración de CORS
   builder.Services.AddCors(policyBuilder => policyBuilder.AddDefaultPolicy
      (policy => policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

   app.UseCors(); // Habilitar CORS
   ```
3.El archivo `Program.cs` debe quedar de la siguiente manera:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Configuracion de CORS
builder.Services.AddCors(policyBuilder => policyBuilder.AddDefaultPolicy
    (policy => policy.WithOrigins("*").AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(); //Habilitar CORS

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```
>NOTA: El valor "*" permite el acceso desde cualquier origen. Si se desea limitar los orígenes permitidos, se debe de reemplazar con un listado específico de URLs. Por ejemplo: .WithOrigins("https://example.com", "https://anotherexample.com").