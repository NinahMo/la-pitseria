// bussiness logic

function TotalAmount(size, crust, toppings) {
    this.sizeName = size;
    this.crustName = crust;
    this.toppingsName = toppings;
}
    var pizzaSize;
    var pizzaCrust;
    var pizzaToppings=[];
    var delivery;
    var totaltopping;
    
    function getToppingPrice(){
      return pizzaToppings.length * 100
    };
    function getTotal(){
        return pizzaCrust + pizzaSize + delivery + getToppingPrice();
    };
    var singlePizzaPrice;
var deliveryPrice = 300;
order.prototype.price = function () {
  var smallPrice = 600;
  var mediumPrice = 800;
  var largePrice = 1000;
  var extraLargePrice = 1200;
  var crustPrice;
  var singleToppingPrice;
  var toppingsPrice = 0;
  var totalPrice;
  switch (this.crust) {
    case "thinCrust":
      crustPrice = 100;
      break;
    case "thickCrust":
      crustPrice = 100;
      break;
    case "glutten-free":
      crustPrice = 150;
      break;
    case "meatStuffedCrust":
      crustPrice = 150;
      break;
    case "cheeseStuffedCrust":
      crustPrice = 150;
    default:
      crustPrice = 0;
  }
  if (this.size == "small") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 100;
          break;
        case "margheritta":
          singleToppingPrice = 80;
          break;
        case "cheese(extra)":
          singleToppingPrice = 100;
          break;
        case "barbeque":
          singleToppingPrice = 100;
          break;
        case "capricciosa":
          singleToppingPrice = 120;
          break;
        case "pineapple/ham":
          singleToppingPrice = 100;
          break;
        case "supreme":
          singleToppingPrice = 120;
          break;
        case "sausage/kales":
          singleToppingPrice = 100;
          break;
        case "potatoes/rosemary":
          singleToppingPrice = 80;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    singlePizzaPrice = toppingsPrice + crustPrice + smallPrice;
    if (this.deliver == "yes") {
      totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
    } else {
      totalPrice = singlePizzaPrice * this.quantity;
    }
  }
  if (this.size == "medium") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 100;
          break;
        case "margheritta":
          singleToppingPrice = 80;
          break;
        case "cheese(extra)":
          singleToppingPrice = 100;
          break;
        case "barbeque":
          singleToppingPrice = 100;
          break;
        case "capricciosa":
          singleToppingPrice = 120;
          break;
        case "pineapple/ham":
          singleToppingPrice = 100;
          break;
        case "supreme":
          singleToppingPrice = 120;
          break;
        case "sausage/kales":
          singleToppingPrice = 100;
          break;
        case "potatoes/rosemary":
          singleToppingPrice = 80;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    singlePizzaPrice = toppingsPrice + crustPrice + mediumPrice;
    if (this.deliver == "yes") {
      totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
    } else {
      totalPrice = singlePizzaPrice * this.quantity;
    }
  }
  if (this.size == "large") {
    this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
          singleToppingPrice = 100;
          break;
        case "margheritta":
          singleToppingPrice = 80;
          break;
        case "cheese(extra)":
          singleToppingPrice = 100;
          break;
        case "barbeque":
          singleToppingPrice = 100;
          break;
        case "capricciosa":
          singleToppingPrice = 120;
          break;
        case "pineapple/ham":
          singleToppingPrice = 100;
          break;
        case "supreme":
          singleToppingPrice = 120;
          break;
        case "sausage/kales":
          singleToppingPrice = 100;
          break;
        case "potatoes/rosemary":
          singleToppingPrice = 80;
          break;
        default:
          singleToppingPrice = 0;
      }
      toppingsPrice += singleToppingPrice;
    });
    if (this.size == "extraLarge") {
        this.toppings.forEach(function(topping) {
      switch (topping) {
        case "pepperoni":
        singleToppingPrice = 100;
        break;
        case "margheritta":
        singleToppingPrice = 80;
        break;
        case "cheese(extra)":
        singleToppingPrice = 100;
        break;
        case "barbeque":
        singleToppingPrice = 100;
        break;
        case "capricciosa":
        singleToppingPrice = 120;
        break;
        case "pineapple/ham":
        singleToppingPrice = 100;
        break;
        case "supreme":
        singleToppingPrice = 120;
        break;
        case "sausage/kales":
        singleToppingPrice = 100;
        break;
        case "potatoes/rosemary":
        singleToppingPrice = 80;
        break;
       default:
        singleToppingPrice = 0;
        }
         toppingsPrice += singleToppingPrice;
        });
        singlePizzaPrice = toppingsPrice + crustPrice + smallPrice;
        if (this.deliver == "yes") {
          totalPrice = (singlePizzaPrice * this.quantity) + deliveryPrice;
        } else {
          totalPrice = singlePizzaPrice * this.quantity;
        }
      }
    ("form").click(function (ninah) {
        var client = document.getElementByName('place-your-order').value;
        alert(' Dear ' + 'customer' + ' your order has been received successfully and will be delievred to your respective location.')
        ninah.preventDefault();
      });
    
function yourOrder() {
  var yourOrder = getCookie("name");
  var pizza = getCookie("pizzaType");
  return yourOrder + " ordered a " + pizza + " pizza";
    }
}};
