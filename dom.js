// // var laDivision = document.getElementById("ok");
// // var identique = document.getElementsByClassName("classe")

// // laDivision.innerHTML = "Salut";
// // identique.innerHTML = "J'aime le code";

// var desApprenants = ["Fabien", "Edains", "Quentin"];
// // Affiche Fabien, le premier de la liste :
// console.log(desApprenants[0]);
// // Ajout d'un nouvel élement dans la liste desApprenants :
// desApprenants.push("Christophe");
// // Affichage de la variable des Apprenants dans la console :
// console.log(desApprenants);


// var ok = document.getElementById("ok");
// var activated = false;

// ok.addEventListener("click", clic);

// function clic() {
//     if (activated === false) {
//     document.getElementById("ok").style.backgroundColor = "blue";
//     document.getElementById("ok").style.width = "500px";
//     document.getElementById("ok").style.height = "500px";
//     activated = true;
// } else {
//     document.getElementById("ok").style.backgroundColor = "pink";
//     document.getElementById("ok").style.width = "250px";
//     document.getElementById("ok").style.height = "250px";
// }
// }


var taille = 150;

document.getElementById("bouton1").addEventListener("click", clickjaune);
document.getElementById("bouton2").addEventListener("click", clickbleu);
document.getElementById("bouton3").addEventListener("click", changetaille);
document.getElementById("bouton4").addEventListener("click", effacer);
document.getElementById("bouton5").addEventListener("click", retourtaille);
document.getElementById("bouton6").addEventListener("click", reset);

// bouton 1 jaune
function clickjaune(){
    document.getElementById("carre").style.backgroundColor = "yellow";
}

// bouton 2 bleu
function clickbleu(){
    document.getElementById("carre").style.backgroundColor = "blue";
}

// bouton 3 +50px
function changetaille(){
    if (taille <= 500){
            document.getElementById("carre").style.width = taille +"px";
            setTimeout(function () {
                document.getElementById("carre").style.height = taille +"px";
            }, 2000);            
            taille = taille + 50;
        } else {
            document.getElementById("carre").style.width = "100px";
            document.getElementById("carre").style.height = "100px";
            taille = 150;
            }
}
    

// bouton 4 effacer
function effacer(){
    document.getElementById("carre").style.display = "none";
}

// bouton 5 reinitaliser
function reset(){
    document.getElementById("carre").style.display = "block";
    document.getElementById("carre").style.backgroundColor = "red";
    document.getElementById("carre").style.width = "100px";
    document.getElementById("carre").style.height = "100px";
    taille = 150;
}


// bouton 6 300px
function retourtaille(){
    document.getElementById("carre").style.width = "300px";
    document.getElementById("carre").style.height = "300px";
    taille = 350;
}




