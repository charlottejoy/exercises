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