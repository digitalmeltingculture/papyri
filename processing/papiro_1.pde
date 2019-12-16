/* @pjs preload="img/elements/papiro_1.png","img/elements/papiro-arrotolato_v.png"; */

PImage papiro, arrotolato;

void setup() {
  float multiplier = 1.25;
  size(1024 * multiplier, 768 * multiplier);
  noStroke();
  colorMode(RGB, height, height, height);
  rectMode(CENTER);
  
  // Load images
  papiro = loadImage("img/elements/papiro_1.png");
  arrotolato = loadImage("img/elements/papiro-arrotolato_v.png");
}

void draw() {
  bgColor = #191919;
  background(bgColor);
  
  int padding = 50;
  float papiroWidth = (width * 2) / 3,
        papiroHeight = height - (padding * 2);
  
  image(papiro, (width - papiroWidth) / 2, padding, papiroWidth, papiroHeight);

  float startPosition = padding;

  if(mouseY >= (height - padding))
    startPosition = height - (2 * padding);
  else if(mouseY >= padding)
    startPosition = map(mouseY, padding, height - padding, padding, height - (2 * padding));
  
  fill(bgColor);
  rect(width / 2, (height / 2) + startPosition - padding, papiroWidth, papiroHeight);
  
  image(arrotolato, (width - papiroWidth) / 2, startPosition, papiroWidth, 50);
}