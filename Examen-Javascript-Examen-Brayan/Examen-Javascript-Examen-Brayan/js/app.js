// === Elementos del DOM ===
// TODO: Crear constantes para manejar tus elementos del DOM
const mensaje = document.getElementById('mensaje');
const formulario = document.getElementById('formGasto');
const lista = document.getElementById('listaGastos');

// Campos del formulario
// TODO: Crear constantes para manejar tus elementos del formulario
const concepto = document.getElementById('concepto');
const fecha = document.getElementById('fecha');
const importe = document.getElementById('importe');
const categoria = document.getElementById('categoria');
const total = document.getElementById('total');
const botonGuardar = formulario.querySelector('button[type="submit"]');

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
    this.gastos.push(gasto);
    // TODO: Ordenar por fecha
    this.ordenar();
    // TODO: Mostrar lista y actualizar total
    this.mostrar();
    this.calcularTotal();
    // TODO: Mostrar mensaje de éxito
    this.mostrarMensaje('Gasto agregado correctamente.', true);
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    this.gastos = this.gastos.filter(gasto => gasto.id !== id)
    // TODO: Mostrar lista actualizada
    this.mostrar();
    // TODO: Actualizar total y mostrar mensaje
    this.calcularTotal();
    this.mostrarMensaje('Gasto eliminado correctamente.', true);

  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    const gasto = this.gastos.find(i => i.id === id);
    if (!gasto) return;
    // TODO: Rellenar el formulario con sus datos
    concepto.value = gasto.concepto;
    fecha.value = gasto.fecha;
    importe.value = gasto.importe;
    categoria.value = gasto.categoria;

    this.gastoEditado = gasto;
    // TODO: Cambiar texto del botón a "Guardar cambios"
    botonGuardar.textContent = 'Guardar cambios';
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    if (!this.gastoEditado) return;

    this.gastoEditado.concepto = concepto.value.trim();
    this.gastoEditado.fecha = fecha.value;
    this.gastoEditado.importe = importe.value.trim();
    this.gastoEditado.categoria = categoria.value;
    // TODO: Reordenar, mostrar y recalcular total
    this.ordenar();
    this.mostrar();
    this.calcularTotal();
    // TODO: Mostrar mensaje de éxito
    this.mostrarMensaje('Cambio efectuado con exito.', true);
    // TODO: Resetear formulario y volver a modo "nuevo"
    this.gastoEditado = null;
    formulario.reset();
    botonGuardar.textContent = 'Guardar';
  }

  // --- Calcular total gastado ---
  calcularTotal() {
    // TODO: Sumar los importes del array
    const gastado = this.gastos.reduce((total, gasto) => total + gasto.importe, 0);
    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera
    this.total = this.total - gastado;
  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
    this.gastos.sort((a, b) => {
      new Date(`${a.fecha}`) - new Date(`${b.fecha}`)
    });
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
formulario.addEventListener('submit', e => {
  e.preventDefault();

  // --- Validaciones ---
  // TODO: Comprobar campos vacíos. Ningún campo del formulario puede quedar vacío.
  if (!concepto.value.trim() || !fecha.value || !importe.value || !categoria.value) {
    gestor.mostrarMensaje('No puedes tener campos vacios.', false);
    return;
  }
  // TODO: Validar que la fecha no sea futura
  const fechaFutura = new Date(`${fecha.value}`);
  if (fechaFutura >= new Date()) {
    gestor.mostrarMensaje('La fecha no puede ser futura.', false);
    return;
  }

  if (importe.value < 0 || importe.value >5000) {
    gestor.mostrarMensaje('El importe tiene que ser mayor a 0 y menor a 5000€.', false);
    return;
  }
  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir
  if (gestor.gastoEditado) {
    gestor.editar();
    return;
  }
  // --- Crear objeto gasto ---
  const nuevoGasto = {
    id: Date.now(),
    // TODO: Añadir propiedades: concepto, fecha, importe, categoria
    concepto: concepto.value.trim(),
    fecha: fecha.value,
    importe: Number(importe.value.trim()),
    categoria: categoria.value
  };
  
  // TODO: Llamar a gestor.agregar(nuevoGasto)
  gestor.agregar(nuevoGasto);
  // TODO: Resetear formulario
  formulario.reset();
});
