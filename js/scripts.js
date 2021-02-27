


$(document).ready(function () {
  $("form#new-order").submit(function (event) {
    // var newPizza = new pizza(inputtedName, inputtedSize, inputtedToppings, computedPrice);
    event.preventDefault();
    let inputtedName = $("input#new-name").val();
    let inputtedSize = $("input:radio[name=size]:checked").val()
    let inputtedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function () { inputtedToppings.push($(this).val()); });
    console.log(inputtedName, inputtedSize, inputtedToppings)
    // $('input[type=checkbox]').prop('checked', false);

  });
});
