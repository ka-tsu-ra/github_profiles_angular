githubUserSearch.controller('GitUserSearchController', ['Search', 'Repos', function(Search, Repos) {
  var self = this;

  self.doSearch = function() {
    if (self.searchTerm !='') {
      self.lastSearchTerm = self.searchTerm;
      Search.query(self.searchTerm)
        .then(function(response) {
          self.searchResult = response.data;
        });
      Repos.query(self.searchTerm)
        .then(function(response) {
          console.log(response.data)
          self.repoResult = response.data;
        });
    }
  };


}]);
