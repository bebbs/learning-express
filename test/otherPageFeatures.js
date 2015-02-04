describe('Pages', function() {
  before(function() {
    casper.start('http://localhost:9999/about');
  });

  it('Visiting the about page', function() {
    casper.then(function() {
      expect('body').to.have.text('This is the about page');
    });
  });

});