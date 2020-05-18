function makeFullOrder()
{
  var checkoutName = getCookie("name");
  var pizza = getCookie("pizzaType");
  return checkoutName + " ordered a " + pizza + " pizza";
}