# BTG Funds Management - Prueba Técnica

Aplicación web interactiva y responsiva para la gestión de fondos de inversión (FPV/FIC) para clientes de BTG Pactual.

## 📋 Descripción del Proyecto

Esta es una prueba técnica que implementa un sistema de gestión de fondos de inversión con las siguientes capacidades:

- **Visualizar fondos disponibles** con sus detalles (monto mínimo, categoría)
- **Suscribirse a fondos** validando saldo suficiente
- **Cancelar participaciones** y actualizar saldo en tiempo real
- **Historial de transacciones** completo
- **Notificaciones** por email o SMS
- **Manejo de errores** y validaciones robustas

### Fondos Disponibles

| ID | Nombre | Monto Mínimo | Categoría |
|---|---|---|---|
| 1 | FPV_BTG_PACTUAL_RECAUDADORA | COP $75.000 | FPV |
| 2 | FPV_BTG_PACTUAL_ECOPETROL | COP $125.000 | FPV |
| 3 | DEUDAPRIVADA | COP $50.000 | FIC |
| 4 | FDO-ACCIONES | COP $250.000 | FIC |
| 5 | FPV_BTG_PACTUAL_DINAMICA | COP $100.000 | FPV |

**Saldo inicial del usuario:** COP $500.000

## 🛠️ Tecnologías Utilizadas

- **Angular 21** - Framework web
- **TypeScript** - Lenguaje de programación
- **RxJS** - Gestión reactiva de estado
- **Angular Forms** - Validaciones de formularios
- **Vitest** - Testing unitario

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Angular CLI (versión 21 o superior)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/joancastaneda-ceiba/btg-funds-management.git
cd btg-funds-management
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
ng serve
```

Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques archivos fuente.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── fund-list/
│   │   ├── fund-detail/
│   │   ├── subscription-modal/
│   │   ├── transaction-history/
│   │   └── navbar/
│   ├── services/            # Servicios y lógica de negocio
│   │   ├── fund.service.ts
│   │   ├── wallet.service.ts
│   │   ├── transaction.service.ts
│   │   └── notification.service.ts
│   ├── models/              # Interfaces y tipos
│   │   ├── fund.model.ts
│   │   ├── transaction.model.ts
│   │   └── notification.model.ts
│   ├── guards/              # Guards de rutas
│   ├── interceptors/        # Interceptores HTTP
│   ├── app.component.ts
│   ├── app.routes.ts        # Configuración de rutas
│   └── app.config.ts
├── assets/
├── styles/
└── environment/             # Configuración por entorno
```

## 🎯 Características Principales

### 1. Gestión de Fondos
- Listado de fondos disponibles con filtros por categoría
- Detalles de cada fondo
- Validación de montos mínimos

### 2. Gestión de Suscripciones
- Formulario de suscripción con validaciones
- Verificación de saldo disponible
- Selección de método de notificación (Email/SMS)
- Confirmación de transacción

### 3. Gestión de Cartera
- Visualización del saldo actual
- Fondos suscritos del usuario
- Opción de cancelar participaciones

### 4. Historial de Transacciones
- Lista completa de suscripciones y cancelaciones
- Información de fecha, monto y estado
- Filtros por tipo de transacción

### 5. Notificaciones
- Selección de canal de notificación
- Feedback visual de operaciones
- Mensajes de error contextualizados

### Compilar para producción

```bash
ng build --configuration production
```

Los artefactos se almacenarán en el directorio `dist/`.

## 🧪 Testing

### Ejecutar pruebas unitarias

```bash
ng test
```

### Cobertura de pruebas

```bash
ng test --code-coverage
```

Las pruebas unitarias cubren:
- Servicios y lógica de negocio
- Validaciones de formularios
- Gestión de estado
- Componentes principales

## 📡 API Simulada

El proyecto utiliza una API REST simulada con datos mockeados localmente:

- **Endpoint:** `http://localhost:4200/api`
- **Fondos:** `/api/funds`
- **Transacciones:** `/api/transactions`
- **Usuario:** `/api/user`

Los datos se sirven desde archivos JSON en `src/assets/api/` y se interceptan con `HttpClient`.

### Estructura de datos

**Fondo:**
```json
{
  "id": 1,
  "name": "FPV_BTG_PACTUAL_RECAUDADORA",
  "minAmount": 75000,
  "category": "FPV",
  "description": "Descripción del fondo",
  "performance": "5.2%"
}
```

**Transacción:**
```json
{
  "id": 1,
  "type": "subscription|cancellation",
  "fundId": 1,
  "amount": 100000,
  "date": "2026-03-12T10:30:00Z",
  "notificationMethod": "email|sms",
  "status": "completed"
}
```

## 🎨 Diseño UI/UX

- **Responsivo:** Funciona en desktop, tablet y móvil
- **Interfaz intuitiva:** Navegación clara y fácil de usar
- **Feedback visual:** Indicadores de carga, errores y éxito
- **Accesibilidad:** Cumple con estándares WCAG básicos
- **Colores:** Identidad visual de BTG Pactual

## 🔐 Validaciones

- ✅ Monto mínimo de suscripción
- ✅ Saldo suficiente en cartera
- ✅ Formato de email válido
- ✅ Teléfono válido para SMS
- ✅ Campos requeridos en formularios
- ✅ Manejo de errores HTTP

## 📱 Flujo de Usuario

1. **Inicio:** Usuario ve su saldo inicial (COP $500.000)
2. **Exploración:** Visualiza lista de fondos disponibles
3. **Suscripción:** Selecciona un fondo y completa el formulario
4. **Validación:** Sistema verifica saldo y montos mínimos
5. **Confirmación:** Usuario recibe notificación de la operación
6. **Actualización:** Saldo y cartera se actualizan en tiempo real
7. **Historial:** Todas las transacciones quedan registradas

## 🚦 Estado de Desarrollo

- ✅ Estructura del proyecto
- ⏳ Componentes principales
- ⏳ Servicios y gestión de estado
- ⏳ API simulada
- ⏳ Validaciones de formularios
- ⏳ Diseño responsivo
- ⏳ Pruebas unitarias
- ⏳ Mejoras UI/UX

## 📝 Notas Importantes

- No incluye lógica de backend real ni autenticación
- Los datos se reinician al recargar la página
- La API simulada usa datos estáticos
- El usuario es único con saldo inicial de COP $500.000

## 🤝 Contribuciones

Este es un proyecto de prueba técnica. No se aceptan contribuciones externas.

## 📞 Soporte

Para preguntas sobre el proyecto, contactar al autor.

---

**Generado con Angular CLI 21.2.2**

```
Para más información sobre Angular CLI, incluyendo referencias de comandos detalladas, visita la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).