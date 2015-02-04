describe('homepage', function() {
  before(function() {
    casper.start('http://localhost:9999');
  });

  it('displays hello world', function() {
    casper.then(function() {
      expect("body").to.have.text("Hello World!");
    });
  });
});