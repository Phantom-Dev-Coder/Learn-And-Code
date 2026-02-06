//global variubel
const proChengBtn = document.getElementById("pro-btn");
const proCheng = document.getElementById("explanation");
const showProject = document.getElementById("project-info");

const proInfo = [
    {
        id : 1 ,
        name : "Rock Paper Scissors",
        discription :`An interesting project that can be very interesting.
    Of course, to create it, you need skills in HTML, CSS, and JavaScript.
    Of course, you can design the skin with HTML and CSS and add JavaScript to it later.`,
        img : "./Ressurs/Image/Rock Paper Scissors.png",
        seePro : "./Treaning/Simpel Game/index.html",
        gitHub : "https://github.com/Phantom-Dev-Coder/Learn-And-Code/tree/main/Treaning/Simpel%20Game",
    },
    {
        id : 2,
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

proChengBtn.addEventListener("click", function(){
   proCheng.classList.remove("active");
   showProject.classList.add("active");
});
