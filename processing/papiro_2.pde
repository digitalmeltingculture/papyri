/* @pjs preload="img/elements/papiro_2_o.png","img/elements/papiro-arrotolato.png"; */

PImage papiro, arrotolato;

void setup() {
  float multiplier = 1.25;
  size(1024 * multiplier, 768 * multiplier);
  noStroke();
  colorMode(RGB, height, height, height);
  rectMode(CENTER);
  
  // Load images
  papiro = loadImage("img/elements/papiro_2_o.png");
  arrotolato = loadImage("img/elements/papiro-arrotolato.png");
}

void draw() {
  bgColor = #191919;
  background(bgColor);
  
  int padding = 50;
  float papiroWidth = width - (padding * 2),
        papiroHeight = (height * 2) / 3;
  
  image(papiro, padding, (height - papiroHeight) / 2, papiroWidth, papiroHeight);

  float startPosition = map(mouseX, padding, width - padding, 0, height);
  
  fill(bgColor);
  rect((width / 2) + startPosition + padding, height / 2, papiroWidth, papiroHeight);
  
  image(arrotolato, startPosition + (padding * 2), (height - papiroHeight) / 2, 50, papiroHeight);
}