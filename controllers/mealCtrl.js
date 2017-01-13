app.controller('MealCtrl', ['$scope', function($scope) {

	/*$scope.calcTip = function(total) {
        var total = total * 1.2;
        console.log("total for meal with tip is:", total)
    }
    
    $scope.calcTax = function(rate) {
        var withTax = rate * 1.09;
        console.log("meal with tax:", withTax)
        $scope.calcTip(withTax);
    }
    
    $scope.addMeal = function(meal) {
        $scope.calcTax(meal);    
    }*/

    initializeForm(); //sets variables for our data


    $scope.addMeal = function() {

    	console.log("meal_form:", $scope.meal_form);
    
        
	    var meal = $scope.data;
	    meal.tax = meal.taxRate * meal.price / 100; //find percent of tax
	    console.log("the tax is ", meal.tax )
	    meal.subtotal = meal.price + meal.tax;
	    console.log("meal with tax is ", meal.subtotal);
	    meal.tip = meal.subtotal * meal.tipPercentage / 100;
	    console.log("tip is ", meal.tip);
	    meal.totalPrice = meal.subtotal + meal.tip;
	    meal.tipTotal = meal.tip + meal.tipTotal; //adds each tip to each submitted tip
	    console.log("total number of tips", meal.tipTotal);
	    meal.mealCount++; //each time the meal is submitted, 1 is added
	    meal.averageTip = meal.tipTotal / meal.mealCount;
	    console.log("the data:", meal)
    	
    }

    $scope.reset = function() {
        initializeForm();
        $scope.mealForm.$setPristine();
    }

    $scope.cancel = function() {
        var meal = $scope.data;
        meal.price = 0;
        meal.taxRate = 0;
        meal.tipPercentage = 0;
        $scope.mealForm.taxRate = 0;
        $scope.mealForm.$setPristine();
    }
 
    function initializeForm() {
        $scope.data = {
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
}])