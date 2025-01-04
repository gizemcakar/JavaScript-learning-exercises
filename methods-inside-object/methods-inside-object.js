// icerisinde array, boolean variable, function bulunduran bir object(nesne, obje)
// user1'in shortName'i function icinde tanimlandi.

let user1 = {
    firstName : "gizem",
    lastName : "cakar",
    score : [1, 2, 3, 4],
    isActive : true,
    shortName : function () {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName[0].toUpperCase()}.`
    }
}

console.log(user1.shortName())    // shortName function oldugu icin shortName() olarak yazilmali.
