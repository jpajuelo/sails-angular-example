
angular.module('UserModule')
  .directive('ngcUnique', ['$http', function ($http) {
    return {

      require: 'ngModel',

      link: function(scope, element, attrs, controller) {
        scope.$watch(attrs.ngModel, function () {
          var user = {};

          user[attrs.ngcUnique] = attrs.ngModel;

          $http({
            method: 'POST',
            url: '/api/user/validate/',
            data: user
          }).error(function(data) {
            if (data.invalidAttributes[attrs.ngcUnique]) {
              controller.$setValidity('unique', data.invalidAttributes[attrs.ngcUnique].some(function (validationError) {
                return validationError.rule == 'unique';
              }));
            } else {
              controller.$setValidity('unique', true);
            }
          });

        });
      }

    };
  }]);
