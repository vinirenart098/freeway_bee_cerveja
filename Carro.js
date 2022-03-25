//Código geral

let yCarros = [200, 310, 430, 550, 665, 765]
let xCarros = [600, 600, 600, 600, 600, 600]
let velocidadeCarros = [3.5, 4.5, 9, 6, 7, 2.5]
let comprimentoCarro = 90;
let alturaCarro = 60;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let = i = 0; i < imagemCarros.length; i = i + 1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function loopcarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  if (passatela(xCarros[i])){
  xCarros[i] = 1000;
    }
  }
}

function passatela(xCarros){
  return xCarros < -250
}



