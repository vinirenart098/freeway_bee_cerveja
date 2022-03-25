//código da pontuação
let meusPontos = 0;

function marcaPonto(){
  if (yAtor < 97){
    meusPontos += 1;
    SomScore.play();
    voltaAtorPinicial();
  }
}

function incluiPontos(){
  fill(255,255,0);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 50, 130);
}

//código do ator

let xAtor = 100;
let yAtor = 850;
let colisao = false

//código da loja
let xloja = 100;
let yloja = -45;

//código do jardim
let xJardim = 250;
let yJardim = 5;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 50, 50);
}

function mostraLoja(){
  image(imagemDaloja, xloja, yloja, 150, 150);
}

function mostraJardim(){
  image(imagemDoJardim, xJardim, yJardim, 300, 100);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSemover()){
        yAtor += 3;
    }
  }
}
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPinicial();
      somDoSplash.play();
      if (PontosMaiorZero()){
        meusPontos -= 1;
      }  
    }
  }
}

function voltaAtorPinicial(){
  yAtor = 855;
}

function PontosMaiorZero(){
  return meusPontos > 0
}

function podeSemover(){
  return yAtor < 850;
}