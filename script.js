let todasLasPreguntas = [];
let preguntasFiltradas = [];
let preguntaActual = 0;
let puntaje = 0;
let vidas = 0;
let nombreJugador = "";
let totalPreguntas = 0;

let temporizador;
let tiempoRestante = 0;
let tiempoPorPregunta = 20;

const nombreInput = document.getElementById("nombre");
const categoriaSelect = document.getElementById("categoria");
const nivelSelect = document.getElementById("nivel");
const cantidadSelect = document.getElementById("cantidad");
const selectorDiv = document.querySelector(".selector");
const quizDiv = document.getElementById("quiz");
const preguntaElem = document.getElementById("pregunta");
const opcionesElem = document.getElementById("opciones");
const resultadoDiv = document.getElementById("resultado");
const contadorElem = document.getElementById("contador");
const rankingDiv = document.getElementById("ranking");

const sonidoCorrecto = document.getElementById("sonido-correcto");
const sonidoIncorrecto = document.getElementById("sonido-incorrecto");
const sonidoPierde = document.getElementById("sonido-pierde");
const sonidoCompleto = document.getElementById("sonido-completo");

function iniciarJuego() {
  nombreJugador = nombreInput.value.trim();
  const categoria = categoriaSelect.value;
  const nivel = nivelSelect.value;
  const cantidad = cantidadSelect.value;

  if (!nombreJugador) {
    alert("Por favor, ingresa tu nombre");
    return;
  }

  if (categoria === "Todas") {
    alert("Por favor, selecciona una sola materia para comenzar");
    return;
  }

  const archivo = `preguntas/${categoria.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "_")}.json`;

  fetch(archivo)
    .then(res => res.json())
    .then(data => {
      // Validar que el archivo tenga niveles válidos
      if (!data["facil"] && !data["intermedio"] && !data["dificil"] && !data["avanzado"]) {
        alert(`El archivo de la materia "${categoria}" no tiene preguntas disponibles.`);
        return;
      }

      todasLasPreguntas = [];

      if (nivel === "Todas") {
        for (const dif in data) {
          if (Array.isArray(data[dif])) {
            todasLasPreguntas.push(...data[dif]);
          }
        }
      } else {
        todasLasPreguntas = data[nivel.toLowerCase()] || [];
      }

      preguntasFiltradas = [...todasLasPreguntas].sort(() => Math.random() - 0.5);

      if (cantidad !== "Todas") {
        preguntasFiltradas = preguntasFiltradas.slice(0, parseInt(cantidad));
      }

      totalPreguntas = preguntasFiltradas.length;

      if (totalPreguntas === 0) {
        alert("No hay preguntas disponibles para esta combinación.");
        return;
      }

      if (totalPreguntas === 10) {
        vidas = 1;
        tiempoPorPregunta = 30;
      } else if (totalPreguntas === 20) {
        vidas = 2;
        tiempoPorPregunta = 25;
      } else if (totalPreguntas === 30) {
        vidas = 3;
        tiempoPorPregunta = 20;
      } else if (totalPreguntas === 50) {
        vidas = 3;
        tiempoPorPregunta = 15;
      } else {
        vidas = 5;
        tiempoPorPregunta = 20;
      }

      puntaje = 0;
      preguntaActual = 0;
      selectorDiv.style.display = "none";
      resultadoDiv.style.display = "none";
      quizDiv.style.display = "block";

      mostrarPregunta();
    })
    .catch(err => {
      alert("No se pudo cargar el archivo de preguntas.");
      console.error(err);
    });
}

