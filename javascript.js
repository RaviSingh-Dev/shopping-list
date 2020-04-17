
var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 


function inputLength(){
	return input.value.length;
}


function createListElement(){
    var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
    

	var btn= document.createElement("button");
 	btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
	btn.onclick = removeParent;

}

function addListAfterClick(){
    if (inputLength()>0){
    	createListElement();

    }
}


function addListAfterKeypress(event){
	  if (inputLength()>0 && event.keyCode===13){
	  	createListElement();
	  }
}


button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);




ul.onclick=function(event){
	var target = event.target;
	target.classList.toggle("cross");
}

function listLength(){
	
	return listItems.length; // it returns the list item length like how many items are present in list
}



function deleteButton(){

	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick= removeParent;
}

for( i=0;i<listLength();i++){

   deleteButton(i);
}

function confirmDeletion(){
	alert("sure you want to delete!!");
}

function removeParent(evt){

	confirmDeletion();

	evt.target.parentNode.remove();
}
