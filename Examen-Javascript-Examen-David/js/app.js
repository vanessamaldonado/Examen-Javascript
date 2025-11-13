// === Elementos del DOM ===
// TODO: Crear constantes para manejar tus elementos del DOM
const mensaje = document.getElementById("mensaje");
const formGasto = document.getElementById("formGasto");
const resumen = document.getElementById("resumen");
const total = document.getElementById("total");
const lista = document.getElementById("listaGastos");

// Campos del formulario
// TODO: Crear constantes para manejar tus elementos del formulario
const concepto = document.getElementById("concepto");
const fecha = document.getElementById("fecha");
const importe = document.getElementById("importe");
const categoria = document.getElementById("categoria");
const botonGuardar = formGasto.querySelector('button[type="submit"]');
// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    // TODO: Crear array para guardar los gastos
    // TODO: Variable para gasto en edición
    this.gastos = [];
    this.gastoEditado = null;
    this.remaining= Number(importe);
    this.mostrar();
  }

  // --- Agregar gasto ---
  agregar(gasto) {
    // TODO: Añadir gasto al array
    // TODO: Ordenar por fecha
    // TODO: Mostrar lista y actualizar total
    // TODO: Mostrar mensaje de éxito
    this.gastos.push(gasto);
    this.ordenar();
    this.mostrar();
    this.mostrarMensaje("Añadido elemento correctamente", true);
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    // TODO: Mostrar lista actualizada
    // TODO: Actualizar total y mostrar mensaje
    this.gastos=this.gastos.filter(item => item.id !== id);
    this.mostrar();
    this.mostrarMensaje("Elemento eliminado",true); 
  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    // TODO: Rellenar el formulario con sus datos
    // TODO: Cambiar texto del botón a "Guardar cambios"
    const item = this.gastos.find(i => i.id === id);
    if(!item) return;

    concepto.value=item.concepto;
    fecha.value=item.fecha;
    importe.value=item.importe;
    categoria.value=item.categoria;

    this.gastoEditado=item;
    botonGuardar.textContent="Guardar Cambios";
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    // TODO: Reordenar, mostrar y recalcular total
    // TODO: Mostrar mensaje de éxito
    // TODO: Resetear formulario y volver a modo "nuevo"
    if(!this.gastoEditado) return;
    this.gastoEditado.concepto=concepto.value.trim();
    this.gastoEditado.fecha=fecha.value.trim();
    this.gastoEditado.importe=importe.value.trim(); /// Tocaría ser Number perdón por la vista del trim Vanesa
    this.gastoEditado.categoria=categoria.value.trim();

    this.ordenar();
    this.mostrar();
    this.calcularTotal();
    this.mostrarMensaje("Elemento actualizado correctamente",true);
    this.gastoEditado=null;
    formGasto.reset();
    botonGuardar.textContent="Guardar";
  }

  // --- Calcular total gastado ---
  calcularTotal() {
    // TODO: Sumar los importes del array
    let spent = 0;
    for (const expense of this.gastos) {
      spent += expense.amount;
    }
    this.remaining = this.importe - spent;

    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera
  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
    this.gastos.sort((a,b) => new Date(`${a.fecha}`) - new Date(`${b.fecha}` ));
  }

  // --- Mostrar lista de gastos ---
  mostrar() {
    lista.innerHTML = "";
    if (this.gastos.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No hay gastos registrados";
      lista.appendChild(li);
      return;
    }

    this.gastos.forEach((g) => {
      const li = document.createElement("li");
      if (g.categoria) li.dataset.categoria = g.categoria;

      li.innerHTML = `
        <div class="fila-top">
          <span class="concepto">${g.concepto}</span>
          <span class="importe">${g.importe} €</span>
        </div>
        <div class="meta">
          <span>${g.fecha}</span>
          ${g.categoria ? ` · <span>${g.categoria}</span>` : ""}
        </div>
        <div class="acciones">
          <button class="editar">Editar</button>
          <button class="eliminar">Eliminar</button>
        </div>
      `;

      li.querySelector(".editar").addEventListener("click", () =>
        this.editar(g.id)
      );
      li.querySelector(".eliminar").addEventListener("click", () =>
        this.eliminar(g.id)
      );

      lista.appendChild(li);
    });
  }

  // --- Mostrar mensajes ---
  mostrarMensaje(texto, exito) {
    mensaje.textContent = texto;
    mensaje.style.display = "block";
    mensaje.className = exito ? "ok" : "error";
    setTimeout(() => (mensaje.style.display = "none"), 2000);
  }
}

// === Instancia ===
const gestor = new GestorGastos();

// === Evento del formulario ===
formGasto.addEventListener("submit", (e) => {
  e.preventDefault();

  // --- Validaciones ---
  // TODO: Comprobar campos vacíos. Ningún campo del formulario puede quedar vacío.
  // TODO: Validar que la fecha no sea futura
  if (
    !concepto.value.trim() ||
    !fecha.value.trim() ||
    !importe.value.trim() ||
    !categoria.value.trim()
  ) {
    gestor.mostrarMensaje("Por favor, complete todos los campos", false);
    return;
  }

  const seleccion = new Date(`${fecha.value}`);
  if (seleccion >= new Date()) {
    gestor.mostrarMensaje("No puedes elegir una fecha futura", false);
    return;
  }

  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir
  if (gestor.gastoEditado) {
    gestor.guardarEdicion();
  } else {
    const nuevoGasto = {
      id: Date.now(),
      // TODO: Añadir propiedades: concepto, fecha, importe, categoria
      concepto: concepto.value.trim(),
      fecha: fecha.value.trim(),
      importe: importe.value.trim(),
      categoria: categoria.value.trim(),
    };
    gestor.agregar(nuevoGasto);
    formGasto.reset();
  }
  concepto.focus();
});
