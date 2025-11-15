# Evaluación:

## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien, aunque omites la llamada a la funcion calculargasto().
-   Utilizas correctamente métodos como find, filter y sort.
-   Estructura clara y legible.

### Problemas encontrados

-   Error en **editar()**: `categoriaInput = p.categoria` sustituye el nodo del DOM en lugar de
    asignar su valor → debe ser `categoriaInput.value = p.categoria`.
-   Error en **calcularTotal()**: `for (const gasto of this.gastos.importe.value)` es inválido;
    `this.gastos` es un array, `importe` no es una propiedad del array.
-   Falta de declaración y uso correcto de la variable `cTotal` (queda fuera del ámbito o sin reiniciarse).
-   **El total final** no se muestra con formato correcto.
-   **Edición incorrecta:** En el submit llamas a `gestor.editar()` en lugar de `gestor.guardarEdicion()`.
-   **Ordenación por fecha** va del más antiguo al más reciente, cuando se pidió lo contrario.
-   **Validación de fecha futura incorrecta:** `new Date(fecha.value) > Date.now()` compara Date con number → debe usarse `new Date()`.

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
  Editar gastos               ❌ No funciona correctamente
  Eliminar un gasto           ✔ Funciona
  Calcular total              ❌ No funciona
  Validación campos vacíos    ✔ Correcto
  Validar fecha futura        ❌ No funciona
  Validar importe regex       ❌ No implementado
  Evitar duplicados           ❌ No implementado
  Limpiar formulario          ❌ No implementado
  Eliminar todos los gastos   ❌ No implementado
  Mensajes                    ✔ Funciona
  Sin errores en consola      ❌ No funciona correctamente, salta un error al pulsar el botón editar.

------------------------------------------------------------------------

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 1 pt\
-   Editar: ❌ → 0 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: ✔ → 1 pt\ Aunque ordena al revés de como se pidió
-   Total gastado: ❌ → 0 pt

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **3 / 10**

------------------------------------------------------------------------