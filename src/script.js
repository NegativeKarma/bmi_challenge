$(document).ready(function () {
  $('#calculate').click(function () {
    var w = parseFloat($('#weight').val());
    var h = parseFloat($('#height').val());
    var person = new Person({weight: w, height: h});
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are '+ person.bmiMessage);
  });
  $('#checkbox').click(function () {
    $('#calculate').click(function () {
      var w = parseFloat($('#weight').val());
      var h = parseFloat($('#height').val());
      var person = new Person({weight: w, height: h});
      person.calculate_imperial_bmi();
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('and you are '+ person.bmiMessage);
    });
  });
});
