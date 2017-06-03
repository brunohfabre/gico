angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//$locationProvider.html5Mode(true)

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
		})

        .state('amarelo', {
			url: '/amarelo',
			templateUrl: 'views/amarelo.html',
            controller: 'amareloCtrl'
		})

        .state('verde', {
			url: '/verde',
			templateUrl: 'views/verde.html',
            controller: 'verdeCtrl'
		})

        .state('vermelho', {
			url: '/vermelho',
			templateUrl: 'views/vermelho.html',
            controller: 'vermelhoCtrl'
		})

        .state('admin', {
			url: '/admin',
			templateUrl: 'views/admin.html',
            controller: 'adminCtrl'
		})

		$urlRouterProvider.otherwise('/home')

		
})
