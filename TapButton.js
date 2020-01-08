let tapBtnNormalColor = 124;
let tapBtnGlowColor = 62;
let textColor = 205;

class TapButton
{
	constructor(x,y,a,allotedKey)
	{
		this.x = x;
		this.y = y;
		this.a = a;
		this.allotedKey = allotedKey;
		this.color = tapBtnNormalColor;
	}


	update()
	{
		//detecting if mouse is clicks this
		if(mouseX < this.x + this.a/2 &&
		   mouseX > this.x - this.a/2 &&
		   mouseY < this.y + this.a/2 &&
		   mouseY > this.y - this.a/2 &&
		   mouseIsPressed)
		{
			this.color = tapBtnGlowColor;
		}
		else if(key == this.allotedKey && keyIsPressed)
		{
			this.color = tapBtnGlowColor;
		}
		else
		{
			this.color = tapBtnNormalColor;
		}

		noStroke();
		fill(this.color);
		rect(this.x,this.y,this.a,this.a);


		fill(textColor)
		textSize(40);
		text(this.allotedKey,this.x,this.y);


	}

	isMouseOverMe()
	{
		if(mouseX < this.x + this.a/2 &&
		   mouseX > this.x - this.a/2 &&
		   mouseY < this.y + this.a/2 &&
		   mouseY > this.y - this.a/2)
		{
			return true
		}		

		else
		{
			return false;
		}

	}

}