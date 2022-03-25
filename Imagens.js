//Imagens do jogo

let imagemDaEstrada;
let imagemDaloja;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro4;
let imagemCarro5;

//sons

let somDaTrilha
let somDoSplash
let SomScore

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemDoJardim = loadImage("Imagens/Jardim.png")
  imagemDaloja = loadImage("Imagens/Loja.png")
  imagemDoAtor = loadImage("Imagens/ator-1.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarro4 = loadImage("Imagens/carro-4.png")
  imagemCarro5 = loadImage("Imagens/carro-5.png")
  imagemCarro6 = loadImage("Imagens/carro-6.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  somDaTrilha = loadSound("Sons/trilha.mp3")
  somDoSplash = loadSound("Sons/splash.mp3")
  SomScore = loadSound("Sons/score.mp3")
}
