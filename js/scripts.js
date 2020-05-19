
//user interface logic
$(document).ready(function() {
  $("#add").click(function(e) {
    e.preventDefault();
    // $(".cart-wrapper").slideToggle();
    // $(".cart-container").slideDown();
    var size = $("#size").val();
    var quantity = $("#quantity").val();
    var crust = $("#crust").val();
    var topping = $("#toppings").val();
    var type = $("input[name=pizzaType]:checked").val();


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