// === Elementos del DOM ===
 // TODO: Crear constantes para manejar tus elementos del DOM
const form = document.getElementById('formGasto');
const listaGasto = document.getElementById('listaGastos');
// Campos del formulario
const concepto = document.getElementById('concepto');
const fecha = document.getElementById('fecha');
const importe = document.getElementById('importe');
const categoria = document.getElementById('categoria');

const totalGastado = document.getElementById('total');
const botonGuardar = document.querySelector('button[type="submit"]');

// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    this.gastos = [];
    this.editarGasto= null;
  }

  // --- Agregar gasto ---
  agregar(gasto) {
    this.gastos.push(gasto);
    this.ordenar();
    this.mostrar()
    this.calcularTotal();
    this.mostrarMensaje('Gasto añadido.','ok');
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    this.gastos = this.gastos.filter(gasto =>gasto.id !== id);
    this.mostrar()
    this.calcularTotal();
    this.mostrarMensaje('Gasto eliminado.','ok');
  }

  // --- Editar gasto ---
  editar(id) {
    const gasto = this.gastos.find(i => i.id === id);

    console.log(concepto.value);
    
    concepto.value = gasto.concepto;
    fecha.value = gasto.fecha;
    importe.value = gasto.importe;
    categoria.value = gasto.categoria;

    this.editarGasto = gasto;
    botonGuardar.textContent = 'Guardar cambios';
  }

  // --- Guardar cambios ---
  guardarEdicion() {
    if(!this.editarGasto) return;

    this.editarGasto.concepto = concepto.value.trim();
    this.editarGasto.fecha = fecha.value;
    this.editarGasto.importe = Number(importe.value);
    this.editarGasto.categoria = categoria.value.trim();
     
    this.ordenar();
    this.mostrar();
    this.calcularTotal();
    this.mostrarMensaje('Elemento actualizado correctamente', 'ok');

    this.editarGasto = null;
    form.reset();

    botonGuardar.textContent = 'Guardar';
  }

  // --- Calcular total gastado ---
  calcularTotal() {
    const gastado = this.gastos.reduce((total, gasto)=>total + Number(gasto.importe),0);
    totalGastado.innerHTML = gastado;
    console.log(gastado);
  }

  // --- Ordenar por fecha ---
  ordenar() {
    this.gastos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  }

  // --- Mostrar lista de gastos ---
   mostrar() {
    listaGasto.innerHTML = '';
    if (this.gastos.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No hay gastos registrados';
      listaGasto.appendChild(li);
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
      
      listaGasto.appendChild(li);
      gestor.calcularTotal();
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
   if (!concepto.value.trim() || !importe.value.trim() || !fecha.value || !categoria.value) {
    gestor.mostrarMensaje('Por favor, completa todos los campos', false);
    return;
  }
  const seleccion = new Date(fecha.value);
  if (seleccion >= new Date()) {
    gestor.mostrarMensaje('No puedes elegir una fecha pasada', 'error');
    return;
  }

  // --- Si se está editando ---
  if (gestor.editarGasto) {
    gestor.guardarEdicion();
  } else {
    const nuevo = {
      id: Date.now(),
      concepto: concepto.value.trim(),
      fecha: fecha.value,
      importe: Number(importe.value),
      categoria: categoria.value.trim()
    };
    gestor.agregar(nuevo);
    form.reset();
  }
  concepto.focus();
});
