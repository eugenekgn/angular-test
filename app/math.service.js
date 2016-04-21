(function(){
  'use strict';

  var app = angular.module('math.tools')

  app.service('mathService', mathService);

  function mathService(){
    this.pow = (a,b) => Math.pow(a,b)
  }
})()
