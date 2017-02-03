const
    R = require('ramda')

module.exports = () => {
    //Simple generator example
    const
        starFunction = function* () {
            yield 'thing'
        },
        gen1 = starFunction()

    R.range(1, 3).forEach(() => console.log(gen1.next()))
    /*
        prints:
        { value: 'thing', done: false }
        { value: undefined, done: true }
    */

    //we can use while and for loops here too
    const
        gen2 = (function* () {
            var i = 0
            while(i < 3) yield i++
        })(),
        runGen = (n, gen) => R.range(1, n).forEach(() => console.log(gen.next().value))

        runGen(6, gen2)
    /*
        prints:
        0
        1
        2
        undefined
        undefined
    */

    //In fact, we can loop a generator forever
    const
        gen3 = (function* () {
            var i = 0
            while(true) yield i++
        })()

        runGen(6, gen3)
    /*
        prints:
        0
        1
        2
        3
        4
    */
}
