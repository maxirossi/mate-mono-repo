# ms-users

.
├── Dockerfile                # Instrucciones para construir la imagen Docker
├── entrypoint.sh             # Script de entrada para contenedor
├── jest.config.js            # Configuración de Jest (tests)
├── lint-staged.config.js     # Configuración de lint-staged para pre-commits
├── logs/                     # Carpeta para logs (runtime)
├── package.json              # Dependencias y scripts del proyecto
├── package-lock.json         # Lockfile de dependencias
├── prisma/
│   ├── schema.prisma         # Esquema de Prisma ORM
│   └── seed.ts               # Seeder de base de datos
├── README.md                 # Documentación del proyecto
├── schema.prisma             # (duplicado fuera de carpeta, revisar)
├── src/
│   ├── index.ts              # Punto de entrada (opcional si `server.ts` es principal)
│   ├── Modules/
│   │   ├── Shared/           # Recursos compartidos (constantes, tipos, helpers)
│   │   │   ├── constants.ts
│   │   │   ├── domain/
│   │   │   ├── dto/
│   │   │   ├── HttpResponseCodes.ts
│   │   │   └── infrastructure/
│   │   ├── __test__/         # Tests unitarios
│   │   │   └── health.route.test.ts
│   │   └── User/             # Módulo de usuarios (DDD-style)
│   │       ├── application/
│   │       ├── infrastructure/
│   │       ├── model/
│   │       ├── Shared/
│   │       └── Tests/
│   ├── Routes/
│   │   └── routes.ts         # Rutas de la aplicación
│   ├── server.ts             # Servidor principal (Express, Fastify, etc.)
│   ├── swagger_output.json   # Generado por Swagger Autogen
│   └── swagger.ts            # Configuración Swagger
├── tsconfig.json             # Configuración TypeScript base
└── tsconfig.prod.json        # Configuración TS para producción

# Public Swagger

http://localhost:3000/api-docs/



## Features

- DDD Based / Hexagonal Architecture
- Object Values
- Application / Domain / Infrastructure layers
- Controllers, Services and Repositories
- Test E2E (JEST)
- Prettier for Code Style 
- Eslint as linter
- TS Configuration
- Prisma as ORM
- Swagger for API Documentation
- Winston for logs
- Nodemon
- DockerFile and docker-compose
- Postgress as relational DB 
- Users module 

## Requirements

```bash
Docker
Docker Composer
Node LTS, >= 18, NPM
```
## CURL commands to test 

## Create User CURL

```bash
curl -X POST http://localhost:3000/v1/users -H "Content-Type: application/json" -d '{
"uuid": "",
"name": "John",
"userName": "johndoe123",
"lastName": "Doe",
"email": "johndoe@example.com",
"password": "P@ssw0rd123",
"active": true,
"createdAt": "2022-01-30T12:00:00Z"
}'
```

```bash
curl -X POST http://localhost:3000/v1/users -H "Content-Type: application/json" -d '{
"uuid": "",
"name": "Juan Maximiliano",
"lastName": "Rossi",
"userName": "maxirossi",
"email": "maximilianokaizen@gmail.com",
"password": "P@ssw0rd123",
"active": true,
"createdAt": ""
}'
```

## Get all users CURL

```bash
curl -X GET http://localhost:3000/v1/users
```

## Get user by UUID

```bash
curl -X GET http://localhost:3000/v1/users/e2fbadaf-7f56-4a47-86d8-439e655369d8
```

## Delete user (soft delete)

```bash
curl -X DELETE http://localhost:3000/v1/users/e2fbadaf-7f56-4a47-86d8-439e655369d8
```

## Update User

```bash
curl -X PUT http://localhost:3000/v1/users/2e771f88-eff2-45da-8d39-090365dbc09d -H "Content-Type: application/json" -d '{
"name": "John",
"lastName": "Doe",
"password": "P@ssw0rd123",
"active": false
}'
```

## Auth User

```bash
curl -X POST http://localhost:3000/v1/users/authenticate -H "Content-Type: application/json" -d '{
"email": "maximilianokaizen@gmail.com",
"password": "P@ssw0rd123"
}'
```
