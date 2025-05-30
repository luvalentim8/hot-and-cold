let x;  //criando variavel x
let y;  //criando variavel y

function setup() {
  createCanvas(400, 400);
  x = random(400);  //sorteando numero ate 400
  x = int(x);      //tranformando para numero inteiro
  y = random(400);
  y = int(y);
}

function draw() {
  background("rgb(92,3,70)");   //fundo da tela roxo
  // diamtro 10
  x = x + random(-2, 2);
  y = y + random(-2,2);
  x = constrain(x,0,400);
  y = constrain(y,0,400);
   let distanciaX; //cateto
    let distanciaY; //cateto
    let distancia; //hipotenusa
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
    distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  circle(mouseX, mouseY, distancia);   //circulo com coordenadas 
  //e diametro 10
    
  dist(mouseX,mouseY,x,y);
  
   if(distancia < 120){
      fill("red")
      circle(mouseX, mouseY, distancia) 
   }
   if(distancia < 3) { //se posicaoX do mouse for igual a X
    text("Encontrei!", 200, 200);
    //entao mostrara o texto encontrei
      noLoop();        
  }

   if(distancia > 150){
    fill('blue');
    circle(mouseX,mouseY,distancia)
  }else if(distancia > 100){
    fill('purple');
    circle(mouseX,mouseY,distancia)
  }else if(distancia > 75){
    fill('#FF9800');
    circle(mouseX,mouseY,distancia)
  }else if(distancia > 15){
    fill('red');
    circle(mouseX,mouseY,distancia)
  }
}