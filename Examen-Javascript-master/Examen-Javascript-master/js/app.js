// === Elementos del DOM ===
 // TODO: Crear constantes para manejar tus elementos del DOM

const form = document.getElementById("formGasto");
const lista = document.getElementById("listaGastos");
const mensaje = document.getElementById("mensaje");
const total = document.getElementById("total");

// Campos del formulario
 // TODO: Crear constantes para manejar tus elementos del formulario

const concepto = document.getElementById("concepto");
const fecha = document.getElementById("fecha");
const importe = document.getElementById("importe");
const categoria = document.getElementById("categoria");

const botonGuardar = form.querySelector('button[type="submit"]');
const botonLimpiarTodo = document.querySelector('button[type="button"]');

// === Clase GestorGastos ===
class GestorGastos {
  constructor() {
    // TODO: Crear array para guardar los gastos
    // TODO: Variable para gasto en edición
      this.gastos =[];
      this.gastoEditando = null;
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
    this.mostrarMensaje('Elemento agregado correctamente', true);
  }

  // --- Eliminar gasto ---
  eliminar(id) {
    // TODO: Filtrar el array para eliminar el gasto
    // TODO: Mostrar lista actualizada
    // TODO: Actualizar total y mostrar mensaje
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.mostrar();
    this.mostrarMensaje('Elemento eliminado correctamente', true);

  }

  // --- Editar gasto ---
  editar(id) {
    // TODO: Buscar gasto con ese id
    // TODO: Rellenar el formulario con sus datos
    // TODO: Cambiar texto del botón a "Guardar cambios"
    const gasto = this.gastos.find(i => i.id === id);
    if (!gasto) return;

    concepto.value = gasto.concepto;
    fecha.value = gasto.fecha;
    importe.value = gasto.importe;
    categoria.value = gasto.categoria;

    this.gastoEditando = gasto;
    botonGuardar.textContent = 'Guardar cambios';

  }

  // --- Guardar cambios ---
  guardarEdicion() {
    // TODO: Actualizar los datos del gasto editado
    // TODO: Reordenar, mostrar y recalcular total
    // TODO: Mostrar mensaje de éxito
    // TODO: Resetear formulario y volver a modo "nuevo"
    if (!this.gastoEditando) return;

    this.gastoEditando.concepto = concepto.value.trim();
    this.gastoEditando.fecha = fecha.value;
    this.gastoEditando.importe = Number(importe.value);
    this.gastoEditando.categoria = categoria.value;

    this.ordenar();
    this.mostrar();
    this.mostrarMensaje('Elemento guardado correctamente', true);

    this.gastoEditando = null;
    form.reset();
    botonGuardar.textContent = 'Guardar';

  }

  // --- Calcular total gastado ---
  calcularTotal() {
    // TODO: Sumar los importes del array
    // TODO: Mostrar el total en pantalla con 2 decimales como máximo si hubiera
    let gastado = 0;

    // Recorre todos los gastos y suma sus montos
    for (const gasto of this.gastos) {
        gastado += gasto.amount;
    }

    total.innerHTML=`${gastado}`;

  }

  // --- Ordenar por fecha ---
  ordenar() {
    // TODO: Ordenar el array por fecha del gasto más reciente
    this.gastos.sort((a, b) => new Date(`${a.fecha}`) - new Date(`${b.fecha}`));

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

function limpiarTodo() {
    
  }

botonLimpiarTodo.addEventListener("click", limpiarTodo());


// === Instancia ===
const gestor = new GestorGastos();
document.addEventListener('DOMContentLoaded', () => gestor.mostrar());

// === Evento del formulario ===
form.addEventListener('submit', e => {
  e.preventDefault();

  // --- Validaciones ---
  // TODO: Comprobar campos vacíos. Ningún campo del formulario puede quedar vacío.
  // TODO: Validar que la fecha no sea futura

      if (!concepto.value.trim() || !fecha.value || !importe.value || !categoria.value) {
        gestor.mostrarMensaje('Por favor, completa todos los campos', false);
    }

  // --- Si se está editando ---
  // TODO: Llamar a edicion y salir
      if (gestor.gastoEditando) {
        gestor.guardarEdicion();    
    } else {
        // --- Crear objeto gasto ---
        
        const nuevoGasto = {
          // TODO: Añadir propiedades: concepto, fecha, importe, categoria
            id: Date.now(),
            concepto: concepto.value.trim(),
            fecha: fecha.value,
            importe: Number(importe.value),
            categoria: categoria.value
        };
        // TODO: Llamar a gestor.agregar(nuevoGasto)
        // TODO: Resetear formulario
        gestor.agregar(nuevoGasto);
        form.reset();
    }

    concepto.focus();
});
