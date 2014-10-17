# dominant-color

[![Build Status](https://travis-ci.org/shime/dominant-color.svg)](https://travis-ci.org/shime/dominant-color)

Gets dominant colour of an image. ~10 times faster than [color-thief](https://www.npmjs.org/package/color-thief) because it uses plain old [imagemagick](https://www.npmjs.org/package/imagemagick) instead of canvas.

## installation

    npm install dominant-color

## example

```javascript
var color   = require('dominant-color'),
    imgPath = './path/to/your/image.jpg'

color(imgPath, function(err, color){
  // hex color by default
  console.log(color) // '5b6c6e'
})

color(imgPath, {format: 'rgb'}, function(err, color){
  console.log(color) // ['91', '108', '110']
})
```

Options: 

* `format` - 'hex' or 'rgb', defaults to 'hex'

## alternatives

* [color-thief](https://www.npmjs.org/package/color-thief)
* [colour-extractor](https://www.npmjs.org/package/colour-extractor)

## license

ISC
