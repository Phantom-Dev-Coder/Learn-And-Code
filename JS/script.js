//global variubel
const proChengBtn = document.getElementById("pro-btn");
const proCheng = document.getElementById("explanation");
const showProject = document.getElementById("project-info");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");

let currentInex = 0;

//information of priject 
const proInfo = [
{
    name :"Rock Paper Scissors",
    discription :`
    An interesting project that can be very interesting.
    Of course, to create it, you need skills in HTML, CSS, and JavaScript.
    Of course, you can design the skin with HTML and CSS and add JavaScript to it later.`,
    img :"./Ressurs/Image/Rock Paper Scissors.png",
    seePro :"./Treaning/Simpel Game/index.html",
    gitHub :"https://github.com/Phantom-Dev-Coder/Learn-And-Code/tree/main/Treaning/Simpel%20Game"
},{
    name : "Todo List",
    discription :`Like the previous project, a very simple project.
First, design the skin with HTML and CSS.
In the next step, give it movement using JavaScript.
You can also visit our GitHub to see the code type.`,
    img : "./Ressurs/Image/ToDo.png",
    seePro :"./Treaning/Todo list/index.html",
    gitHub :"https://github.com/Phantom-Dev-Coder/Learn-And-Code/tree/main/Treaning/Todo%20list"
}
];

//project button to chenge the page (screen)
proChengBtn.addEventListener("click", ()=>{
   proCheng.classList.remove("active");
   showProject.classList.add("active");
});

//project btn for change the current project
leftBtn.addEventListener('click', ()=>{
    currentInex--;
    if (currentInex<0) currentInex = proInfo.length -1 ;
    projectRender();
});

rightBtn.addEventListener('click', () => {
    currentInex++;
    if (currentInex >= proInfo.length) currentInex = 0;
    projectRender();
});

// update the project
function projectRender () {
    const {name, discription, img, seePro, gitHub } = proInfo[currentInex];
    document.querySelector('.project-show').innerHTML = `
        <div class="description">
            <h3>${name}</h3>
            <p>${discription}</p>
        </div>
        <div class="project-interaction">
            <img src=${img} alt="project photo">
            <div class="interaction-btn">
                <a href= ${seePro} class="project-link">Playe</a>
                <a href=${gitHub} class="project-link">GitHub</a>
            </div>
        </div>
    </div>    
    `;
};
