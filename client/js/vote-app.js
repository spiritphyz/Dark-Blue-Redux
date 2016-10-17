angular.module('voteApp', [])
  .controller('voteCtrl', function($scope) {
    $scope.maps = {
      '1': { 
        mapId: 1,
        description: '',
        thumbnail: '',
        votes: 0
      },
      '2': { 
        mapId: 2,
        description: '',
        thumbnail: '',
        votes: 0
      },
      '3': { 
        mapId: 3,
        description: '',
        thumbnail: '',
        votes: 0
      },
      '4': { 
        mapId: 4,
        description: '',
        thumbnail: '',
        votes: 0
      },
    };

    $scope.getVotes = function(mapNum) {
      return $scope.maps[mapNum].votes;
      console.log(`🍊  getVotes called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };

    $scope.upvote = function(mapNum) {
      var currVotes = $scope.maps[mapNum].votes;
      if (currVotes < Number.MAX_VALUE) {
        $scope.maps[mapNum].votes += 1;
      }
      console.log(`🍊  upvote called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };

    $scope.downvote = function(mapNum) {
      var currVotes = $scope.maps[mapNum].votes;
      if (currVotes > 0) {
        $scope.maps[mapNum].votes -= 1;
      }
      console.log(`🍊  downvote called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };
  });