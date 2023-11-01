# ButtonsApp

# API en C# con Entity Framework

Este es un proyecto de API en C# con Entity Framework. Este README proporcionará las instrucciones necesarias para configurar la base de datos utilizando el comando `update-database` en la consola de paquetes NuGet antes de ejecutar el proyecto.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Visual Studio](https://visualstudio.microsoft.com/), preferiblemente la versión más reciente.
- [Paquetes NuGet](https://www.nuget.org/), que se incluyen con Visual Studio.

## Instrucciones de configuración

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/tuproyecto.git
Navega al directorio del proyecto:
   ```bash
   cd backend
   ```

Abre el proyecto en Visual Studio.

Abre la Consola de Paquetes NuGet:

Ve a Herramientas > Gestor de Paquetes NuGet > Consola de Paquetes NuGet.
En la Consola de Paquetes NuGet, asegúrate de seleccionar el proyecto de datos donde se encuentra tu contexto de Entity Framework.

Ejecuta el comando update-database para aplicar las migraciones y configurar la base de datos:

bash

update-database

Con la base de datos configurada, puedes ejecutar el proyecto.

Ejecutar el proyecto

Asegúrate de que el proyecto esté seleccionado como proyecto de inicio en Visual Studio.

Presiona el botón de inicio (F5) o inicia el proyecto manualmente desde Visual Studio.

El proyecto de API se ejecutará y estará disponible en la URL predeterminada, que generalmente es https://localhost:port/. Puedes acceder a la API a través de esta URL.

# Proyecto React con Vite

Este es un proyecto de inicio para desarrollar una aplicación web utilizando React y Vite. Este README proporcionará las instrucciones necesarias para levantar el proyecto y configurar la ruta de una API mediante el archivo `.env.example`.

## Requisitos previos

Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

## Instrucciones de configuración

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tuusuario/tuprojecto.git
Navega al directorio del proyecto:

   ```bash
   cd tuprojecto
   ```
Instala las dependencias del proyecto:

bash

npm install
Crea un archivo .env basado en .env.example y define la ruta de tu API:

bash

cp .env.example .env

Abre el archivo .env con tu editor de texto y define la URL de tu API:

dotenv

VITE_API_URL = https://localhost:7121/api

Reemplaza https://localhost:7121/api con la URL real de tu API.

Instrucciones de desarrollo
Una vez que hayas configurado la ruta de la API, puedes iniciar el servidor de desarrollo. Ejecuta el siguiente comando:

bash

npm run dev

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado. Cualquier cambio que realices en el código se reflejará automáticamente en la aplicación.



