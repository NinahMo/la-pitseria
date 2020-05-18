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
function makeFullOrder()
{
  var checkoutName = getCookie("name");
  var pizza = getCookie("pizzaType");
  return checkoutName + " ordered a " + pizza + " pizza";
}
