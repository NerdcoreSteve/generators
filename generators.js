//TODO re-confirm what gets printed out
const
    R = require('ramda')

module.exports = () => {
    //Simple generator example
    const
        starFunction = function* () {
            yield 'thing'
        },
        gen1 = starFunction()

    R.range(0, 2).forEach(() => console.log(gen1.next()))
    /*
        prints:
        { value: 'thing', done: false }
        { value: undefined, done: true }
    */

    //You can yield more than once in a generator
    const
        gen2 = (function* () {
            yield 'you'
            yield 'are'
            yield 'a'
            yield 'potato'
        })(),
        runGen = (n, gen) => R.range(0, n).forEach(() => console.log(gen.next().value))

    runGen(4, gen2)
    /*
        prints:
        you
        are
        a
        potato
    */

    //we can use while and for loops here too
    const
        makeGenerator = starFunction => starFunction(),
        gen3 = makeGenerator(function* () {
            var i = 0
            while(i < 3) yield i++
        })

        runGen(5, gen3)
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
        gen4 = makeGenerator(function* () {
            var i = 0
            while(true) yield i++
        })

        runGen(5, gen4)
    /*
        prints:
        0
        1
        2
        3
        4
    */

    //You can also use yeild* on arrays and other generators
    const
        gen5 = makeGenerator(function* () {
            yield 'here\'s a list'
            yield* ['this', 'is', 'in', 'the', 'list']
            yield 'here\'s stuff from another generator'
            yield* (function* () { var i = 0; while(i < 3) yield i++ })()
            yield 'this next one goes on forever'
            yield* gen4
        })

        runGen(11, gen5)
    /*
        prints:
        here's a list
        this
        is
        in
        the
        list
        here's stuff from another generator
        this is the end
        5
        6
        7
    */

    //Here's an interesting thing you can do with generators
    const
        multGenerator = function* (y) {
           yield y * y
        },
        add3Generator = function* (a, b, c) {
            yield a + b + c
        }
    console.log(multGenerator(2).next().value)
    console.log(add3Generator(1, 2, 3).next().value)
    /*
    prints
    4
    6
    */

    //You can also pass stuff to next
    const
        usesNext = (function* () {
            console.log('start')
            while(true) console.log(yield)
        })()

    usesNext.next()
    usesNext.next('stuff')
    usesNext.next('things')
    /*
    prints
    start
    stuff
    things
    */
}
