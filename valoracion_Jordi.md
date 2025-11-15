# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados pero les falta llamar a la función calcular total.
-   Utilizas correctamente métodos como find, filter y sort.
-   Estructura clara y legible.

### Problemas encontrados

-   Error en **calcularTotal()**: gasto.amount, propiedad inexistente → no funciona;
-   **El Calcular total** no se llama en ningún sitio.
-   **Ordenación por fecha** va del más antiguo al más reciente, cuando se pidió lo contrario.
-   **Validación de fecha futura:** no esta implementado.
-   **limpiarTodo()** está vacío, además, pone botonLimpiarTodo.addEventListener("click", limpiarTodo()); con paréntesis → se ejecuta inmediatamente, no al hacer click. Debería ser botonLimpiarTodo.addEventListener("click", limpiarTodo);.
-   **Validación de formulario** no funciona, eso permite que se pueda añadir un objeto vacio, sin rellenar nada en el formulario.
- **Botón limpiar formulario**: No es del todo correcto, el enunciado indica: **Añadir e implementar** la funcionalidad de un botón que borre los valores que hay en el formulario. Tu has puesto un boton de tipo "reset".

### No implementado

- **Validación de importe**
- **Evitar duplicados**
- **Botón eliminar todos los gastos** 


------------------------------------------------------------------------

## 2. Funcionalidad General

  Funcionalidad               Estado
  --------------------------- ------------------------------
  Agregar gastos              ✔ Añade, pero tambien permite añadir con todo vacio.
  Mostrar lista ordenada      ❌ Orden incorrecta 
  Editar gastos               ✔ Funciona
  Eliminar un gasto           ✔ Funciona
  Calcular total              ❌ No funciona
  Validación campos vacíos    ❌ No funciona
  Validar fecha futura        ❌ No implementado
  Validar importe regex       ❌ No implementado
  Evitar duplicados           ❌ No implementado
  Limpiar formulario          ✔ Funciona
  Eliminar todos los gastos   ❌ No implementado
  Mensajes                    ✔ Funciona
  Sin errores en consola      ✔ Correcto

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 0.5 pt\ Funciona, pero tambien permite añadir un campo vacio.
-   Editar: ✔ → 1 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: Ordenar: ✔ → 1 pt\ Aunque ordena al revés de como se pidió
-   Total gastado: ❌ → 0 pt\

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ✔ → 0.5 pt\ Aunque se debe hacer con código javascript ya que el enunciado pedía implementar la funcionalidad.
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **4 / 10**

------------------------------------------------------------------------