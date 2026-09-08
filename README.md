# 🎓 ¿Quién Quiere Ser Auxiliar Veterinario?

Juego de trivia interactivo de opción múltiple, creado como herramienta didáctica para repasar las materias del técnico en **Auxiliar Veterinario**.

🌐 **Juega aquí:** https://gissellcardenas1.github.io/Quien-quiere-ser-auxiliar-veterinario-/
🔗 **Repositorio:** [Quien-quiere-ser-auxiliar-veterinario-](https://github.com/GissellCardenas1/Quien-quiere-ser-auxiliar-veterinario-)

## 📖 Motivación

Este proyecto nace de la necesidad de encontrar una forma **didáctica** de estudiar las materias y apuntes del técnico en Auxiliar Veterinario, en lugar de pasar horas memorizando temarios. Las preguntas fueron construidas a partir de mis propios apuntes de clase.

En ese momento no tenía conocimientos de programación: este proyecto se construyó con mucha ayuda de IA y muchísimo tiempo invertido, aprendiendo en el camino. Aunque ya terminé mis estudios, el proyecto sigue en construcción para que no quede en el olvido — y lo compartí públicamente para que también pueda ayudar a otras personas que estén estudiando lo mismo.

## 🎮 ¿Cómo se juega?

Al entrar, se muestra una pantalla de configuración donde el jugador puede personalizar la partida antes de comenzar:

- **Nombre del jugador** — se usa para registrar el resultado en el apartado de **mejores puntajes**
- **Materia(s)** — se puede jugar con una sola materia o con varias combinadas
- **Dificultad** — Fácil, Intermedio, Difícil o Avanzado
- **Cantidad de preguntas** — por ejemplo, 10 preguntas por partida

Con la configuración lista, se presiona **¡Comenzar!** para iniciar el juego.

El juego funciona como un **trivia de opción múltiple** — no imita el juego real de "¿Quién quiere ser millonario?" (no tiene niveles progresivos, dinero ni comodines); solo toma el formato de pregunta-respuesta como inspiración. Reglas del juego:

- ⏱️ **30 segundos** por pregunta.
- ❤️ Sistema de **vidas**: se pierden al fallar.
- 🖼️ Algunas preguntas incluyen **imágenes** como apoyo visual.
- 🔊 **Efectos de sonido** que refuerzan la experiencia: respuesta correcta, respuesta incorrecta, partida completada y partida perdida.
- 🎓 Al finalizar la partida obtienes **conocimiento repasado** y tu puntaje queda registrado en el **ranking de mejores puntajes**.

## 📚 Materias disponibles

El proyecto cubre 13 materias del técnico en Auxiliar Veterinario, cada una con **50 preguntas de opción múltiple por nivel de dificultad**, para un total de **200 preguntas por materia**:

1. Anatomía
2. Asistencia en administración de medicamentos
3. Asistencia en toma de muestras
4. Bienestar animal
5. Estética
6. Etiología
7. Historia clínica
8. Primeros auxilios
9. Procedimientos clínicos - instrumental quirúrgico
10. Razas
11. Sanidad
12. Semiología
13. Terminología

## ✨ Características

- 🧠 Más de 2,600 preguntas basadas en apuntes reales de clase (13 materias × 200 preguntas), no genéricas.
- 🖼️ Preguntas con imágenes como apoyo visual.
- 📊 Ranking de mejores puntajes por nombre de jugador.
- 📚 Filtros de configuración: una o varias materias, dificultad (Fácil, Intermedio, Difícil, Avanzado) y cantidad de preguntas por partida.
- ⏱️ 30 segundos por pregunta y sistema de vidas.
- 🔊 Sonido inmersivo (`correcto.wav`, `incorrecto.wav`, `completo.wav`, `pierde.wav`).
- 🎨 Diseño oscuro con bordes en neón turquesa/cian, creado enteramente por la autora, sin plantillas externas.
- 🌍 100% web: no requiere instalación para jugar desde el navegador.

## 🚀 Cómo jugar

### Opción 1: En línea (recomendado)

Solo entra a: https://gissellcardenas1.github.io/Quien-quiere-ser-auxiliar-veterinario-/

No necesitas instalar nada.

### Opción 2: Localmente

1. Clona el repositorio:

```bash
git clone https://github.com/GissellCardenas1/Quien-quiere-ser-auxiliar-veterinario-.git
cd Quien-quiere-ser-auxiliar-veterinario-
```

2. Abre el archivo `index.html` directamente en tu navegador,

   **o** levanta un servidor local (recomendado para que el audio y los scripts carguen correctamente):

```bash
# Con Python
python -m http.server 8000
```

   Luego abre `http://localhost:8000` en tu navegador.

## 🧩 Tecnologías utilizadas

**Archivos web:**
| Archivo | Descripción |
|---|---|
| `index.html` | Estructura y contenido de la página |
| `style.css` | Hoja de estilos: apariencia visual y maquetación |
| `script.js` | Lógica del juego e interactividad |

**Archivos de audio (`.wav`):**
| Archivo | Uso |
|---|---|
| `correcto.wav` | Respuesta correcta |
| `incorrecto.wav` | Respuesta incorrecta |
| `completo.wav` | Juego/nivel completado |
| `pierde.wav` | Fin del juego / derrota |

## 📁 Estructura del proyecto

```
Quien-quiere-ser-auxiliar-veterinario-/
├── index.html
├── style.css
├── script.js
├── completo.wav
├── correcto.wav
├── incorrecto.wav
├── pierde.wav
└── README.md
```

## 🗺️ Posibles mejoras futuras

- [ ] Modo de repaso (ver respuestas correctas al final de la partida)
- [ ] Persistencia del ranking de mejores puntajes entre sesiones/dispositivos
- [ ] Versión responsive optimizada para móvil
- [ ] Estadísticas por materia (aciertos/errores) para identificar temas débiles

## 🙌 Agradecimientos

Este proyecto fue posible gracias al acompañamiento de herramientas de IA durante el aprendizaje de programación desde cero, y a los apuntes tomados durante el técnico en Auxiliar Veterinario.

## 📄 Licencia

Este proyecto se distribuye con fines educativos. 

---

*Un proyecto hecho para estudiar mejor — y para que otros futuros auxiliares veterinarios también puedan aprovecharlo.*
