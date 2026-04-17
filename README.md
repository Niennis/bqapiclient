# Bakery Queen — App de toma de pedidos 🍞

Aplicación web para la toma y gestión de pedidos en restaurantes o cafeterías, optimizada para uso desde **tablets**. Proyecto desarrollado durante el bootcamp de Laboratoria.

El sistema consta de dos partes: una **API REST** ([ver repo](https://github.com/Niennis/bqapi-mongo)) y esta **interfaz de usuario**.

## 🚀 Demo

[Ver aplicación en vivo](https://bakequeen.vercel.app/)

### 🔑 Credenciales de prueba

| Campo | Valor |
|---|---|
| Usuario | `user@test` |
| Contraseña | `test123` |

## ✨ Funcionalidades

- Visualización de menú por categorías
- Toma de pedidos con carrito en tiempo real
- Gestión del estado de los pedidos (pendiente / en preparación / listo)
- CRUD de productos
- Vista diferenciada para meseros y cocina
- Interfaz responsiva optimizada para tablet

## 🛠️ Stack tecnológico

- **Frontend:** React
- **UI:** Material UI
- **Backend:** Node.js + Express ([repo API](https://github.com/Niennis/bqapi-mongo))
- **Base de datos:** MongoDB
- **Tests:** Jest
- **Control de versiones:** Git
- **Despliegue:** Vercel / Firebase

## ⚙️ Cómo correr localmente

```bash
# Clonar el repositorio
git clone https://github.com/Niennis/bqapiclient.git
cd bqapiclient

# Instalar dependencias
npm install

# Correr en modo desarrollo
npm start
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

> **Nota:** Para funcionar completamente necesita la API corriendo. Ver instrucciones en el [repo de la API](https://github.com/Niennis/bqapi-mongo).

## 📷 Captura

![Bakery Queen preview](https://i.ibb.co/z5SQ6bn/Captura-de-pantalla-Bakery-Queen.png)

## 👩‍💻 Desarrollado por

[Estefanía Osses Vera](https://github.com/Niennis) — Bootcamp Laboratoria, 2019
