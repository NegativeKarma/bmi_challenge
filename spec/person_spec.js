describe("Person", function() {
  var person;

  describe("Metric system", function() {
    beforeEach(function() {
      person = new Person({weight: 90, height: 186});
    });

    it("should have weight of 90", function() {
      expect(person.weight).toEqual(90);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(186);
    });
    it("should calculate BMI value", function() {
      person.calculate_bmi();
      expect(person.bmiValue).toEqual(26.01);
    });
    it("should have a BMI message", function() {
      person.calculate_bmi();
      expect(person.bmiMessage).toEqual("Overweight");
    });
  });

  describe("Imperial system", function() {
    beforeEach(function() {
      person = new Person({weight: 165, height: 72});
    });

    it("should have weight of 165", function() {
      expect(person.weight).toEqual(165);
    });

    it("should have height of 186", function() {
      expect(person.height).toEqual(72);
    });
    it("should calculate BMI value", function() {
      person.calculate_imperial_bmi();
      expect(person.bmiValue).toEqual(22.38);
    });
    it("should have a BMI message", function() {
      person.calculate_imperial_bmi();
      expect(person.bmiMessage).toEqual("Normal");
    });
  });

});
