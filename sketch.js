


function setup() {
  createCanvas(1000, 900);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraLoja();
  mostraJardim();
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  loopcarro();
  verificaColisao();
  incluiPontos();
  marcaPonto()
}
