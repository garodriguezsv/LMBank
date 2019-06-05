var aplicacion = angular.module('myapp', ["ui.router"])
aplicacion.config(function($stateProvider, $urlRouterProvider) {

    /*
    Angular route
    */
    $urlRouterProvider.otherwise("home")

    $stateProvider
        .state('consultaprodbac', {
            url: "/consultaprodbac",
            templateUrl: "partials/consultaprodbac.html",
            resolve: {
                delay: function($timeout) {
                    return $timeout(function() {}, 1000);
                }
            }
        })

    .state('consultatransacciones', {
        url: "/consultatransacciones",
        templateUrl: "partials/consultatransacciones.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('pagotarjetapropia', {
        url: "/pagotarjetapropia",
        templateUrl: "partials/pagotarjetapropia.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('pagoprestamo', {
        url: "/pagoprestamo",
        templateUrl: "partials/pagoprestamo.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('beneficiarios', {
        url: "/beneficiarios",
        templateUrl: "partials/beneficiarios.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('updatebeneficiarios', {
        url: "/updatebeneficiarios",
        templateUrl: "partials/updatebeneficiarios.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('deletebeneficiarios', {
        url: "/deletebeneficiarios",
        templateUrl: "partials/deletebeneficiarios.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('transferterceros', {
        url: "/transferterceros",
        templateUrl: "partials/transferterceros.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('pagotarjetaterceros', {
        url: "/pagotarjetaterceros",
        templateUrl: "partials/pagotarjetaterceros.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('migrarsaldos', {
        url: "/migrarsaldos",
        templateUrl: "partials/migrarsaldos.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    .state('pagoprestamoterceros', {
        url: "/pagoprestamoterceros",
        templateUrl: "partials/pagoprestamoterceros.html",
        resolve: {
            delay: function($timeout) {
                return $timeout(function() {}, 1000);
            }
        }
    })

    /*
    Fin de Angular route
    */

    /*HOME PAGE*/
    .state('home', {
            url: "/home",
            templateUrl: "partials/home.html",
            resolve: {
                delay: function($timeout) {
                    return $timeout(function() {}, 1000);
                }
            }
        })
        /*FIN DE HOME PAGE*/

}).run(function($rootScope) {
    $rootScope.$on('$stateChangeStart', function() {
        $rootScope.stateLoading = true;
    })

    $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.stateLoading = false;
    })
})