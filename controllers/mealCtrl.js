app.controller('MealCtrl', function() {

    var vm = this;

	initializeForm(); //sets the properties for data object


    vm.addMeal = function() {

    	console.log("meal_form:", vm.meal_form);
    
        
	    var meal = vm.data;
	    meal.tax = meal.taxRate * meal.price / 100; //find percent of tax
	    meal.subtotal = meal.price + meal.tax;
	    meal.tip = meal.subtotal * meal.tipPercentage / 100;
	    meal.totalPrice = meal.subtotal + meal.tip;
	    meal.tipTotal = meal.tip + meal.tipTotal; //adds each tip to each submitted tip
	    meal.mealCount++; //each time the meal is submitted, 1 is added
	    meal.averageTip = meal.tipTotal / meal.mealCount;
	    console.log("the data:", meal);

        setBackFields(meal);
    }

    function setBackFields(meal) {
        meal.taxRate = 0;
        meal.price = 0;
        meal.tipPercentage = 0;
        vm.meal_form.$setPristine();
    }

    vm.reset = function() {
        initializeForm();
        setBackFields();
    }

    vm.cancel = function() {
        var meal = vm.data;
        meal.price = 0;
        meal.taxRate = 0;
        meal.tipPercentage = 0;
        vm.meal_form.taxRate = 0;
        vm.meal_form.setPristine;
    }
 
    function initializeForm() {
        vm.data = {
            price: 0,
            taxRate: 0,
            tipPercentage: 0,
            tax: 0,
            subtotal: 0,
            tip: 0,
            totalPrice: 0,
            tipTotal: 0,
            mealCount: 0,
            averageTip: 0
        }
    }
});