//alert("Hello World!");

var colorArray = [ "#d5ebf0", 
                   "#b3f2c4", 
                   "#ecf7b5", 
                   "#f7e0b5", 
                   "#efd5f0" ];
var i = 0;
function changeColor() { 
                        document.body.style.background = colorArray[i];
                        i++;
                        console.log(colorArray[i]);
                        if(i > colorArray.length - 1) { i = 0;}
                       }
function selectColor() {
	                    let color = document.getElementById("color").value;
                        
                        document.body.style.background = color;
                        
                        console.log(color);

                       }