## TotalCoin Challenge

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Visual Studio](https://visualstudio.microsoft.com/), preferiblemente la versión más reciente.
- [Paquetes NuGet](https://www.nuget.org/), que se incluyen con Visual Studio.
- [Visual Studio Code](https://code.visualstudio.com/)
- SQL Server 2022
- SQL Server Management Studio 19.1
- Proyecto realizado con .NET 6
- [Nodejs.org](https://nodejs.org/), versión utilizada en el proyecto (v20.5.0)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Paquetes utilizados:

BackEnd:

- AutoMapper 12.0.1
- AutoMapper.Extensions.Microsoft.DependencyInjection 12.0.1
- Microsoft.EntityFrameworkCore.SqlServer 7.0.13
- Microsoft.EntityFrameworkCore.Tools 7.0.13
- Swashbuckle.AspNetCore 6.2.3

FrontEnd:

- react 18.2.0
- react-dom 18.2.0
  
# API en C# con Entity Framework

## Instrucciones de configuración

1. Clona este repositorio en tu máquina local:

   Abre una ventana de comandos y ejecuta el siguiente comando:
   
   ```bash
   git clone https://github.com/federico620/TotalCoin-Challenge-JuniorFullstack.git

1. Abre el proyecto "ButtonsApp.sln" ubicado dentro del proyecto en la carpeta backend con Visual Studio.

2. Configura la cadena de conexión a la base de datos:
   
   En el proyecto abre el archivo appsettings.json desde tu Visual Studio y edita en la cadena de conexión "DefaultConnection" la variable "Server=localhost" por el nombre de tu servidor SQL "Server=nombredetuservidor"

5. Abre la Consola de Paquetes NuGet:

   Ve a Herramientas > Gestor de Paquetes NuGet > Consola de Paquetes NuGet.

   Ejecuta el comando update-database para aplicar las migraciones y configurar la base de datos:
   
   ```bash
   update-database
   ```
   Se habrá creado una base de datos con el nombre Buttons.
   
   Con la base de datos configurada, puedes ejecutar el proyecto.

7. Ejecutar el proyecto

   Asegúrate de que el proyecto esté seleccionado como proyecto de inicio en Visual Studio.

   Presiona el botón de inicio (F5) o inicia el proyecto manualmente desde Visual Studio.

El proyecto de API se ejecutará y estará disponible en la URL predeterminada, que generalmente es https://localhost:port/. Puedes acceder a la API a través de esta URL.

# Proyecto React Vite con TypeScript

## Instrucciones de configuración

1. Desde la ventana de comandos, navega al directorio del proyecto:

   ```bash
   cd TotalCoin-Challenge-JuniorFullstack
   ```
   
   ```bash
   cd frontend
   
2. Instala las dependencias del proyecto:

   ```bash
   npm install

3. Crea un archivo .env basado en .env.example y define la ruta de tu API:

   ```bash
   cp .env.example .env

4. Abre el proyecto con Visual Studio Code y edita en el archivo .env la URL de tu API:

   Ejecuta el comando para abrir Visual Studio Code:

   ```bash
   code .
   ```

   En el archivo .env:

   VITE_API_URL = https://localhost:7121/api

   Reemplaza https://localhost:7121 con la URL de tu API, VITE_API_URL = https://url:puerto/api

6. Una vez que hayas configurado la ruta de la API, puedes iniciar el servidor de desarrollo. Ejecuta el siguiente comando:

   ```bash
   npm run dev

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado, si no se abre automáticamente copia la URL de la ventana de comandos en "local:" y pegala en tu navegador. 



