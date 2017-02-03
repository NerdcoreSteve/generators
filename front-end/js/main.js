require('whatwg-fetch')
require('babel-polyfill')

const
    R = require('ramda'),
    generators = require('../../generators'),
    tap = x => { console.log(x); return x }

generators()
