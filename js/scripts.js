// BUSINESS LOGIC
var outputname = function  (){
    var size = (document.getElementByName('choose').value).toUpperCase();
    var toppings = (document.getElementByName('select').value).toUpperCase();
    var crust = (document.getElementByName('select').value).toUpperCase();
    var delivery = (document.getElementById('delivery').value).toUpperCase();
    var pickup = (document.getElementById('pickup').value).toUpperCase();

    var x = size;
    var y = toppings;
    var z = crust;
    var d = delivery;
    var p = pickup
    var total = [600, 800, 1000, 1200, 200, 150];
};    
//USER INTERFACE
if(!isNaN(size)) {
    alert("please enter a standard Size");
    return;
  }else if(x=="SMALL" && d=="YES"){
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 600";
    document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 300";
    total = total[0] + total[3] + total[4];
    var s = (prompt("Please add your location for delivery."));
    alert("Thank for reaching out to us. Your Order will be delivered to "+s );
  }else if(x=="MEDIUM" && d=="YES") {
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 800";
    document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 300";
     total = total[1] + total[3] + total[4];
     var m = (prompt("Please your location for delivery."));
     alert("Thank for reaching out to us. Your Order will be delivered to "+m );
  }else if(x=="LARGE" && d=="YES"){
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1000";
    document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 300";
    total = total[2] + total[3] + total[4];
    var l = (prompt("Please your location for delivery."));
    alert("Thank for reaching out to us. Your Order will be delivered to "+l );
  }else if(x=="EXTRALARGE" && d=="YES"){
    document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1200";
    document.getElementById("re").innerHTML="DELIVERY COST IS  Ksh 300";
    total = total[2] + total[3] + total[4];
    var l = (prompt("Please your location for delivery."));
    alert("Thank for reaching out to us. Your Order will be delivered to "+l );
  
  }else if(x=="SMALL"){
      document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 600";
      total = total[0] + total[3];
    }else if(x=="MEDIUM") {
      document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 800";
       total = total[1] + total[3];
    }else if(x=="LARGE"){
      document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1000";
      total = total[2] + total[3];
    }else if(x=="EXTRALARGE"){
        document.getElementById("dem").innerHTML="PIZZA SIZE  "+ x + " Ksh 1200";
        total = total[2] + total[3];
  }else if (isNaN(size)) {
    alert("please enter a standard Size");
    return;
  }
  
  if (y=="PEPPERONI" || y=="MARGHERITA" || y=="BARBEQUE" || y=="CAPRICCIOSA" || y=="PINEAPPLE/HAM" || y=="SUPREME" || y=="SAUSAGE/KALES" || y=="POTATOES/ROSEMARY" || y=="EXTRA CHEESE" ) {
      document.getElementByName("check").innerHTML="TOPPPING:  "+ y + "Ksh 100";
  }else {
    alert("Please enter your preferred topping.");
    return;
  }
  
  if (z=="THIN CRUST" || z=="THICK CRUST" || z=="GLUTEN-FREE" || z=="MEAT-STUFFED CRUST" || z=="CHEESE-STUFFED CRUST" ) {
      document.getElementByName("choose").innerHTML="CRUST:  "+ z + "Ksh 100";
  }
  else {
    alert("Please enter your preferred crust.");
    return;
  }
    document.getElementById("demoos").innerHTML="TOTAL IS "+ total;

