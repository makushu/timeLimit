
 var name, 
    confirmation;
	
	name = window.prompt("Please enter your name");

	while (name.length === 0)
	{
	  name = window.prompt("Please enter your name");	
	}	
do
{

var triangle,
	triangleX = 1230,
	triangleY = 520,
	triangleW = 70,
	triangleH = 70,

	width = 1300,
	height = 600,

	rightKey = false,
	leftKey = false,
	upKey = false,
	downKey = false,
	speed = 10,
		
	start = 10,
	time,
	timeOn = 0,
	
	score = 0,
	scoreIncrease = 5,
		
	eaten = 0,
			
	blnGameOver = false,
	triangleDr = 1,
	countSec = 0,
	timeLeft = 10,
		
		
	candy1X = Math.floor(Math.random() * (1180)),
	candy1Y = Math.floor(Math.random() * (480)),
		
	candy2X = Math.floor(Math.random() * (1180)),
	candy2Y = Math.floor(Math.random() * (480)),
		
	candy3X = Math.floor(Math.random() * (1180)),
	candy3Y = Math.floor(Math.random() * (480)),
		
	candy4X = Math.floor(Math.random() * (1180)),
	candy4Y = Math.floor(Math.random() * (480)),
			
	beer1X = Math.floor(Math.random() * (1180)),
	beer1Y = Math.floor(Math.random() * (480)),
		
	beer2X = Math.floor(Math.random() * (1180)),
	beer2Y = Math.floor(Math.random() * (480)),
		
	beer3X = Math.floor(Math.random() * (1180)),
	beer3Y = Math.floor(Math.random() * (480)),
		
	beer4X = Math.floor(Math.random() * (1180)),
	beer4Y = Math.floor(Math.random() * (480)),	
		
	chocolate1X = Math.floor(Math.random() * (1180)),
	chocolate1Y = Math.floor(Math.random() * (480)),
		
	chocolate2X = Math.floor(Math.random() * (1180)),
	chocolate2Y = Math.floor(Math.random() * (480)),
		
	chocolate3X = Math.floor(Math.random() * (1180)),
	chocolate3Y = Math.floor(Math.random() * (480)),
		
	chocolate4X = Math.floor(Math.random() * (1180)),
	chocolate4Y = Math.floor(Math.random() * (480)),
		
	xwidth = width/2,
	yheight = height/2,
	 	 
	beer1, beer1W = 50, beer1H = 50,	 
	beer2, beer2W = 50, beer2H = 50,
	beer3, beer3W = 50, beer3H = 50,
	beer4, beer4W = 50, beer4H = 50,

	candy1, candy1W = 50, candy1H = 50,
	candy2, candy2W = 50, candy2H = 50,
	candy3, candy3W = 50, candy3H = 50,
	candy4, candy4W = 50, candy4H = 50,

	chocolate1, chocolate1W=50, chocolate1H=50, 
	chocolate2, chocolate2W=50, chocolate2H=50,
	chocolate3, chocolate3W=50, chocolate3H=50,
	chocolate4, chocolate4W=50, chocolate4H=50,

	timePlus, timePlusX = 10, timePlusY=520, timePlusW=60, timePlusH=60,	

	cereal, cerealX = xwidth,  cerealY = yheight, cerealW = 50, cerealH = 50,

	milk, milkX=xwidth, milkY=yheight,  milkW=50, milkH=50,
	orange, orangeX=xwidth, orangeY=yheight, orangeW=50, orangeH=50,
	banana, bananaX=xwidth, bananaY=yheight, bananaW=50, bananaH=50,
	bread, breadX=xwidth, breadY=yheight, breadW=50, breadH=50,

	bacon, baconX=xwidth, baconY=yheight, baconW=50, baconH=50,
	cheese, cheeseX=xwidth, cheeseY=yheight, cheeseW=50, cheeseH=50,
	chickenMayo, chickenMayoX=xwidth, chickenMayoY=yheight, chickenMayoW=50, chickenMayoH=50,
	panCake, panCakeX=xwidth, panCakeY=yheight, panCakeW=50, panCakeH=50,

	rama, ramaX=xwidth, ramaY=yheight, ramaW=50, ramaH=50,
	russian, russianX=xwidth, russianY=yheight, russianW=50, russianH=50,
	scones, sconesX=xwidth, sconesY=yheight, sconesW=50, sconesH=50,
	vienna, viennaX=xwidth, viennaY=yheight, viennaW=50, viennaH=50,
	peanutButter, peanutButterX=xwidth, peanutButterY=yheight, peanutButterW=50, peanutButterH=50,
	pie, pieX=xwidth, pieY=yheight, pieW=50, pieH=50,

	peas, peasX=xwidth,  peasY=yheight, peasW=50, peasH=50,
	pizza, pizzaX=xwidth, pizzaY=yheight, pizzaW=50, pizzaH=50,
	fish, fishX=xwidth, fishY=yheight, fishW=50, fishH=50,
	potatoes, potatoesX=xwidth, potatoesY=yheight, potatoesW=50, potatoesH=50,

	coleslaw, coleslawX=xwidth, coleslawY=yheight, coleslawW=50, coleslawH=50,
	chicken, chickenX=xwidth, chickenY=yheight, chickenW=50, chickenH=50,
	pap, papX=xwidth, papY=yheight, papW=50, papH=50,

	mushroom, mushroomX=xwidth, mushroomY=yheight, mushroomW=50, mushroomH=50,
	macaronni, macaronniX=xwidth, macaronniY=yheight, macaronniW=50, macaronniH=50,
	spaghetti, spaghettiX=xwidth, spaghettiY=yheight, spaghettiW=50, spaghettiH=50,

	rice, riceX=xwidth, riceY=yheight, riceW=50, riceH=50,
	lettice, letticeX=xwidth, letticeY=yheight, letticeW=50, letticeH=50,
	carrots, carrotsX=xwidth, carrotsY=yheight, carrotsW=50, carrotsH=50,
	cabbage, cabbageX=xwidth, cabbageY=yheight, cabbageW=50, cabbageH=50,
	chips, chipsX=xwidth, chipsY=yheight, chipsW=50, chipsH=50,
	burger, burgerX=xwidth, burgerY=yheight, burgerW=50, burgerH=50,
	apple, appleX=xwidth, appleY=yheight, appleW=50, appleH=50,

	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	function clearCanvas() 
	{
		ctx.clearRect(0,0,width,height);
	}
	
		function drawtriangle()
		{
				ctx.drawImage(triangle[triangleDr], triangleX, triangleY, triangleW, triangleH);
				if (leftKey)
				{
					triangleX -= speed;
					leftKey = false;
				}
				if (rightKey)
				{
					triangleX += speed;
					rightKey = false;
				}
				if (upKey)
				{
					triangleY -= speed;
					upKey = false;
				}
				if (downKey)
				{
					triangleY += speed;
					downKey = false;
					
				
				}
				
				//checking boundaries
				
				//if triangleman hits left wall
				
				if (triangleX <= 0)
				{
					triangleX = 0;
				}
				
				
				//if triangleman hits top wall
				if (triangleY <= 0)
				{
					triangleY = 0;
				}
				
				
				//if triangleman hits bottom wall
				if (triangleY >= (canvas.height - triangleH))
				{
					triangleY = height - triangleH;
				}
				
				
				//if triangleman hits right wall
				if (triangleX >= (canvas.width - triangleW))
				{
					triangleX = width - triangleW;
				}
			}
			
			
			function listen(e)
			{
				var keycode = e.keyCode;
				
				if(keycode == 39 && !blnGameOver)
				{
					rightKey = true;
					triangleDr = 1;
				}
				if (keycode == 37 && !blnGameOver)
				{
					leftKey = true;
					triangleDr = 3;
				}
				if (keycode == 38 && !blnGameOver)
				{
					upKey = true;
					triangleDr = 0;
				}
				if (keycode == 40 && !blnGameOver)
				{
					downKey = true ;
					triangleDr = 2;
				}
			
			
		}
	
function drawTimePlus()
{
	ctx.drawImage(timePlus, timePlusX, timePlusY, timePlusW, timePlusH);
}



function drawCandy1()
{
	ctx.drawImage(candy1, candy1X, candy1Y, candy1W, candy1H);
}
function drawCandy2()
{
	ctx.drawImage(candy2, candy2X, candy2Y, candy2W, candy2H);
}
function drawCandy3()
{
	ctx.drawImage(candy3, candy3X, candy3Y, candy3W, candy3H);
}
function drawCandy4()
{
	ctx.drawImage(candy4, candy4X, candy4Y,candy4W, candy4H);
}



function drawBeer1()
{
	ctx.drawImage(beer1, beer1X, beer1Y, beer1W, beer1H);
}
function drawBeer2()
{
	ctx.drawImage(beer2, beer2X, beer2Y, beer2W, beer2H);
}
function drawBeer3()
{
	ctx.drawImage(beer3, beer3X, beer3Y, beer3W, beer3H);
}
function drawBeer4()
{
	ctx.drawImage(beer4, beer4X, beer4Y, beer4W, beer4H);
}



function drawChocolate1()
{
	ctx.drawImage(chocolate1, chocolate1X, chocolate1Y, chocolate1W, chocolate1H);
}
function drawChocolate2()
{
	ctx.drawImage(chocolate2, chocolate2X, chocolate2Y, chocolate2W, chocolate2H);
}
function drawChocolate3()
{
	ctx.drawImage(chocolate3, chocolate3X, chocolate3Y, chocolate3W, chocolate3H);
}
function drawChocolate4()
{
	ctx.drawImage(chocolate4, chocolate4X, chocolate4Y, chocolate4W, chocolate4H);
}







function drawCereal()
{
				ctx.drawImage(cereal, cerealX, cerealY, cerealW, cerealH);
}

		
function drawMilk()
{
				ctx.drawImage(milk, milkX, milkY, milkW, milkH);
}

		
function drawOrange()
{
				ctx.drawImage(orange, orangeX, orangeY, orangeW, orangeH);
}


		
function drawBanana()
{
				ctx.drawImage(banana, bananaX, bananaY, bananaW, bananaH);
}


		
function drawBread()
{
				ctx.drawImage(bread, breadX, breadY, breadW, breadH);
}



function drawApple()
{
	ctx.drawImage(apple, appleX, appleY, appleW, appleH);
}

	
function drawCheese()
{
	ctx.drawImage(cheese, cheeseX, cheeseY, cheeseW, cheeseH);
}

	
function drawChickenMayo()
{
	ctx.drawImage(chickenMayo, chickenMayoX, chickenMayoY, chickenMayoW, chickenMayoH);
}

	
function drawPanCake()
{
	ctx.drawImage(panCake, panCakeX, panCakeY, panCakeW, panCakeH);
}

function drawRussian()
{
	ctx.drawImage(russian,russianX,russianY,russianW,russianH);
}
function drawRama()
{
	ctx.drawImage(rama,ramaX,ramaY,ramaW,ramaH);
}
function drawScones()
{
	ctx.drawImage(scones,sconesX,sconesY,sconesW,sconesH);
}

function drawVienna()
{
	ctx.drawImage(vienna,viennaX,viennaY,viennaW,viennaH);
	
}

function drawPeanutButter()
{
	ctx.drawImage(peanutButter,peanutButterX,peanutButterY,peanutButterW,peanutButterH);
	
}

function drawBacon()
{
	ctx.drawImage(bacon,baconX,baconY,baconW,baconH);
}

function drawPie()
{
	ctx.drawImage(pie,pieX,pieY,pieW,pieH);
}


function drawPeas()
{
				ctx.drawImage(peas, peasX, peasY, peasW, peasH);
}
	
function drawPizza()
{
				ctx.drawImage(pizza, pizzaX, pizzaY, pizzaW, pizzaH);
}

function drawChips()
{
	ctx.drawImage(chips,chipsX,chipsY,chipsW,chipsH);
}
	
function drawBurger()
{
	ctx.drawImage(burger, burgerX, burgerY, burgerW, burgerH);
}

function drawFish()
{
	ctx.drawImage(fish, fishX, fishY, fishW, fishH);
}
	
function drawPotatoes()
{
	ctx.drawImage(potatoes, potatoesX, potatoesY, potatoesW, potatoesH);
}

function drawColeslaw()
{
	ctx.drawImage(coleslaw,coleslawX,coleslawY,coleslawW,coleslawH);
}
function drawChicken()
{
	ctx.drawImage(chicken,chickenX,chickenY,chickenW,chickenH);
}

function drawPap()
{
	ctx.drawImage(pap,papX,papY,papW,papH);
	
}

function drawMushroom()
{
	ctx.drawImage(mushroom,mushroomX,mushroomY,mushroomW,mushroomH);
}

function drawMacaronni()
{
	ctx.drawImage(macaronni,macaronniX,macaronniY,macaronniW,macaronniH);
}

function drawSpaghetti()
{
	ctx.drawImage(spaghetti,spaghettiX,spaghettiY,spaghettiW,spaghettiH);
}

function drawRice()
{
	ctx.drawImage(rice,riceX,riceY,riceW,riceH);
}

function drawLettice()
{
	ctx.drawImage(lettice,letticeX,letticeY,letticeW,letticeH);
}

function drawCarrots()
{
	ctx.drawImage(carrots,carrotsX,carrotsY,carrotsW,carrotsH);
}
function drawCabbage()
{
	ctx.drawImage(cabbage,cabbageX,cabbageY,cabbageW,cabbageH);
}


		function foodCollide()
		{
		
		
			if (triangleX < cerealX + cerealW &&
			triangleY < cerealY + cerealH &&
			triangleH + triangleY > cerealY &&
			triangleX + triangleW > cerealX)
			{
			cerealX = Math.floor(Math.random() * (1250));
			cerealY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < milkX + milkW &&
			triangleY < milkY + milkH &&
			triangleH + triangleY > milkY &&
			triangleX + triangleW > milkX)
			{
			milkX = Math.floor(Math.random() * (1250));
			milkY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < orangeX + orangeW &&
			triangleY < orangeY + orangeH &&
			triangleH + triangleY > orangeY &&
			triangleX + triangleW > orangeX)
			{
			orangeX = Math.floor(Math.random() * (1250));
			orangeY = Math.floor(Math.random() * (550));			
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < breadX + breadW &&
			triangleY < breadY + breadH &&
			triangleH + triangleY > breadY &&
			triangleX + triangleW > breadX)
			{
			breadX = Math.floor(Math.random() * (1250));
			breadY = Math.floor(Math.random() * (550));			
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < bananaX + bananaW &&
			triangleY < bananaY + bananaH &&
			triangleH + triangleY > bananaY &&
			triangleX + triangleW > bananaX)
			{
			bananaX = Math.floor(Math.random() * (1250));
			bananaY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < baconX + baconW &&
			triangleY < baconY + baconH &&
			triangleH + triangleY > baconY &&
			triangleX + triangleW > baconX)
			{
			baconX = Math.floor(Math.random() * (1250));
			baconY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < appleX + appleW &&
			triangleY < appleY + appleH &&
			triangleH + triangleY > appleY &&
			triangleX + triangleW > appleX)
			{
			appleX = Math.floor(Math.random() * (1250));
			appleY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < cheeseX + cheeseW &&
			triangleY < cheeseY + cheeseH &&
			triangleH + triangleY > cheeseY &&
			triangleX + triangleW > cheeseX)
			{
			cheeseX = Math.floor(Math.random() * (1250));
			cheeseY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < chickenMayoX + chickenMayoW &&
			triangleY < chickenMayoY + chickenMayoH &&
			triangleH + triangleY > chickenMayoY &&
			triangleX + triangleW > chickenMayoX)
			{
			chickenMayoX = Math.floor(Math.random() * (1250));
			chickenMayoY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < panCakeX + panCakeW &&
			triangleY < panCakeY + panCakeH &&
			triangleH + triangleY > panCakeY &&
			triangleX + triangleW > panCakeX)
			{
			panCakeX = Math.floor(Math.random() * (1250));
			panCakeY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < ramaX + ramaW &&
			triangleY < ramaY + ramaH &&
			triangleH + triangleY > ramaY &&
			triangleX + triangleW > ramaX)
			{
			ramaX = Math.floor(Math.random() * (1250));
			ramaY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < russianX + russianW &&
			triangleY < russianY + russianH &&
			triangleH + triangleY > russianY &&
			triangleX + triangleW > russianX)
			{
			russianX = Math.floor(Math.random() * (1250));
			russianY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < sconesX + sconesW &&
			triangleY < sconesY + sconesH &&
			triangleH + triangleY > sconesY &&
			triangleX + triangleW > sconesX)
			{
			sconesX = Math.floor(Math.random() * (1250));
			sconesY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < viennaX + viennaW &&
			triangleY < viennaY + viennaH &&
			triangleH + triangleY > viennaY &&
			triangleX + triangleW > viennaX)
			{
			viennaX = Math.floor(Math.random() * (1250));
			viennaY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < peanutButterX + peanutButterW &&
			triangleY < peanutButterY + peanutButterH &&
			triangleH + triangleY > peanutButterY &&	
			triangleX + triangleW > peanutButterX)
			{
			peanutButterX = Math.floor(Math.random() * (1250));
			peanutButterY = Math.floor(Math.random() * (550));
			score += scoreIncrease;	
			eaten += 1;
			}
			else if (triangleX < pieX + pieW &&
			triangleY < pieY + pieH &&
			triangleH + triangleY > pieY &&	
			triangleX + triangleW > pieX)
			{
			pieX = Math.floor(Math.random() * (1250));
			pieY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < peasX + peasW &&
			triangleY < peasY + peasH &&
			triangleH + triangleY > peasY &&
			triangleX + triangleW > peasX)
			{
			peasX = Math.floor(Math.random() * (1250));
			peasY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < pizzaX + pizzaW &&
			triangleY < pizzaY + pizzaH &&
			triangleH + triangleY > pizzaY &&
			triangleX + triangleW > pizzaX)
			{
			pizzaX = Math.floor(Math.random() * (1250));
			pizzaY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < chipsX + chipsW &&
			triangleY < chipsY + chipsH &&
			triangleH + triangleY > chipsY &&
			triangleX + triangleW > chipsX)
			{
			chipsX = Math.floor(Math.random() * (1250));
			chipsY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < burgerX + burgerW &&
			triangleY < burgerY + burgerH &&
			triangleH + triangleY > burgerY &&
			triangleX + triangleW > burgerX)
			{
			burgerX = Math.floor(Math.random() * (1250));
			burgerY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < fishX + fishW &&
			triangleY < fishY + fishH &&
			triangleH + triangleY > fishY &&
			triangleX + triangleW > fishX)
			{
			fishX = Math.floor(Math.random() * (1250));
			fishY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < potatoesX + potatoesW &&
			triangleY < potatoesY + potatoesH &&
			triangleH + triangleY > potatoesY &&
			triangleX + triangleW > potatoesX)
			{
			potatoesX = Math.floor(Math.random() * (1250));
			potatoesY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < coleslawX + coleslawW &&
			triangleY < coleslawY + coleslawH &&
			triangleH + triangleY > coleslawY &&
			triangleX + triangleW > coleslawX)
			{
			coleslawX = Math.floor(Math.random() * (1250));
			coleslawY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < chickenX + chickenW &&
			triangleY < chickenY + chickenH &&
			triangleH + triangleY > chickenY &&
			triangleX + triangleW > chickenX)
			{
			chickenX = Math.floor(Math.random() * (1250));
			chickenY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < papX + papW &&
			triangleY < papY + papH &&
			triangleH + triangleY > papY &&	
			triangleX + triangleW > papX)
			{
			papX = Math.floor(Math.random() * (1250));
			papY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < mushroomX + mushroomW &&
			triangleY < mushroomY + mushroomH &&
			triangleH + triangleY > mushroomY &&	
			triangleX + triangleW > mushroomX)
			{
			mushroomX = Math.floor(Math.random() * (1250));
			mushroomY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < macaronniX + macaronniW &&
			triangleY < macaronniY + macaronniH &&
			triangleH + triangleY > macaronniY &&	
			triangleX + triangleW > macaronniX)
			{
			macaronniX = Math.floor(Math.random() * (1250));
			macaronniY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < spaghettiX + spaghettiW &&
			triangleY < spaghettiY + spaghettiH &&
			triangleH + triangleY > spaghettiY &&	
			triangleX + triangleW > spaghettiX)
			{
			spaghettiX = Math.floor(Math.random() * (1250));
			spaghettiY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < riceX + riceW &&
			triangleY < riceY + riceH &&
			triangleH + triangleY > riceY &&	
			triangleX + triangleW > riceX)
			{
			riceX = Math.floor(Math.random() * (1250));
			riceY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < letticeX + letticeW &&
			triangleY < letticeY + letticeH &&
			triangleH + triangleY > letticeY &&	
			triangleX + triangleW > letticeX)
			{
			letticeX = Math.floor(Math.random() * (1250));
			letticeY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < carrotsX + carrotsW &&
			triangleY < carrotsY + carrotsH &&
			triangleH + triangleY > carrotsY &&	
			triangleX + triangleW > carrotsX)
			{
			carrotsX = Math.floor(Math.random() * (1250));
			carrotsY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < cabbageX + cabbageW &&
			triangleY < cabbageY + cabbageH &&
			triangleH + triangleY > cabbageY &&	
			triangleX + triangleW > cabbageX)
			{
			cabbageX = Math.floor(Math.random() * (1250));
			cabbageY = Math.floor(Math.random() * (550));
			score += scoreIncrease;
			eaten += 1;
			}
			else if (triangleX < timePlusX + timePlusW &&
			triangleY < timePlusY + timePlusH &&
			triangleH + triangleY > timePlusY &&
			triangleX + triangleW > timePlusX)
			{
				timeLeft+=1;
				addTime();
			}
			else if (triangleX < candy1X + candy1W &&
			triangleY < candy1Y + candy1H &&
			triangleH + triangleY > candy1Y &&
			triangleX + triangleW > candy1X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < candy2X + candy2W &&
			triangleY < candy2Y + candy2H &&
			triangleH + triangleY > candy2Y &&
			triangleX + triangleW > candy2X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < candy3X + candy3W &&
			triangleY < candy3Y + candy3H &&
			triangleH + triangleY > candy3Y &&
			triangleX + triangleW > candy3X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < candy4X + candy4W &&
			triangleY < candy4Y + candy4H &&
			triangleH + triangleY > candy4Y &&
			triangleX + triangleW > candy4X)
			{
				gameOverWrongFood();
			}
			
			else if (triangleX < beer1X + beer1W &&
			triangleY < beer1Y + beer1H &&
			triangleH + triangleY > beer1Y &&
			triangleX + triangleW > beer1X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < beer2X + beer2W &&
			triangleY < beer2Y + beer2H &&
			triangleH + triangleY > beer2Y &&
			triangleX + triangleW > beer2X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < beer3X + beer3W &&
			triangleY < beer3Y + beer3H &&
			triangleH + triangleY > beer3Y &&
			triangleX + triangleW > beer3X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < beer4X + beer4W &&
			triangleY < beer4Y + beer4H &&
			triangleH + triangleY > beer4Y &&
			triangleX + triangleW > beer4X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < chocolate1X + chocolate1W &&
			triangleY < chocolate1Y + chocolate1H &&
			triangleH + triangleY > chocolate1Y &&
			triangleX + triangleW > chocolate1X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < chocolate2X + chocolate2W &&
			triangleY < chocolate2Y + chocolate2H &&
			triangleH + triangleY > chocolate2Y &&
			triangleX + triangleW > chocolate2X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < chocolate3X + chocolate3W &&
			triangleY < chocolate3Y + chocolate3H &&
			triangleH + triangleY > chocolate3Y &&
			triangleX + triangleW > chocolate3X)
			{
				gameOverWrongFood();
			}
			else if (triangleX < chocolate4X + chocolate4W &&
			triangleY < chocolate4Y + chocolate4H &&
			triangleH + triangleY > chocolate4Y &&
			triangleX + triangleW > chocolate4X)
			{
				gameOverWrongFood();
			}
			
			
			
	
			if(timeLeft == 0)
				{
							gameOverTimeIsUp();
				}
			
		}
		
		function addTime()
		{
			if (timeLeft > 20)
			{
				timeLeft = 20;
			}
		}
	
			function scoring()
			{	
						if(!blnGameOver){countSec++;}
						if(countSec > 25)
						{
								timeLeft--;
								countSec = 0;
						}
						
						
						
					
						
						if (timeLeft == 5)
						{
							ctx.fillStyle = " yellow";
							ctx.fillRect(0,0,width, height);
						}
						
						
						if (timeLeft == 3)
						{
							ctx.fillStyle = " red";
							ctx.fillRect(0,0,width, height);
						}
						
						
						
						
						
						ctx.font = "20pt Tahoma";
						ctx.strokeStyle="white";
						ctx.fillText('score : ' + score, 1100, 40);
						ctx.strokeText('score : ' + score, 1100, 40);
						ctx.fillText('Time: ' + timeLeft, 100, 40);
						ctx.strokeText('Time : ' + timeLeft, 100, 40);
			}
			
		
			
			function init()
			{
				triangle = new Array(4);
				for(x = 0; x < 4;x++)
				{
						triangle[x] = new Image();
						triangle[x].src = "images/triangle ("+(x+1)+").png";
				}
				blnGameOver = false;
				triangleDr = 1;
				countSec = 0;
				timeLeft = 20;
				
				cereal = new Image();
				cereal.src = 'images/cereal.png';
				
				milk = new Image();
				milk.src = 'images/milk.jpg';
			
				orange = new Image();
				orange.src = 'images/orange.png';
			
				
				banana = new Image();
				banana.src = 'images/banana.png';
			
				
				bread = new Image();
				bread.src = 'images/bread.png';
			
				apple = new Image();
				apple.src = 'images/apple.png';
			
				cheese = new Image();
				cheese.src = 'images/cheese.png';
			
				panCake = new Image();
				panCake.src = 'images/panCake.png';
			
				chickenMayo = new Image();
				chickenMayo.src = 'images/chickenMayo.jpg';
			
				russian=new Image();
				russian.src='images/russian.png';
				
				rama=new Image();
				rama.src='images/rama.png';
				
				scones=new Image();
				scones.src='images/scones.png';
				
				vienna=new Image();
				vienna.src='images/vienna.png';
				
				peanutButter=new Image();
				peanutButter.src='images/peanutButter.png';
				
				bacon=new Image();
				bacon.src='images/bacon.jpg';
				
				pie=new Image();
				pie.src='images/pie.png';
				
				peas = new Image();
				peas.src = 'images/peas.png';
				
				pizza = new Image();
				pizza.src = 'images/pizza.png';
			
				chips=new Image();
				chips.src='images/chips.png';
				
				burger = new Image();
				burger.src = 'images/burger.png';
			
				potatoes = new Image();
				potatoes.src = 'images/potatoes.png';
			
				fish = new Image();
				fish.src = 'images/fish.png';
			
				coleslaw=new Image();
				coleslaw.src='images/coleslaw.png';
				
				chicken=new Image();
				chicken.src='images/chicken.png';
				
				pap=new Image();
				pap.src='images/pap.png';
				
				rice=new Image();
				rice.src='images/rice.png';
				
				lettice=new Image();
				lettice.src='images/lettice.png';
				
				carrots=new Image();
				carrots.src='images/carrots.png';
				
				cabbage=new Image();
				cabbage.src='images/cabbage.png';
				
				mushroom=new Image();
				mushroom.src='images/mushroom.png';
				
				macaronni=new Image();
				macaronni.src='images/macaronni.png';
				
				spaghetti=new Image();
				spaghetti.src='images/spaghetti.png';
				
				timePlus = new Image();
				timePlus.src = 'images/timePlus.png';
				
		
				candy1 = new Image();
				candy1.src = 'images/candy1.png';
				
				candy2 = new Image();
				candy2.src = 'images/candy2.png';
				
				candy3 = new Image();
				candy3.src = 'images/candy3.png';
				
				candy4 = new Image();
				candy4.src = 'images/candy4.png';
				
				
				beer1 = new Image();
				beer1.src = 'images/beer1.png';
				
				beer2 = new Image();
				beer2.src = 'images/beer2.png';
				
				beer3 = new Image();
				beer3.src = 'images/beer3.png';
				
				beer4 = new Image();
				beer4.src = 'images/beer4.png';
				
				
				chocolate1 = new Image();
				chocolate1.src = 'images/chocolate1.png';
				
				chocolate2 = new Image();
				chocolate2.src = 'images/chocolate2.png';
				
				chocolate3 = new Image();
				chocolate3.src = 'images/chocolate3.png';
				
				chocolate4 = new Image();
				chocolate4.src = 'images/chocolate4.png';
				
				

				gameLoop();
			}
			
		function gameOverWrongFood()
		{
		clearCanvas();
			blnGameOver = true;
		
		var gradient = ctx.createLinearGradient(0,0,width, 0);
			gradient.addColorStop(0, 'white');
			gradient.addColorStop(0.25, 'grey');
			gradient.addColorStop(0.5, 'brown');
			gradient.addColorStop(0.75, 'purple');
			gradient.addColorStop(1, 'pink');
		
			ctx.fillStyle = gradient;
			ctx.fillRect(0,0,width, height);
			
			ctx.fillStyle = 'red';
			ctx.font = '20px Arial, sans-serif';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText('OOps wrong food ' + name + ' you got  ' + score + ' points', width/2, height/2);
		}

		function gameOverTimeIsUp()
		{
		clearCanvas();
			blnGameOver = true;
			
			var gradient = ctx.createLinearGradient(0,0,width, 0);
			gradient.addColorStop(0, 'white');
			gradient.addColorStop(0.25, 'grey');
			gradient.addColorStop(0.5, 'brown');
			gradient.addColorStop(0.75, 'purple');
			gradient.addColorStop(1, 'pink');
		
			ctx.fillStyle = gradient;
			ctx.fillRect(0,0,width, height);
			
			ctx.fillStyle = 'red';
			ctx.font = '20px Arial, sans-serif';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.fillText('you are too slow ' + name + ' anyway you got  ' + score + ' points', width/2, height/2);
		}
		
		
		
		

			function gameLoop()
			{
				clearCanvas();
				drawtriangle();
				drawTimePlus();

				drawCandy1();
				drawCandy2();
				drawCandy3();
				drawCandy4();
				
				drawBeer1();
				drawBeer2();
				drawBeer3();
				drawBeer4();
				
				
				drawChocolate1();
				drawChocolate2();
				drawChocolate3();
				drawChocolate4();
				
				

				drawCereal();
				drawMilk();
				drawOrange();
				drawBanana();
				drawBread();
				drawCheese();
				drawPanCake();
				drawChickenMayo();
				drawRussian();
				drawScones();
				drawVienna();
				drawPeanutButter();
				drawBacon();
				drawRama();
				drawPie();
				drawPeas();
				drawChips();
				foodCollide();
				drawPotatoes();
				drawFish();
				drawColeslaw();
				drawChicken();
				drawPap();
				drawMushroom();
				drawMacaronni();
				drawSpaghetti();
				drawRice();
				drawLettice();
				drawCarrots();
				drawCabbage();
				drawBurger();
				drawPizza();
				drawApple();

				scoring();
				game = setTimeout(gameLoop, 1000 / 30);
			}
				
			
			window.onload = init;
			window.addEventListener("keydown", listen);
			
			
			
			
var timeUp = gameOverTimeIsUp();
var wrongFood  = gameOverWrongFood();
  

   if (gameOverTimeIsUp()|| gameOverWrongFood())
   {
  
			 confirmation=window.confirm("Do you want to play AGAIN?");
      if (confirmation==false)
       break;
	}
	
	
}

while(confirmation==true);


