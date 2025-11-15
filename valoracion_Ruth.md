# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Método calcularTotal() suma correctamente los importes y muestra el total en pantalla.
-   Ordenación por fecha implementada correctamente (de más reciente a más antigua).
-   Método limpiar() implementado y usado para limpiar el formulario tras edición.
-   Conversión de importes a número antes de mostrar (toFixed(2)).
-   Estructura clara y legible.

### Problemas encontrados

-- **Validación de fecha:** compara fechaActual > fechaUsuario validación contraria a la solicitada.

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
  Mostrar lista ordenada      ✔ Correcto
  Editar gastos               ✔ Funciona
  Eliminar un gasto           ✔ Funciona
  Calcular total              ✔ Funciona
  Validación campos vacíos    ✔ Correcto
  Validar fecha futura        ❌ Validación invertida
  Validar importe regex       ❌ No implementado
  Evitar duplicados           ❌ No implementado
  Limpiar formulario          ❌ No implementado
  Eliminar todos los gastos   ❌ No implementado
  Mensajes                    ✔ Funciona
  Sin errores en consola      ✔ Correcto

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 1 pt\
-   Editar: ✔ → 1 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: ✔ → 1.5 pt\ He dado por bueno que funcione el ordenar aunque sea en orden inverso, te doy puntuación extra por realizarlo como indica el enunciado. 
-   Total gastado: ✔ → 1 pt\

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final: **5.5 / 10**

------------------------------------------------------------------------
