// Foodie2Foodie
"use strict";

const foodie = angular.module("foodie", []);

foodie.controller("mainCtrl", ($scope) => {
  $scope.welcome = "Welcome to Foodie2Foodie";
  console.log("loaded...");
});
