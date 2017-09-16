function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype = {
    getName: function () {
        return this.name
    },
    getAge: function () {
        return this.age
    },
    obj: {
        data: ['Parent']
    }
}

Parent.play = function () {
    return 1000
}

function Son() { }



// IE 5.5 ~
// 1
Son.prototype = new Parent()
Son.constructor = Son

// 2
Son.prototype = Parent.prototype
Son.constructor = Son

// ES 3
function create(proto) {
    function F() { }
    F.prototype = proto
    return new F()
}
Son.prototype = create(Parent.prototype)
Son.constructor = Son

// ES 5  IE 9 
Son.prototype = Object.create(Parent.prototype)
Son.constructor = Son

// ES 6 
class A { }
class B extends A {
    constructor(...args) {
        super(...args)
    }
}
