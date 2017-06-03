angular.module('app').controller('amareloCtrl', function($scope, $http) {
    $scope.audio_1 = function(audio) {
        $http.post('http://localhost:3003/api/respostas/', audio).then(function (response) {
        });
    };
})