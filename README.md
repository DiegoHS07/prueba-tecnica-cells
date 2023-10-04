# Test CELLS BBVA 
Present by Diego Alejandro Higuera Sierra

## Getting Started
This is a Lit Element project, 

import the project

install dependencies of Lit Element
```bash
    npm i lit-element
```

install dependencies of polymer2
```bash
    npm install -g polymer-cli
```

run the project  
```bash
    polymer serve --open
```

if ejecute the command open automatically in your browser.

or open http://localhost:8080 with your browser to see the result.
if the port 8080 is busy you can open in port 8081

# Instalación de Json Server
1. Tener instalado npm en el computador o laptop
2. Instalar nodeJS via npm
3. Instalar json server con el siguiente comando 
```bash
    npm install -g json-server
```
4. Crear un archivo de texto llamado pokemon.json con la siguiente información: (Ya se
entrega en el ejercicio)
5. Ejecutar el siguiente comando 

```bash
json-server -w pokemon.json -p 3002 
```
ubicándose en la ruta donde se encuentra el archivo pokemon.json
6. Si se despliega correctamente el servicio este genera la siguiente URL
http://localhost:3001/pokemon
http://localhost:3001/pokemon?name=Charmander