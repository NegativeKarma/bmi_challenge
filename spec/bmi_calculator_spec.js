describe("BMICalculator", function() {
  var calculator;
  var person;

  describe("Metric system", function() {
    beforeEach(function() {
      person= new Person({weight: 90, height: 186});
      calculator = new BMICalculator();
    });

    it("calculates BMI for a person using metric method", function() {
      calculator.metric_bmi(person);
      expect(person.bmiValue).toEqual(26.01);
    });
  });

  describe("Imperial system", function() {
    beforeEach(function() {
      person= new Person({weight: 165, height: 72});
      calculator = new BMICalculator();
    });

    it("calculates BMI for a person using imperial method", function() {
      calculator.imperial_bmi(person);
      expect(person.bmiValue).toEqual(22.38);
    });
  });

});
