// === Elementos del DOM ===
// TODO: Crear constantes para manejar tus elementos del DOM
const form = document.getElementById("formGasto");
const mensaje = document.getElementById("mensaje");
const conceptoInput = document.getElementById("concepto");
const fechaInput = document.getElementById("fecha");
const importeInput = document.getElementById("importe");
const categoriaSelect = document.getElementById("categoria");
const lista = document.getElementById("listaGastos");

const boton = form.querySelector('button[type="submit"]');
const total = document.getElementById("total");
const resumen = document.getElementById("resumen");

// Campos del formulario
// TODO: Crear constantes para manejar tus elementos del formulario

// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    // TODO: Crear array para guardar los gastos
    this.gastos = [];

    // TODO: Variable para gasto en edición
    this.gastoEditado = null;
  }

  // --- Agregar gasto ---
  agregar(gasto) {
    // TODO: Añadir gasto al array
    // TODO: Ordenar por fecha
    // TODO: Mostrar lista y actualizar total
    // TODO: Mostrar mensaje de éxito

    this.gastos.push(gasto);
    this.ordenar();
    this.calcularTotal();
    this.mostrar();
    this.mostrarMensaje("Se han añadido los gastos correctamente", true);
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    // TODO: Mostrar lista actualizada
    // TODO: Actualizar total y mostrar mensaje

    this.gastos = this.gastos.filter((g) => g.id !== id);
    this.mostrar();
    this.calcularTotal();
    this.mostrarMensaje("Se ha eliminado el gasto correctamente", true);
  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    // TODO: Rellenar el formulario con sus datos
    // TODO: Cambiar texto del botón a "Guardar cambios"

    const gasto = this.gastos.find((g) => g.id === id);
    if (!gasto) {
      return;
    }

    conceptoInput.value = gasto.concepto;
    fechaInput.value = gasto.fecha;
    importeInput.value = gasto.importe;
    categoriaSelect.value = gasto.categoria;
    boton.textContent = "Guardar cambios";
    this.gastoEditado = gasto;
  }
  limpiar() {
    conceptoInput.value = "";
    fechaInput.value = "";
    importeInput.value = "";
    categoriaSelect.value = "";
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    // TODO: Reordenar, mostrar y recalcular total
    // TODO: Mostrar mensaje de éxito
    // TODO: Resetear formulario y volver a modo "nuevo"

    this.gastoEditado.concepto = conceptoInput.value;
    this.gastoEditado.fecha = fechaInput.value;
    this.gastoEditado.importe = importeInput.value;
    this.gastoEditado.categoria = categoriaSelect.value;

    this.ordenar();
    this.mostrar();
    this.calcularTotal();
    this.limpiar();
    this.mostrarMensaje("Se han guardado los cambios correctamente", true);
    boton.textContent = "Guardar";
    this.gastoEditado = null;
  }

  // --- Calcular total gastado ---
  calcularTotal() {
    let sum = 0;
    // TODO: Sumar los importes del array
    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera
    this.gastos.forEach((g) => {
      sum = sum + Number(g.importe);
    });

    total.textContent = sum;
  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
    gestor.gastos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
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
          <span class="importe">${Number(g.importe).toFixed(2)} €</span>
          
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
  // TODO: Validar que la fecha no sea futura

  if (
    !conceptoInput.value ||
    !fechaInput.value ||
    !importeInput.value ||
    !categoriaSelect.value
  ) {
    gestor.mostrarMensaje("No se pueden dejar campos vacíos", false);
    return;
  }

  const fechaActual = new Date();
  const fechaUsuario = new Date(`${fechaInput.value}`);

  if (fechaActual > fechaUsuario) {
    gestor.mostrarMensaje("La fecha no puede ser pasada", false);
    return;
  }

  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir

  if (gestor.gastoEditado) {
    gestor.guardarEdicion();
  } else {
    // --- Crear objeto gasto ---
    const nuevoGasto = {
      id: Date.now(),
      concepto: conceptoInput.value.trim(),
      fecha: fechaInput.value,
      importe: importeInput.value,
      categoria: categoriaSelect.value,
      // TODO: Añadir propiedades: concepto, fecha, importe, categoria
    };

    // TODO: Llamar a gestor.agregar(nuevoGasto)
    // TODO: Resetear formulario
    gestor.agregar(nuevoGasto);
    form.reset();
  }
});
