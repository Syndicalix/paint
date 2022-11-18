
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);

    
          console.log(getSelectedColor())
    }

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    
    let colors = palette
    
    console.log(palette)
      

    let divs = document.querySelectorAll("body > header > div")
    for(let i = 0; i < 8; i++)
    {
    console.log(colors[i])
    divs[i].style.backgroundColor=colors[i]
    }
}

    // le code de l'étape 1 se passe ici


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);
// le code de l'étape 2 se passe ici
    
    let divs = document.querySelectorAll("body > header > div")
    for(let i = 0; i < 8; i++){
    divs[i].addEventListener("click", selectColor);
    }

    // le code de l'étape 3 se passe ici
    let maindiv= document.querySelectorAll("main > div > div");
    for(let i = 0; i < maindiv.length; i++){
    maindiv[i].addEventListener("click", function ()
    {   
    if(event.target.style.backgroundColor==false)
        event.target.style.backgroundColor=getSelectedColor();
    else
        event.target.style.backgroundColor="";
    }

    );
    }
});