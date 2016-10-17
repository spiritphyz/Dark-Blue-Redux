angular.module('voteApp', [])
  .controller('voteCtrl', function($scope) {
    $scope.maps = {
      '1': { 
        thumbnail: '',
        votes: 0
      },
      '2': { 
        thumbnail: '',
        votes: 0
      },
      '3': { 
        thumbnail: '',
        votes: 0
      },
      '4': { 
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
      if (currVotes > -1) {
        currVotes -= 1;
      }
      console.log(`🍊  downvote called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };
  });