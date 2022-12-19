people = document.getElementById('people').value;
bill = document.getElementById("bill").value;

function fix() {
  if (people === document.getElementById('people').value ){ //me toco igualarla asi ya que no me tomaba el === 0
      document.getElementById("text").style.display = "block"
      document.getElementById('people').style.borderColor = "rgb(207, 129, 98)";
      document.getElementById('people').style.borderStyle = "solid";
    } else  {
      return true;
  }
  }  // esta funcion me valida el input mediante un onchage, si el input es igual a 0 me renderiza un mensaje en otro div //



 document.querySelectorAll('button').forEach(button => { // es un for earch para que me dispare la function cuando  clickee cualquiera de los botones
    button.addEventListener('click', () => {
        let fired_button = button.value;
        people = Number(document.getElementById('people').value); // coloco number para que me agarre en numero el valor de ese input
        bill = Number(document.getElementById("bill").value);
        let tip = + ((fired_button * bill / people).toFixed(2)) ; // El tofixed hace que el resultado se muestre con 2 decimales no mas, inicia con el + para que me agarre bien el numero para la sma de la casilla de abajo
        document.getElementById("tip").value = "$" + tip // agarro el resultado de la variable anterior y le adiciono el symbol pesos
        let total =  bill / people + tip;
        document.getElementById("total").value = "$" +total; // agarro el resultado de la variable anterior y le adiciono el symbol pesos
    });
});  // esta funcion se desata por un click en alguno de los botones el cual me da luego de llenar las casillas
    // de bill y # of people ... el total de la tip per person y la total per person 

   document.getElementById("custom").addEventListener('change', () => { 
        let custom = Number(document.getElementById("custom").value) / 100; // transformo el digito de la casilla custom a numero y lo devido en 100 para poder hacer las operaciones de abajo
        people = Number(document.getElementById('people').value); 
        bill = Number(document.getElementById("bill").value);
        let tip =  custom * bill / people;
        document.getElementById("tip").value = "$" + tip 
        let total =  bill / people + tip;
        document.getElementById("total").value = "$" +total; 
   }); // formula parecida a la de arriba pero para la casilla de custom


   function reset()  {
     document.getElementById('people').value = "";
     document.getElementById("bill").value = "";
   } // con esta function el boton reset me borra los valores de bill y # persions para hacer la cuenta de nuevo de la tip