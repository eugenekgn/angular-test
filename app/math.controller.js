(function() {
    var app = angular.module('math.tools');

    app.controller('MathController', MathController);

    function MathController(mathService) {
        var vm = this

        vm.add = (a, b) => a + b;

        vm.subtract = (a, b) => a - b;

        vm.multiply = (a, b) => a * b;

        vm.pow = (a, b) => {
            return mathService.pow(a, b);
        }
    }
})();
