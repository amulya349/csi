
var item11 = new Array();
var item21 = new Array();
var item31 = new Array();
var item32 = new Array();
var item41 = new Array();
var item51 = new Array();
var item52 = new Array();

//alert(localStorage.level);
//localStorage.evid[5];
function check_map(){
	switch(localStorage.level)
	{
		case '5' : document.getElementById('lev51').style.display = 'block';
				document.getElementById('lev52').style.display = 'block';					
		case '4' : document.getElementById('lev41').style.display = 'block';
		case '3' : document.getElementById('lev31').style.display = 'block';
				document.getElementById('lev32').style.display = 'block';
		case '2' : document.getElementById('lev21').style.display = 'block';
				//document.getElementById("lev41").style.display = "block";
		case '1' : document.getElementById("lev11").style.display = "block";
				
				break;
		default :;
	}
}

//function to add the evidence from 11 to evidence list for .
function add_evid11(x){
	//if(localStorage.flag11 == 0){
		for(var i=0; i< item11.length; i++){
			if(x.className == item11[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item11[item11.length] = x.className;
	//}
	//else
		//alert("Evidences already collected from here !!");
}//function to add the evidence from 21 to evidence list for .


function add_evid21(x){	
	//if(localStorage.flag21 == 0){
		//alert(x.className);
		for(var i=0; i< item21.length; i++){
			if(x.className == item21[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item21[item21.length] = x.className;
	//}
	//else
		//alert("Evidences already collected from here !!");
}//function to add the evidence from 31 to evidence list for .
function add_evid31(x){	
	//if(localStorage.flag31 == 0){
		//alert(x.className);
		for(var i=0; i< item31.length; i++){
			if(x.className == item31[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item31[item31.length] = x.className;
	//}
	//else
	//	alert("Evidences already collected from here !!");
}//function to add the evidence from 32 to evidence list for .
function add_evid32(x){	
	//if(localStorage.flag32 == 0){
		//alert(x.className);
		for(var i=0; i< item32.length; i++){
			if(x.className == item32[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item32[item32.length] = x.className;
	//}
	//else
	//	alert("Evidences already collected from here !!");
}//function to add the evidence from 41 to evidence list for .
function add_evid41(x){
	//if(localStorage.flag41 == 0){
		//alert(x.className);	
		
		for(var i=0; i< item41.length; i++){
			if(x.className == item41[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item41[item41.length] = x.className;
	//}
	//else
		//alert("Evidences already collected from here !!");
}//function to add the evidence from 51 to evidence list for .
function add_evid51(x){	
	//if(localStorage.flag51 == 0){
		//alert(x.className);
		for(var i=0; i< item51.length; i++){
			if(x.className == item51[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item51[item51.length] = x.className;
	//}
	//else
	//	alert("Evidences already collected from here !!");
}
function add_evid52(x){	
	//if(localStorage.flag52 == 0){
		//alert(x.className);
		for(var i=0; i< item52.length; i++){
			if(x.className == item52[i])
				return;
		}
		var ul = document.getElementById('myList'); //id of the ul of the evidence list
		var li = document.createElement('li');
		var text = document.createTextNode(x.textContent);
		li.appendChild(text);
		ul.appendChild(li);
		item52[item52.length] = x.className;
	//}
	//else
	//	alert("Evidences already collected from here !!");
}
//function will increment the level once the evidences are submitted.
function submit_evid(y){
	
	switch(y){
		case 11: if(localStorage.flag11 == 1) return;
				localStorage.flag11 = 1;
				localStorage["it11"] = JSON.stringify(item11);
				localStorage.level++;
			break;
		case 21: if(localStorage.flag21 == 1) return;
				localStorage.flag21 = 1;
				localStorage["it21"] = JSON.stringify(item21);
				localStorage.level++;
			break;
		case 31: if(localStorage.flag31 == 1) return;
				localStorage.flag31 = 1;
				localStorage["it31"] = JSON.stringify(item31);
			break;
		case 32: if(localStorage.flag32 == 1) return;
				localStorage.flag32 = 1;
				localStorage["it32"] = JSON.stringify(item32);
				localStorage.level++;
			break;
		case 41: alert(1);
				if(localStorage.flag41 == 1) return;
				localStorage.flag41 = 1;
				localStorage["it41"] = JSON.stringify(item41);
				localStorage.level++;
			break;
		case 51: if(localStorage.flag51 == 1) return;
				localStorage.flag51 = 1;
				localStorage["it51"] = JSON.stringify(item51);
			break;
		case 52: if(localStorage.flag52 == 1) return;
				localStorage.flag52 = 1;
				localStorage["it52"] = JSON.stringify(item52);
				localStorage.level++;
			break;
		default : //localStorage.level--;
		
	}	
}
//function to display the evidences in evlab.html
function ev_display(){
	
	if(localStorage.flag11 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Vikrant Sharma Death Site');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');		
		var itm11 = JSON.parse(localStorage["it11"]);
		for(var i=0; i<itm11.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm11[i]){
				case '1': c.src = './thumb/psycdeath/bloodstain.png';
						c.title = 'Blood';
						a.href="./fdata/psycdeath/bloodstain.png";
						a.target="_blank";
					break;
				case '2': c.src = './thumb/psycdeath/finger.png';
						c.title = 'Finger Print';
						a.href="./fdata/psycdeath/finger.png";
						a.target="_blank";
					break;
				case '3': c.src = './thumb/psycdeath/phone.png';
						c.title = 'Phone Memo';
						a.href="./fdata/psycdeath/phone.png";
						a.target="_blank";
					break;
				case '4': c.src = './thumb/psycdeath/coat.png';
						c.title = 'Jacket';
						a.href="./fdata/psycdeath/coat.png";
						a.target="_blank";
					break;
				case '5': c.src = './thumb/psycdeath/shoes.png';
						c.title = 'Shoes';
						a.href="./fdata/psycdeath/shoes.png";
						a.target="_blank";
					break;	
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	
	if(localStorage.flag41 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Dr.Anand Chopra clinic');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');		
		var itm41 = JSON.parse(localStorage["it41"]);
		for(var i=0; i<itm41.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm41[i]){
				case '1': c.src = './thumb/docclinic/audio.png';
						c.title = 'Stack of Tapes';
						a.href="./fdata/docclinic/audio.png";
						a.target="_blank";
					break;
				case '2': c.src = './thumb/docclinic/cctv.png';
						c.title = 'CCTV';
						a.href="./fdata/docclinic/cctv.png";
						a.target="_blank";
					break;
				case '3': c.src = './thumb/docclinic/cigar.png';
						c.title = 'Cigarette Box';
						a.href="./fdata/docclinic/cigar.png";
						a.target="_blank";
					break;
				case '4': c.src = './thumb/docclinic/doc.png';
						c.title = 'Documents';
						a.href="./fdata/docclinic/doc.png";
						a.target="_blank";
					break;
				case '5': c.src = './thumb/docclinic/knife.png';
						c.title = 'Surgical Knife';
						a.href="./fdata/docclinic/knife.png";
						a.target="_blank";
					break;
				case '6': c.src = './thumb/docclinic/landline.png';
						c.title = 'Call Logs';
						a.href="./fdata/docclinic/landline.png";
						a.target="_blank";
					break;
				case '7': c.src = './thumb/docclinic/note.png';
						c.title = 'Note';
						a.href="./fdata/docclinic/note.png";
						a.target="_blank";
					break;
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	
	if(localStorage.flag21 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Renu Roy death site');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');		
		var itm21 = JSON.parse(localStorage["it21"]);
		for(var i=0; i<itm21.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm21[i]){
				case '1': c.src = './thumb/pdeath/wiring.png';
						c.title = 'Wiring';
						a.href="./fdata/pdeath/wiring.png";
						a.target="_blank";
					break;
				case '2': c.src = './thumb/pdeath/tyre.png';
						c.title = 'Tyre Marks';
						a.href="./fdata/pdeath/tyre.png";
						a.target="_blank";
					break;
				case '3': c.src = './thumb/pdeath/res.png';
						c.title = 'Wreck';
						a.href="./fdata/pdeath/res.png";
						a.target="_blank";
					break;
				case '4': c.src = './thumb/pdeath/id.png';
						c.title = 'Documents';
						a.href="./fdata/pdeath/id.png";
						a.target="_blank";
					break;
				case '5': c.src = './thumb/pdeath/tyrepunc.png';
						c.title = 'Blood';
						a.href="./fdata/pdeath/tyrepunc.png";
						a.target="_blank";
					break;	
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	

	if(localStorage.flag31 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Venkat Reddy death site');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');		
		var itm31 = JSON.parse(localStorage["it31"]);
		for(var i=0; i<itm31.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm31[i]){
				case '1': c.src = './thumb/cdeath/residue.png';
						c.title = 'Residue';
						a.href="./fdata/cdeath/residue.png";
						a.target="_blank";
					break;
				case '2': c.src = './thumb/cdeath/cctv.png';
						c.title = 'CCTV';
						a.href="./fdata/cdeath/cctv.png";
					a.target="_blank";
					break;
				case '3': c.src = './thumb/cdeath/numberplate.png';
						c.title = 'Number Plate';
						a.href="./fdata/cdeath/numberplate.png";
					a.target="_blank";
					break;
				case '4': c.src = './thumb/cdeath/phone.png';
						c.title = 'Phone';
						a.href="./fdata/cdeath/phone.png";
					a.target="_blank";
					break;
				case '5': c.src = './thumb/cdeath/skid.png';
						c.title = 'Tyre Marks';
						a.href="./fdata/cdeath/skid.png";
					a.target="_blank";
					break;	
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	

	if(localStorage.flag32 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Venkat Residence');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');		
		var itm32 = JSON.parse(localStorage["it32"]);
		for(var i=0; i<itm32.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm32[i]){
				case '1': c.src = './thumb/cres/diary.png';
						c.title = 'Diary';
						a.href="./fdata/cres/diary.png";
						a.target="_blank";
					break;
				case '2': c.src = './thumb/cres/button.png';
						c.title = 'Suit Button';
						a.href="./fdata/cres/button.png";
					a.target="_blank";
					break;
				case '3': c.src = './thumb/cres/cctv.png';
						c.title = 'CCTV';
						a.href="./fdata/cres/cctv.png";
					a.target="_blank";
					break;
				case '4': c.src = './thumb/cres/cigar.png';
						c.title = 'Cigarette';
						a.href="./fdata/cres/cigar.png";
					a.target="_blank";
					break;
				case '5': c.src = './thumb/cres/drawer.png';
						c.title = 'Drawer';
						a.href="./fdata/cres/drawer.png";
					a.target="_blank";
					break;	
				case '6': c.src = './thumb/cres/gun.png';
						c.title = 'Gun';
						a.href="./fdata/cres/gun.png";
					a.target="_blank";
					break;	
				case '7': c.src = './thumb/cres/locker.png';	
						c.title = 'Locker';
						a.href="./fdata/cres/locker.png";
					a.target="_blank";
					break;	
				case '8': c.src = './thumb/cres/memcard.png';
						c.title = 'Memory Card';
						a.href="./fdata/cres/memcard.png";
					a.target="_blank";
					break;	
				case '9': c.src = './thumb/cres/note.png';
						c.title = 'Note';
						a.href="./fdata/cres/note.png";
					a.target="_blank";
					break;					
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	
	
	if(localStorage.flag51 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Office of Mahesh Arora and Satyam Seth ');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');
		var itm51 = JSON.parse(localStorage["it51"]);
		for(var i=0; i<itm51.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);alert(itm51[i]);
			switch(itm51[i]){
				case '1': c.src = './thumb/xyoff/doc.png';
					c.title = 'Documents';
					a.href="./fdata/xyoff/doc.png";
					a.target="_blank";
					break;
				case '2': c.src = './thumb/xyoff/cctv.png';
					c.title = 'CCTV';
					a.href="./fdata/xyoff/cctv.png";
					a.target="_blank";
					break;
				case '3': c.src = './thumb/xyoff/finger.png';
					c.title = 'Finger Print';
					a.href="./fdata/xyoff/finger.png";
					a.target="_blank";
					break;
				case '4': c.src = './thumb/xyoff/note.png';
					c.title = 'Note';
					a.href="./fdata/xyoff/note.png";
					a.target="_blank";
					break;
				case '5': c.src = './thumb/xyoff/audio.png';
					c.title = 'Audio Transmitter';
					a.href="./fdata/xyoff/audio.png";
					a.target="_blank";
					break;	
			}
			y.appendChild(a);
			c.style.marginRight = "30px";
		}
		x.appendChild(y);
	}
	
	if(localStorage.flag52 == 1)
	{
		var x= document.getElementById('grid');
		var t =document.createTextNode('Morgue of Mahesh Arora');
		var h = document.createElement('h3');
		h.style.textAlign = 'center';
		h.style.width = '100%';
		h.appendChild(t);
		x.appendChild(h);
		var y = document.createElement('div');
		var itm52 = JSON.parse(localStorage["it52"]);//alert(itm52.length);
		for(var i=0; i<itm52.length; i++)
		{
			var c = document.createElement('img');
			var a = document.createElement('a');
			a.appendChild(c);
			switch(itm52[i]){
				case '1': c.src = './thumb/xdeath/bullet.png';
					c.title = 'Bullet Mark';
					a.href="./fdata/xdeath/doc.png";
					a.target="_blank";
					break;
				case '2': c.src = './thumb/xdeath/watch.png';
					c.title = 'Watch';
					a.href="./fdata/xdeath/watch.png";
					a.target="_blank";
					break;
				case '3': c.src = './thumb/xdeath/blood.png';
					c.title = 'Blood';
					a.href="./fdata/xdeath/blood.png";
					a.target="_blank";
					break;
				case '4': c.src = './thumb/xdeath/doc.png';
					c.title = 'Document';
					a.href="./fdata/xdeath/doc.png";
					a.target="_blank";
					break;
				case '5': c.src = './thumb/xdeath/finger.png';
					c.title = 'Finger Print';
					a.href="./fdata/xdeath/finger.png";
					a.target="_blank";
					break;	
			}
			y.appendChild(a);
			a.style.marginRight = "30px";
		}
		x.appendChild(y);
		var br = document.createElement('br');
	}
	
}



function al(){
	//alert(2);
	alert(item21);
	//console.log(localStorage.flag11);
		/*var x = document.getElementById('lev1');
	x.style.display = 'block';*/
}

