# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Ordenación por fecha implementada correctamente (de más reciente a más antigua).
-   Estructura clara y legible.

### Problemas encontrados

- **Cálculo de total gastado:** El método calcularTotal() tiene errores: Itera sobre this.importeInput, que es un elemento del DOM, no sobre los gastos. Intenta acceder a .amount, propiedad inexistente.
- No se convierten los **importes a número en algunas operaciones internas**, aunque al crear el objeto nuevoGasto sí se hace.


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
  Editar gastos               ❌ No funciona, salta error javascript
  Eliminar un gasto           ✔ Funciona
  Calcular total              ❌ No funciona
  Validación campos vacíos    ✔ Correcto
  Validar fecha futura        ✔ Correcto
  Validar importe regex       ❌ No implementado
  Evitar duplicados           ❌ No implementado
  Limpiar formulario          ❌ No implementado
  Eliminar todos los gastos   ❌ No implementado
  Mensajes                    ✔ Funciona
  Sin errores en consola      ✔ Correcto

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 1 pt\
-   Editar: ❌ → 0 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: ✔ → 1.5 pt\ He dado por bueno que funcione el ordenar aunque sea en orden inverso, te doy puntuación extra por realizarlo como indica el enunciado. 
-   Total gastado: ❌ → 0 pt\

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final: **3.5 / 10**

------------------------------------------------------------------------
