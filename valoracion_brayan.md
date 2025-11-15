# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Estructura clara y legible.

### Problemas encontrados

-   **Error grave en calcularTotal():** Usas propiedades inexistentes (`this.total`) y no actualizas el DOM correctamente.
-   **Edición incorrecta:** En el submit llamas a `gestor.editar()` en lugar de `gestor.guardarEdicion()`.
-   **Validación de fecha incorrecta:** Prohíbe la fecha actual.
-   **Uso de Tipos incorrectos al editar:** Guardas el importe como string y lo comparas con números.
    
### No implementado

- **Validación de importe**
- **Evitar duplicados**
- **Botón eliminar todos los gastos** 
- **Botón limpiar formulario**


------------------------------------------------------------------------

## 2. Funcionalidad General

  Funcionalidad              | Estado
  ---------------------------| ------------------------------
  Agregar gastos             | ✔ Funciona
  Mostrar lista ordenada     | ❌ Orden incorrecta  
  Editar gastos              | ❌ No funciona correctamente
  Eliminar un gasto          | ✔ Funciona
  Calcular total             | ❌ No funciona
  Validación campos vacíos   | ✔ Correcto
  Validar fecha futura       | ✔ Correcto
  Validar importe regex      | ❌ No implementado
  Evitar duplicados          | ❌ No implementado
  Limpiar formulario         | ❌ No implementado
  Eliminar todos los gastos  | ❌ No implementado
  Mensajes                   | ✔ Funciona
  Sin errores en consola     | ✔ Correcto

------------------------------------------------------------------------

### Funcionalidades mínimas (5 pts)

-   Agregar: ✔ → 1 pt
-   Editar: ❌ → 0 pt
-   Eliminar: ✔ → 1 pt
-   Ordenar: ✔ → 1 pt Aunque ordena al revés de como se pidió
-   Total gastado: ❌ → 0 pt

### Extras (5 pts)
-   Validación importe regex: ❌ 0
-   Evitar duplicados: ❌ 0
-   Limpiar formulario: ❌ 0
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **3 / 10**

------------------------------------------------------------------------
