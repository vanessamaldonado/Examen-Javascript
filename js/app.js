// === Elementos del DOM ===
 // TODO: Crear constantes para manejar tus elementos del DOM

// Campos del formulario
 // TODO: Crear constantes para manejar tus elementos del formulario

// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    // TODO: Crear array para guardar los gastos
    // TODO: Variable para gasto en edición
  }

  // --- Agregar gasto ---
  agregar(gasto) {
    // TODO: Añadir gasto al array
    // TODO: Ordenar por fecha
    // TODO: Mostrar lista y actualizar total
    // TODO: Mostrar mensaje de éxito
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    // TODO: Mostrar lista actualizada
    // TODO: Actualizar total y mostrar mensaje
  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    // TODO: Rellenar el formulario con sus datos
    // TODO: Cambiar texto del botón a "Guardar cambios"
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    // TODO: Reordenar, mostrar y recalcular total
    // TODO: Mostrar mensaje de éxito
    // TODO: Resetear formulario y volver a modo "nuevo"
  }

  // --- Calcular total gastado ---
  calcularTotal() {
    // TODO: Sumar los importes del array
    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera
  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
  }

  // --- Mostrar lista de gastos ---
   mostrar() {
    lista.innerHTML = '';
    if (this.gastos.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No hay gastos registrados';
      lista.appendChild(li);
      return;
    }

    this.gastos.forEach(g => {
      const li = document.createElement('li');
      if (g.categoria) li.dataset.categoria = g.categoria;

      li.innerHTML = `
        <div class="fila-top">
          <span class="concepto">${g.concepto}</span>
          <span class="importe">${g.importe.toFixed(2)} €</span>
        </div>
        <div class="meta">
          <span>${g.fecha}</span>
          ${g.categoria ? ` · <span>${g.categoria}</span>` : ''}
        </div>
        <div class="acciones">
          <button class="editar">Editar</button>
          <button class="eliminar">Eliminar</button>
        </div>
      `;

      li.querySelector('.editar').addEventListener('click', () => this.editar(g.id));
      li.querySelector('.eliminar').addEventListener('click', () => this.eliminar(g.id));

      lista.appendChild(li);
    });
  }

  // --- Mostrar mensajes ---
  mostrarMensaje(texto, exito) {
    mensaje.textContent = texto;
    mensaje.style.display = 'block';
    mensaje.className = exito ? 'ok' : 'error';
    setTimeout(() => (mensaje.style.display = 'none'), 2000);
  }
}

// === Instancia ===
const gestor = new GestorGastos();

// === Evento del formulario ===
form.addEventListener('submit', e => {
  e.preventDefault();

  // --- Validaciones ---
  // TODO: Comprobar campos vacíos. Ningún campo del formulario puede quedar vacío.
  // TODO: Validar que la fecha no sea futura

  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir

  // --- Crear objeto gasto ---
  const nuevoGasto = {
    id: Date.now(),
    // TODO: Añadir propiedades: concepto, fecha, importe, categoria
  };

  // TODO: Llamar a gestor.agregar(nuevoGasto)
  // TODO: Resetear formulario
});
