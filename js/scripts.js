//user interface logic
$(document).ready(function() {
  $("#add").click(function(e) {
    e.preventDefault();
    $(".cart-wrapper").slideToggle();
    $(".cart-container").slideDown();
    var size = $("#size").val();
    var quantity = $("#quantity").val();
    var crust = $("#crust").val();
    var topping = $("#toppings").val();
    var type = $("input[name=pizzaType]:checked").val();
     

    const pizzaSizes = [
      {
        size: "extra large",
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
        price: 600
      }
    ];
    const pp = pizzaSizes.find(u => u.size === size);
    console.log(pp.price);
    var pizzaCrusts = [
      {
        crust: "thin crust",
        price: 100
      },
      { 
        crust: "thick crust",
        price: 100
      },
      {
        crust: "gluten-free",
        price: 150
      },
      {
        crust: "meat-stuffed",
        price: 150
      },
      {
        crust: "cheese-stuffed",
        price: 150
      }
    ];
    const resultCrust = pizzaCrusts.find(u => u.crust === crust);
    console.log(resultCrust.price);

    const pizzaToppings = [
      { topping: "none", price: 0 },
      { topping: "Beef", price: 150 },
      { topping: "Chicken", price: 100 },
      { topping: "extra cheese", price: 150 },
      { topping: "sausage", price: 150 },
      { topping: "onions", price: 100 },
      { topping: "pineapple", price: 150 }
    ];
    const resultToppings=pizzaToppings.find(u=> u.topping===toppings);
    console.log(resultToppings.price)
    var size=parseInt(pp.price);
     alert(size)
    var crust= parseInt(resultCrust.price);
     alert(crust)
    var toppings=parseInt(resultToppings.price);
     alert(toppings);
    var quantity=parseInt(quantity);
     alert(quantity)
    function total(toppings,crust,size) {
       return toppings+crust+size;
        
    }
    var results=total(toppings,crust,size);
         alert(results)
        function totalPrice(results,quantity) {
            return results*quantity;
        }
        var grandTotal=totalPrice(results,quantity);
         alert(grandTotal);

        var newOrder = new Pizza(size, topping, crust, quantity, type, grandTotal);
        cart.push(newOrder);
         $(".cartSum").html(cart);
         console.log(cart)
        var yes = cart.reduce((accumulator, currentValue) => 
            accumulator + currentValue.price, 0
        )
        $(".cartTotal").html(yes);
        console.log(yes)
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

//business logic
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
