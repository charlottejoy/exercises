const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const hey= document.createElement("p");
hey.style.color="red";
hey.textContent="Hey I'm red!";
container.appendChild(hey);

const imBlue= document.createElement("h3");
imBlue.style.color="blue";
imBlue.textContent="I'm a blue h3!";
container.appendChild(imBlue);

const pinkDiv= document. createElement ("div");
pinkDiv.setAttribute("style", "border: black 1px solid; background: pink")

const imIn=document.createElement("h1");
imIn.textContent="I'm in a div!";
pinkDiv.appendChild(imIn);

const p2= document.createElement("p");
p2.textContent="ME TOO!";
pinkDiv.appendChild(p2);

container.appendChild(pinkDiv);


function alertFunction(){
	alert("Howdy earthlings!");
};
var btn2= document.querySelector("#btn2");
btn2.onclick=()=>alert("Yo! Planet!");

var btn3= document.querySelector("#btn3");
btn3.addEventListener("click",()=>{
	alert("Hello World!");
	});

var btn4= document.querySelector("#btn4");
btn4.addEventListener("click",alertFunction);

//continue here "With all three methods we can access more information about the event by passing a parameter to the function that we are calling."