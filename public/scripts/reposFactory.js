githubUserSearch.factory('Repos', ['$http', function($http) {
// inject the $http into the factory, so that you can then use it. you have to pass it in as an argument in the function so that you can then make referneces to it in the body and use it.

  // var queryUrl = 'https://api.github.com/users' + searchTerm + '/repos';

  return {
    query: function(searchTerm) {
      return $http({
        url: 'https://api.github.com/users/' + searchTerm + '/repos',
        method: 'GET',
        params: {
          // 'q': searchTerm
          'access_token': token
        }
      });
    }
  }
}]);
