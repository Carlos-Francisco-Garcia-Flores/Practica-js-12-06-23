var fr1 = document.getElementById("pesosAdolar")

fr1.addEventListener("click", function(Evento1) {
    var pesosMX = document.getElementById("pesos").value
    var Pdolars = document.getElementById("Pdolares").value
    
    var result = pesosMX / Pdolars
    
    alert ("La cantidad de " + pesosMX + " pesos en dolares es de: $" + result + " dolares")
 })


 var fr2 = document.getElementById("dolarApesos")

fr2.addEventListener("click", function(Evento2) {
    var dolares = document.getElementById("dolares").value
    var Pdolars2 = document.getElementById("Pdolares2").value
    
    var resultado2 = dolares * Pdolars2
    
    alert ("La cantidad de " + dolares + " dolares en pesos es de: $" + resultado2 + " pesos")
 })


 var limp = document.getElementById("LC1")

 limp.addEventListener("click", function(Limpiar) {
 
    var pesosMXInput = document.getElementById("pesos");
    var PdolarsInput = document.getElementById("Pdolares");

    pesosMXInput.value = ""
    PdolarsInput.value = ""

  })

  var limp2 = document.getElementById("LC2")

  limp2.addEventListener("click", function(Limpiar) {
     var dolaresInput = document.getElementById("dolares");
     var Pdolars2Input = document.getElementById("Pdolares2");

     dolaresInput.value = ""
     Pdolars2Input.value = ""

   })

  