var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  
  backgroundImage = loadImage("./assets/planodefundo.png");
  //inserção das imagens dos carros
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  // função chamada para ler o estado do jogo antes de mostrar o formulário aos usuários
 

}

//atualizar o estado para 1 quando ‘playerCount’ = 2 e chamar o método play() 
//quando ‘gameState’ for 1



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
