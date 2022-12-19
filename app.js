
var btn = document.querySelector('button');

function random(number) {
return Math.floor(Math.random()*(number+1));
}

btn.onclick = function() {
var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
document.body.style.backgroundColor = rndCol;
}

document.body.style.width = "100%";
document.body.style.height = "100%";
document.body.style.margin = "0";
document.body.style.height = "1mm";
document.body.style.color = "#000000";


const header = document.querySelector("header")
header.style.background = "tranparent"
header.style.webkitBackdropFilter = "blur(5px)"
header.style.backdropFilter = "blur(5px)"
header.style.padding = ".43rem"
header.style.boxShadow = "0 4px 3px rgba(0,0,77,0.25)" 
header.style.display = "flex"
header.style.justifyContent = "space-around"
header.style.gap = "700px"

const h1 = document.querySelector("h1")
h1.style.color = "#ffffffff";
h1.style.textAlign = "center";
h1.style.marginBottom = "4.75rem";
h1.style.fontSize = "2.75rem";


const dado = document.querySelector(".quadrado")
dado.style.width =  "33%";
dado.style.height = "24rem"
dado.style.background = "linear-gradient(45deg,	#012C60  36%,  #00FFFF 64%)";
dado.style.display = "flex"
dado.style.justifyContent = ""
dado.style.alignItems = "center"
dado.style.alingContent = "center"
dado.style.flexDirection = "column"
dado.style.marginLeft = "auto"
dado.style.marginRight = "auto"
dado.style.borderRadius = "30px"
dado.style.boxShadow = "3px 4px 5px rgba(0,0,0,0.25)" 

const label = document.querySelector("label")
label.style.color = "#000000";
label.style.position = "relative"
label.style.top = "4.40rem"
label.style.left = "-8.55rem"


const input = document.querySelector("input")
input.style.width = "80%"
input.style.borderRadius = "10px"
input.style.border = "0"
input.style.height = "35px"
input.style.outline = "none"
input.style.marginBottom = "2.75rem"
input.style.marginTop = "4.75rem"

const label2 = document.querySelector(".ddbel")
label2.style.color = "#000000";
label2.style.position = "relative" 
label2.style.top = "-.40rem"
label2.style.left = "-11rem"


const input2 = document.querySelector(".dd")
input2.style.width = "80%"
input2.style.borderRadius = "10px"
input2.style.border = "0"
input2.style.height = "35px"
input2.style.outline = "none"
input2.style.marginBottom = "2.75rem"

const button = document.querySelector(".butt")
button.style.width = "7rem"
button.style.height = "2rem"
button.style.background = "#FF0000"
button.style.borderRadius = "7px"
button.style.border = "none"
button.style.cursor = "pointer"
button.style.fontSize = "18px"
button.style.fontWeight = "bold"
button.style.color = "#ffffff"
function passarmouse(){
const button = document.querySelector(".butt")
button.style.background = "#ffa3b1"

}
function retirarmouse(){
    const button = document.querySelector(".butt")
    button.style.background =  "#FF0000"
}

const button2 = document.querySelector(".buthea")
button2.style.width = "7rem"
button2.style.height = "2rem"
button2.style.background = "#FF0000"
button2.style.borderRadius = "7px"
button2.style.border = "none"
button2.style.cursor = "pointer"
button2.style.fontSize = "18px"
button2.style.fontWeight = "bold"
button2.style.color = "#ffffff"
function passarmous(){
  const button2 = document.querySelector(".buthea")
  button2.style.background = "#ffa3b1"
  
  }
  function retirarmous(){
      const button2 = document.querySelector(".buthea")
      button2.style.background =  "#FF0000"
  }
 


const styleEstrelas = document.querySelector(".img-estelar")
styleEstrelas.style.zIndex = "-1"
styleEstrelas.style.position = "absolute"
styleEstrelas.style.left = "10%"
styleEstrelas.style.right = "auto"
styleEstrelas.style.width = "27%"
styleEstrelas.style.alingContent = "center"

const styleEstrelas2 = document.querySelector(".img-onda")
styleEstrelas2.style.zIndex = "-1"
styleEstrelas2.style.position = "absolute"
styleEstrelas2.style.left = "19rem"
styleEstrelas2.style.right = ""
styleEstrelas2.style.top = "9rem"
styleEstrelas2.style.width = "44%"
styleEstrelas2.style.alingContent = "center"
styleEstrelas2.style.transform = ("rotate(45deg)")

const a = document.querySelector("a")
a.style.color = "#ff0000"
a.style.outline = "none"
a.style.fontWeight = "bold"
a.style.fontSize = "15px"



function envia() {
        var time_debut = document.getElementById("gg").value;
        var time_fin = document.getElementById("hg").value;
        if(time_debut == '' || time_fin == '') {
            alert("Preencha todos os campos!");
        }
        else if (time_debut > time_fin){
            alert("Maior");
        }
        else {
            document.getElementById("formulario").submit();
        }   
    }

