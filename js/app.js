// === Elementos del DOM ===
// TODO: Crear constantes para manejar tus elementos del DOM
const form = document.getElementById("formGasto");
const resumen = document.getElementById("resumen");
const lista = document.getElementById("listaGastos");
const total = document.getElementById("total");

const conceptoInput = document.getElementById("concepto");
const fecha = document.getElementById("fecha");
const importeInput = document.getElementById("importe");
const categoriaInput = document.getElementById("categoria");
const boton = form.querySelector('button[type="submit"]');

// Campos del formulario
// TODO: Crear constantes para manejar tus elementos del formulario

// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    // TODO: Crear array para guardar los gastos
    this.gastos = [];
    // TODO: Variable para gasto en edición
    this.gastosEditando = null;
     let cTotal = 0;
  }

  // --- Agregar gasto ---
  agregar(gasto) {
    // TODO: Añadir gasto al array
    this.gastos.push(gasto);
    // TODO: Ordenar por fecha
    this.ordenar();
    // TODO: Mostrar lista y actualizar total
    this.mostrar();
    // TODO: Mostrar mensaje de éxito
    this.mostrarMensaje("gasto agregado correctemente", true);
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    this.gastos = this.gastos.filter((p) => p.id !== id);
    // TODO: Mostrar lista actualizada
    this.mostrar();
    // TODO: Actualizar total y mostrar mensaje
    this.mostrarMensaje("Gasto eliminado", true);
  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    const p = this.gastos.find((p) => p.id === id);
    if (!p) return;
    // TODO: Rellenar el formulario con sus datos
    conceptoInput.value = p.concepto;
    fecha.value = p.fecha;
    importeInput.value = p.importe;
    categoriaInput = p.categoria;

    // TODO: Cambiar texto del botón a "Guardar cambios"
    this.gastosEditando = p;
    boton.textContent = "Guardar cambios";
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    if (!this.gastosEditando) return;
    this.gastosEditando.categoria = categoriaInput.value;
    this.gastosEditando.concepto = conceptoInput.value.trim();
    this.gastosEditando.importe = importeInput.value.trim();
    this.gastosEditando.fecha = fecha.value;

    // TODO: Reordenar, mostrar y recalcular total
    this.ordenar();
    this.mostrar();
    this.calcularTotal();

    // TODO: Mostrar mensaje de éxito
    this.mostrarMensaje("Gasto actualizado", true);
    // TODO: Resetear formulario y volver a modo "nuevo"
    this.gastosEditando=null;
    form.reset();
  }

  // --- Calcular total gastado ---
  
  calcularTotal() {
    // TODO: Sumar los importes del array

for (const gasto of this.gastos.importe.value) {
  cTotal=cTotal+gasto;
}





total.innerHTML= cTotal;
    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera

  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
    this.gastos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
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
       <span class="importe">${g.importe.toFixed(2)} €</span>
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
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // --- Validaciones ---
  // TODO: Comprobar campos vacíos. Ningún campo del formulario puede quedar vacío.
  if (!conceptoInput.value.trim() || !fecha.value || !importeInput.value.trim() || !categoriaInput.value ) {

    gestor.mostrarMensaje("Todos los campos deben estar completos",false)
    return;
    
  }
  // TODO: Validar que la fecha no sea futura.

  if (new Date(fecha.value)> Date.now()) {
    
    gestor.mostrarMensaje("Fecha no valida", false)
  }

  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir
if(gestor.gastosEditando){

gestor.editar()
}
  // --- Crear objeto gasto ---
  const nuevoGasto = {
    id: Date.now(),
    concepto: conceptoInput.value.trim(),
    fecha: fecha.value,
    importe: parseFloat(importeInput.value),
    categoria: categoriaInput.value,
    // TODO: Añadir propiedades: concepto, fecha, importe, categoria
  };

  // TODO: Llamar a gestor.agregar(nuevoGasto)
  gestor.agregar(nuevoGasto);
  // TODO: Resetear formulario
  form.reset();
  categoriaInput.focus();
});
