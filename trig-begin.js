function ShootingStar() {
  let x = frameCount
  let y = sin(x)*200;           // 현재 높이는 -1 픽셀 ~ +1 픽셀 정도일 것.
  push();
  fill(255);
  translate(x, y+height*0.5);
  Star2();
  pop();
}

function Saturn() {
let speed = frameCount 
let start = speed 
let stop = speed+330
  push();
	noStroke();
	fill("#bdffd8");
	ellipse(0, 0, 60, 60);
	pop();
  push();
	rotate(30);
	noFill();
	strokeWeight(5);
	stroke("#bdffd8");
	arc(0, 0, 100, 30, start, stop);
	pop();
}

function SwayingStar() {
	let rx = sin(frameCount) * 100
	let ry = cos(frameCount) * 100
	push();
	translate(400+rx, 500+ry);
	rotate(sin(frameCount*0.8) * 360);
	strokeWeight(10);
	stroke("#bdffd8");
	Star2();
	pop();
}

function ShootingStar() {
	push();
	rotate(-sin(frameCount*2)*15);
	noStroke();
	fill("#bdffd8");
	star(35, 105, 42, 25, 5);
	pop();
	for(let a = 0; a < 9 ; a=a+1){
	 rotate(-3);
	 strokeWeight(2);
	 stroke("#bdffd8");
	 bezier(20+cos(frameCount*2)*2, 100, 150, 50, 170, 100, 200+sin(frameCount*2)*0.5*mouseY, 100+sin(frameCount*2)*mouseX);
 }
}