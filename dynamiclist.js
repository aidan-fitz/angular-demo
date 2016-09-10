/**
 * AngularJS demo
 * Copyright (c) 2016 by Aidan Fitzgerald, The Social Hacks Team.
 * #include <MIT_License.h>
 */

var socialHacks = angular.module('socialHacks', []);

var loadSponsors = function($scope, $http) {

/*  $scope.sponsors = [
    {
      "name": "Balsamiq",
      "url": "https://balsamiq.com/",
      "logo": "img/balsamiq.svg",
      "tier": "silver",
      "blurb": "Balsamiq is the maker of <a href=\"https://balsamiq.com/products/mockups\">Mockups</a> \u2013 the rapid wireframing software that combines the simplicity of paper sketching with the power of a digital tool so that teams can focus on what's important. Balsamiq is a small and personable company that competes on usability and customer service. Balsamiq believes work should be fun, and that life is too short for bad software."
    },
    {
      "name": "Woogle",
      "url": "http://woogle.example/",
      "logo": "http://www.gujian.net/woogle/images/woogle.png",
      "tier": "bronze",
      "blurb": "Woogle is a made-up company. Apparently it's a product too."
    }
  ]; */

  // download the sponsor list in a JSON file...
  $http.get("sponsors.json").success(function(response) {

    document.write(response);
    // ... and put it in the scope
    //$scope.sponsors = JSON.parse(response);
  });

};

// need to add $http. Creds to http://stackoverflow.com/a/22125671/2276567
socialHacks.controller('SponsorListCtl', ['$scope', '$http', loadSponsors]);
