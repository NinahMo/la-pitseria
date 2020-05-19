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

    let cart = [];

    let newOrdercart = [];
     let netPrice = 0
    
    function Pizza(size, toppings, crust, quantity, type, price) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.quantity = quantity;
      this.type = type;
      this.price = price;
    }
    
    //user interface logic
    $(document).ready(function() {
      $("#add").click(function(e) {
        e.preventDefault();
        // $(".cart-wrapper").slideToggle();
        // $(".cart-container").slideDown();
        var pSize = $("#size").val();
        var pQuant = $("#quantity").val();
        var pCrust = $("#crust").val();
        var pTop = $("#toppings").val();
        var pType = $("input[name=pizzaType]:checked").val();
    
    
        const pizzaSizes = [
          {
            size: "mega",
            price: 1200
          },
          {
            size: "large",
            price: 1000
          },
          {
            size: "medium",
            price: 800
          },
          {
            size: "small",
            price: 500
          }
        ];
        const pp = pizzaSizes.find(u => u.size === pSize);
        console.log(pp.price);
        var pizzaCrusts = [
          {
            crust: "stuffed",
            price: 200
          },
          {
            crust: "gluten-free",
            price: 250
          },
          {
            crust: "crispy",
            price: 200
          }
        ];
        const resultCrust = pizzaCrusts.find(u => u.crust === pCrust);
        console.log(resultCrust.price);
    
        const pizzaToppings = [
          { topping: "none", price: 0 },
          { topping: "pepperoni", price: 150 },
          { topping: "Mushroom", price: 100 },
          { topping: "Blackolives", price: 150 },
          { topping: "Greenpeppers", price: 100 },
          { topping: "extra cheese", price: 150 },
          { topping: "sausage", price: 150 },
          { topping: "onions", price: 100 },
          { topping: "pineapple", price: 150 }
        ];
        const resultToppings=pizzaToppings.find(u=> u.topping===pTop);
        console.log(resultToppings.price)
        var size=parseInt(pp.price);
        // alert(size)
        var crust= parseInt(resultCrust.price);
        // alert(crust)
        var toppings=parseInt(resultToppings.price);
        // alert(toppings);
        var quantity=parseInt(pQuant);
    
        // alert(quantity)
        function total(toppings,crust,size) {
           return toppings+crust+size;
            
        }
        var results=total(toppings,crust,size);
            // alert(results)
            function totalPrice(results,quantity) {
                return results*quantity;
            }
            var grandTotal=totalPrice(results,quantity);
            // alert(grandTotal);
    
            var newOrder = new Pizza(pSize, pTop, pCrust, pQuant, pType, grandTotal);
            cart.push(newOrder);
            // $(".cartSum").html(cart);
            // console.log(cart)
            var yes = cart.reduce((accumulator, currentValue) => 
                accumulator + currentValue.price, 0
            )
            console.log(yes)
            $(".cartTotal").html(yes);
    
            $(".cartSum").html(cart.length);
    
            cart.map(({
                crust,
            quantity,
            size,
            toppings,
            type,
            price,
            
            }) => {
            
              $("ul#orders").append(`
              <li class="row" style="flex-wrap: nowrap">
              <img src="css/images/${type}.jpeg" />
              <div style="flex: 1">
                  <h5>${type}</h5>
                  <p>Size: ${size}</p>
                  <p>Toppings: ${toppings}</p>
                  <p>Quantity: ${quantity}</p>
                  <p>Crust: ${crust}</p>
                  <p> price${price}</p>
                  
              </div>
            </li>`);
            
            })
      });
      var place;
      $("#deliver").click(function(e){
          e.preventDefault
         place=prompt("Please enter your location:");
        var email=prompt("Enter your email address:")
        })
    
        $("#view").click(function(e) {
            e.preventDefault();
            $(".cart-wrapper").slideToggle();
            $(".cart-container").slideDown();
        });
        $("#checkout").click(function(e) {
            e.preventDefault();
            $(".cart-wrapper").slideToggle();
            $(".cart-container").slideDown();
            alert("Your pizza will be delivered in" + place);
        });
    })