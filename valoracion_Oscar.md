# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Estructura clara y legible.

### Problemas encontrados

- **Calcular total:** usa gasto.amount que no existe; además importe está guardado como string → no se suma correctamente. Total no se muestra en pantalla.
- **Ordenación por fecha:** implementada de más antiguo a más reciente, mientras que el enunciado pide más reciente primero.
- **Creación de gasto duplicado:** en nuevoGasto se repite la propiedad concepto dos veces y falta categoria en el objeto final.
- **Validación de fecha futura:** no implementada correctamente.
- **En el submit**, if(this.gastoEnEdicion) usa this fuera de clase → no funciona.
- **importe almacenado como string** → problemas en cálculos y al mostrar total.


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
  Editar gastos               ❌ No funciona correctamente añade uno nuevo
  Eliminar un gasto           ✔ Funciona
  Calcular total              ❌ No funciona, bien calculado pero no se muestra en pantalla
  Validación campos vacíos    ✔ Correcto
  Validar fecha futura        ❌ No funciona permite añadir gasto futuro
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
-   Ordenar: ✔ → 1 pt\ Aunque ordena al revés de como se pidió
-   Total gastado: ❌ → 0.5 pt Bien calculado pero no se muestra en pantalla

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **3.5 / 10**

------------------------------------------------------------------------