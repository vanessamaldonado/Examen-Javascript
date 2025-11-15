# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Conversión de importes a números para cálculo del total.
-   Cálculo de total funcional.
-   Estructura clara y legible.

### Problemas encontrados

-   Ordenación por fecha invertida (de más antiguo a más reciente) cuando se pide lo contrario.
-   Validación de fecha confusa: bloquea fecha futura pero mensaje dice "no puedes elegir fecha pasada".

### No implementado

- **Validación de importe**
- **Evitar duplicados**
- **Botón eliminar todos los gastos** 
- **Botón limpiar formulario**

------------------------------------------------------------------------

## 2. Funcionalidad General

  Funcionalidad               Estado
  --------------------------- ------------------------------
  Agregar gastos              ✔ Funciona
  Mostrar lista ordenada      ❌ Orden incorrecta  
  Editar gastos               ✔ Funciona
  Eliminar un gasto           ✔ Funciona
  Calcular total              ✔ Funciona
  Validación campos vacíos    ✔ Correcto
  Validar fecha futura        ✔ Correcto
  Validar importe regex       ❌ No implementado
  Evitar duplicados           ❌ No implementado
  Limpiar formulario          ❌ No implementado
  Eliminar todos los gastos   ❌ No implementado
  Mensajes                    ✔ Funciona
  Sin errores en consola      ✔ Correcto

------------------------------------------------------------------------

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 1 pt\
-   Editar: ✔ → 1 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: ✔ → 1 pt\ Aunque ordena al revés de como se pidió
-   Total gastado: ✔ → 1 pt\

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **5 / 10**

------------------------------------------------------------------------