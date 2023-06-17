let slider1;
let slider1_value = 0;
let slider2;
let slider2_value = 0;
let slider3;
let slider3_value = 0;

let positions = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0);
	angleMode(DEGREES);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);    // 폰트 정렬 설정
	
	slider1 = createSlider(0.1, 0.5 , 0.3, 0.05);
	slider1.position(20, 200);
	slider2 = createSlider(0, width*1.5, 0, 100);
	slider2.position(20, 250);
	slider3 = createSlider(0, 300, 170, 10);
	slider3.position(20, 300);

	c1 = color("#000000");
	c2 = color("#182178");
	c3 = color("#4049B1");
	c4 = color("#FF858F");

	for (let i = 0; i < 30; i = i + 1) {
		let pos = {x: random(300, width-100), y: random(100, height-100)}; // json, object
    positions.push(pos);
	}
}
   
function draw() {
	
	slider1_value = slider1.value();
	slider2_value = slider2.value();
	slider3_value = slider3.value();
	setGradient(-slider2_value, 0, width, height, c1, c2);
	setGradient(width - slider2_value, 0, width*0.5, height, c2, c3);
	setGradient(1.5*width- slider2_value, 0, width, height, c3, c4);
	
	if(frameCount%70 == 0) {
		for (i = 0; i < 30; i = i + 1) {
			positions[i] = {x: random(300, width-100), y: random(100, height-100)}; 
		}
	}
	
	for (let i = 0; i < 30; i = i + 1) {
		push();
		translate(positions[i].x, positions[i].y);
		scale(slider1_value);
		fill(189, 255, 216, slider3_value);
		noStroke();
		star(0, 0, 30, 55, 5);
		pop();	
	}
	
  push();
	translate(width*0.2, height*0.2);
	Saturn();
	pop();
	
	push();
	translate(width*0.8, height*0.7);
	rotate(-70);
	scale(1.2);
	Saturn();
	pop();
 
	push();
	translate(100, 0);
	scale(0.7);
	SwayingStar();
	pop();

	push();
	translate(900, -200);
	rotate(60);
	SwayingStar();
	pop();
	
	push();
	scale(1.1);
	translate(390, -300);
	rotate(5);
	SwayingStar();
	pop();
	
	push();
	translate(300, 400);
	rotate(-20);
	scale(0.5);
  ShootingStar();	
	pop();
	
	push();
	translate(1100, 300);
	scale(0.5);
	rotate(200);
	ShootingStar();
	pop();
 
	fill(255);
	noStroke();
	push();
	textSize(20);  
	text("NOSTALGIA", 85, 90);    
	pop();
	
	push();
	textSize(13);
	text("scale", 85, 190);   
	text("12AM           6AM", 85, 240);  
	text("opacity", 85, 290);   
	pop();
}





