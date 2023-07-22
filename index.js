
const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;


//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.
let veces=0;
//EJEMPLO ESTRUCTURA DE COMPARACIÓN
function ComparaHabilidad(habilidadACompararJugador1,habilidadACompararJugador2){
    if (habilidadACompararJugador1 > habilidadACompararJugador2) {
        contadorPuntosJug1++;
      } 
      if(habilidadACompararJugador1 < habilidadACompararJugador2){
        contadorPuntosJug2++
      }
      if(habilidadACompararJugador1==habilidadACompararJugador2){
        contadorPuntosJug1++;
        contadorPuntosJug2++
      }
      veces++;
}

//COMPARACIÓN POR VELOCIDAD:
ComparaHabilidad(jugadorUno.habilidades.velocidad,jugadorDos.habilidades.velocidad);

//COMPARACIÓN POR NIVEL DE VIDA:
ComparaHabilidad(jugadorUno.habilidades.vida,jugadorDos.habilidades.vida);

//COMPARACIÓN POR MAGIA:
ComparaHabilidad(jugadorUno.habilidades.magia,jugadorDos.habilidades.magia);
//COMPARACIÓN POR PODER DE ATAQUE
ComparaHabilidad(jugadorUno.habilidades.ataque,jugadorDos.habilidades.ataque);

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
ComparaHabilidad(jugadorUno.articulos.length,jugadorDos.articulos.length)

//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

 var resultado = {
  [jugadorUno.nombre]: contadorPuntosJug1,
  [jugadorDos.nombre]: contadorPuntosJug2,
  ganador: contadorPuntosJug1>contadorPuntosJug2?jugadorUno.nombre:jugadorDos.nombre
 }
 console.log(resultado)

