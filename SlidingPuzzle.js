function PlayGame(){
	if(document.getElementById("box9").className=="box10"){
		document.getElementById("box9").className="box9";
	}
	document.getElementById("pl").innerHTML="Play again";		//đổi nút
	mix();					//
	handling();
}

function mix(){		//trộn các ô sau khi click play 
	var run=0;
	while(run<=720){
		var v=document.getElementsByClassName("box9")[0].id;
		if(v=="box1"){										//góc
			var s=Math.floor(Math.random()*2);
			if(s==0){
				convert(1,2);
			}else{
				convert(1,4);
			}
		}
		if(v=="box3"){										//góc
			var s=Math.floor(Math.random()*2);
			if(s==0){
				convert(3,6);
			}else{
				convert(3,2);
			}
		}
		if(v=="box7"){										//góc
			var s=Math.floor(Math.random()*2);
			if(s==0){
				convert(7,4);
			}else{
				convert(7,8);
			}
		}
		if(v=="box9"){										//góc
			var s=Math.floor(Math.random()*2);
			if(s==0){
				convert(9,8);
			}
			if(s==1){
				convert(9,6);
			}
		}													//góc
		if(v=="box2"){										//cạnh
			var s=Math.floor(Math.random()*3);
			if(s==0){
				convert(2,1);
			}
			if(s==1){
				convert(2,3);
			}
			if(s==2){
				convert(2,5);
			}
		}
		if(v=="box4"){										//cạnh
			var s=Math.floor(Math.random()*3);
			if(s==0){
				convert(4,1);
			}
			if(s==1){
				convert(4,5);
			}
			if(s==2){
				convert(4,7);
			}
		}
		if(v=="box6"){										//cạnh
			var s=Math.floor(Math.random()*3);
			if(s==0){
				convert(6,3);
			}
			if(s==1){
				convert(6,5);
			}
			if(s==2){
				convert(6,9);
			}
		}
		if(v=="box8"){										//cạnh
			var s=Math.floor(Math.random()*3);
			if(s==0){
				convert(8,7);
			}
			if(s==1){
				convert(8,9);
			}
			if(s==2){
				convert(8,5);
			}
		}													//cạnh
		if(v=="box5"){											//trong
			var s=Math.floor(Math.random()*4);
			if(s==0){
				convert(5,2);
			}
			if(s==1){
				convert(5,4);
			}
			if(s==2){
				convert(5,6);
			}
			if(s==3){
				convert(5,8);
			}
		}
		run++;
	}
}

function convert(nid1,nid2){		//number id1, number id2
	var temp=document.getElementById("box"+nid1).className;
			document.getElementById("box"+nid1).className=document.getElementById("box"+nid2).className;
			document.getElementById("box"+nid2).className=temp;
}
function handling(d){
	if(this.className!="box9"){
		if(d!=3&&d!=6&&d!=9){
			if(document.getElementById("box"+(d+1)).className=="box9"){
				convert(d,d+1);
			}
		}
		if(d!=1&&d!=4&&d!=7){
			if(document.getElementById("box"+(d-1)).className=="box9"){
				convert(d,d-1);
			}
		}
		if(d<=6){
			if(document.getElementById("box"+(d+3)).className=="box9"){
				convert(d,d+3);
			}
		}
		if(d>=4){
			if(document.getElementById("box"+(d-3)).className=="box9"){
				convert(d,d-3);
			}
		}
	}
}
function judge(){
		for(var i=1;i<=9;i++){
			if(document.getElementById("box"+i).className=="box"+i){
				if(i==9){
					document.getElementById("box9").className="box10";
				}
			}
			else break;
		}

}