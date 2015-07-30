describe('factory: Search', function() {

  var search;

  beforeEach(module('GitUserSearch'));
  // call the app module - otherwise it isnt available in the tests

  beforeEach(inject(function(Search) {
    search = Search;
  }));
  // inject the Search factory into the module so that you can make references to it and therefore use it in the tests

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("https://api.github.com/search/users?q=hello")
      .respond(
        { items: items }
      );
  }));
  // inject httpBackend into the module and give it the stub info so that is returned in the tests

  var items = [
    {
      "login": "tansaku",
      "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
      "html_url": "https://github.com/tansaku"
    },
    {
      "login": "stephenlloyd",
      "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
      "html_url": "https://github.com/stephenlloyd"
    }
  ];

  it('responds to query', function() {
    expect(search.query).toBeDefined();
  });

  it('returns search results', function() {
  search.query('hello')
    .then(function(response) {
      expect(response.data).toEqual(items)
    })
})
});
