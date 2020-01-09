let tapBtnNormalColor = 124;
let tapBtnGlowColor = 62;
let textColor = 205;

class TapButton
{
	constructor(x,y,w,h,allotedKey)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.allotedKey = allotedKey;
		this.color = tapBtnNormalColor;
	}


	update()
	{
		//detecting if mouse is clicks this
		if(mouseX < this.x + this.w/2 &&
		   mouseX > this.x - this.w/2 &&
		   mouseY < this.y + this.h/2 &&
		   mouseY > this.y - this.h/2 &&
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
		rect(this.x,this.y,this.w,this.h);


		fill(textColor)
		textSize(40);
		text(this.allotedKey,this.x,this.y);


	}

	isMouseOverMe()
	{
		if(mouseX < this.x + this.w/2 &&
		   mouseX > this.x - this.w/2 &&
		   mouseY < this.y + this.h/2 &&
		   mouseY > this.y - this.h/2)
		{
			return true;
		}		

		else
		{
			return false;
		}

	}

	isTouched()
	{
		touchX = touch[0].x;
		touchY = touch[0].y;

		if(touchX < this.x + this.w/2 &&
		   touchX > this.x - this.w/2 &&
		   touchY < this.y + this.h/2 &&
		   touchY > this.y - this.h/2)
		{
			return true;
		}		

		else
		{
			return false;
		}

	}

}

class ChangeRootNoteButton{

	constructor(x,y,w,h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.color = tapBtnNormalColor;
	}

	update()
	{

		if(this.isMouseOverMe() && mouseIsPressed)
		{
			this.color = tapBtnGlowColor;
		}
		else
		{
			this.color = tapBtnNormalColor;
		}

		noStroke();
		fill(this.color);
		rect(this.x,this.y,this.w,this.h);

		fill(textColor)
		textSize(20);
		text("Change Root Note \n" + rootNote,this.x,this.y);		


	}



	isMouseOverMe()
	{
		if(mouseX < this.x + this.w/2 &&
		   mouseX > this.x - this.w/2 &&
		   mouseY < this.y + this.h/2 &&
		   mouseY > this.y - this.h/2)
		{
			return true;
		}		

		else
		{
			return false;
		}

	}

	isTouched()
	{
		touchX = touch[0].x;
		touchY = touch[0].y;

		if(touchX < this.x + this.w/2 &&
		   touchX > this.x - this.w/2 &&
		   touchY < this.y + this.h/2 &&
		   touchY > this.y - this.h/2)
		{
			return true;
		}		

		else
		{
			return false;
		}

	}
}