function mostrarPregunta() {
  clearInterval(temporizador);
  const pregunta = preguntasFiltradas[preguntaActual];
  preguntaElem.innerHTML = ""; // Limpiar contenido

// Mostrar texto
const textoPregunta = document.createElement("p");
textoPregunta.textContent = pregunta.pregunta;
preguntaElem.appendChild(textoPregunta);

// Mostrar imagen si existe
if (pregunta.imagen) {
  const imagen = document.createElement("img");
  imagen.src = pregunta.imagen;
  imagen.alt = "Imagen de la pregunta";
  imagen.style.maxWidth = "300px";
  imagen.style.marginTop = "10px";
  imagen.style.border = "2px solid #00ffe1";
  imagen.style.borderRadius = "8px";
  preguntaElem.appendChild(imagen);
}
  opcionesElem.innerHTML = "";

  contadorElem.textContent = `Pregunta ${preguntaActual + 1}/${totalPreguntas}`;
  document.getElementById("vidas").innerHTML = "❤️".repeat(vidas);
  const progreso = ((preguntaActual) / totalPreguntas) * 100;
  document.getElementById("progreso-barra").style.width = `${progreso}%`;

  document.getElementById("temporizador").textContent = "";

  pregunta.opciones.forEach(opcion => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.className = "opcion-btn";
    boton.onclick = () => verificarRespuesta(opcion, boton);
    opcionesElem.appendChild(boton);
  });

  tiempoRestante = tiempoPorPregunta;
  actualizarTemporizador();
  temporizador = setInterval(() => {
    tiempoRestante--;
    actualizarTemporizador();
    if (tiempoRestante <= 0) {
      clearInterval(temporizador);
      vidas--;
      sonidoIncorrecto.play();
      if (vidas <= 0) {
        sonidoPierde.play();
        setTimeout(() => finalizarJuego(false), 1500);
      } else {
        preguntaActual++;
        setTimeout(() => mostrarPregunta(), 1500);
      }
    }
  }, 1000);
}

function actualizarTemporizador() {
  document.getElementById("temporizador").textContent = `⏱️ Tiempo: ${tiempoRestante}s`;
}

function verificarRespuesta(respuesta, boton) {
  clearInterval(temporizador);
  const pregunta = preguntasFiltradas[preguntaActual];
  const correcta = pregunta.opciones[pregunta.correcta];
  const botones = opcionesElem.querySelectorAll("button");

  botones.forEach(b => {
    b.disabled = true;
    if (b.textContent === correcta) {
      b.classList.add("correcta");
    }
  });

  if (respuesta === correcta) {
    boton.classList.add("bien");
    sonidoCorrecto?.play();
    puntaje++;
  } else {
    boton.classList.add("mal");
    sonidoIncorrecto?.play();
    vidas--;
    if (vidas <= 0) {
      sonidoPierde.play();
      setTimeout(() => finalizarJuego(false), 1500);
      return;
    }
  }

  setTimeout(() => {
    preguntaActual++;
    if (preguntaActual >= totalPreguntas) finalizarJuego(true);
    else mostrarPregunta();
  }, 1500);
}

function finalizarJuego(gano) {
  clearInterval(temporizador);
  quizDiv.style.display = "none";
  resultadoDiv.style.display = "block";
  document.getElementById("progreso-barra").style.width = `100%`;
  document.getElementById("temporizador").textContent = "";

  if (gano) {
    sonidoCompleto.play();
    resultadoDiv.innerHTML = `<h2>¡Felicidades, ${nombreJugador}!</h2><p>Puntaje: ${puntaje} / ${totalPreguntas}</p>`;
  } else {
    resultadoDiv.innerHTML = `<h2>¡Juego terminado!</h2><p>Te quedaste sin vidas.</p><p>Puntaje: ${puntaje} / ${totalPreguntas}</p>`;
  }

  resultadoDiv.innerHTML += '<br><button onclick="volverAJugar()">Volver a jugar</button>';
  guardarRanking();
  mostrarRanking();
}

function volverAJugar() {
  resultadoDiv.style.display = "none";
  selectorDiv.style.display = "block";
}

function guardarRanking() {
  const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
  ranking.push({ nombre: nombreJugador, puntaje });
  ranking.sort((a, b) => b.puntaje - a.puntaje);
  localStorage.setItem("ranking", JSON.stringify(ranking.slice(0, 10)));
}

function mostrarRanking() {
  const ranking = JSON.parse(localStorage.getItem("ranking") || "[]");
  let html = "<h3>TOP 10 PUNTAJES</h3><ol>";
  ranking.forEach(r => {
    html += `<li>${r.nombre}: ${r.puntaje}</li>`;
  });
  html += "</ol>";
  rankingDiv.innerHTML = html;
}