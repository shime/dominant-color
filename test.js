var colour  = require('./'),
    expect  = require('expect.js'),
    imgPath = './purr.jpg'

describe('dominant-colour', function(){
  it('works', function(done){
    colour(imgPath, function(err, colour){
      expect(colour).to.be('5b6c6e')
      done()
    })
  })

  it ('supports options like format', function(done){
    colour(imgPath, {format: 'rgb'}, function(err, colour){
      expect(colour).to.eql(['91', '108', '110'])
      done()
    })
  })
})
