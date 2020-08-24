var app = angular.module('myMDB', []);

app.controller('MoviesController', function ($scope, $http) {
    $scope.test = 'This is a test';
    
    $http.get('https://raw.githubusercontent.com/prabalman/movieDatabase/master/assets/movies.json', { cache: false })
        .then(function (res) { 
            console.log(res.data);
            $scope.movies = res.data;
        });
});