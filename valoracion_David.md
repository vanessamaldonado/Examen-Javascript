# Evaluación:
## 1. Implementación del Código

### Puntos positivos

-   Declaras correctamente los elementos del DOM.
-   Creas el array de gastos y variable de edición.
-   El códido de las funciones agregar, editar y eliminar de la clase gestora estan implementados bien.
-   Utilizas correctamente métodos como find, filter, sort y reduce.
-   Estructura clara y legible.

### Problemas encontrados

- **Cálculo de total gastado:** Usa expense.amount, pero los objetos gasto no tienen la propiedad amount (se llama importe). Esto provocará NaN o errores.No actualiza el total en el DOM.
- **Importe:** No se convierte a número al guardar o sumar (importe.value.trim() mantiene string).
- **Ordenación por fecha:** hace new Date(a.fecha) - new Date(b.fecha); funciona pero la resta no devuelve orden correcto de fechas descendente (más reciente primero).
- **Método remaining y this.remaining** no se utiliza correctamente y parece confuso, no aporta valor funcional.

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
-   Editar: ✔ → 1 pt\
-   Eliminar: ✔ → 1 pt\
-   Ordenar: ✔ → 1 pt\ Aunque ordena al revés de como se pidió
-   Total gastado: ❌ → 0 pt\

### Extras (5 pts)

-   Validación importe regex: ❌ 0\
-   Evitar duplicados: ❌ 0\
-   Limpiar formulario: ❌ 0\
-   Eliminar todos + confirmación: ❌ 0

------------------------------------------------------------------------

## Nota Final Estimada: **4 / 10**

------------------------------------------------------------------------