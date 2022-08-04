var shoppingCart = {
    books : 2,
    pen : 3,
    copy : 5,
    pencil : 10,
    shoes : 1,
    dress : 4
}
console.log(shoppingCart);
var keys = Object.keys(shoppingCart);
console.log(keys);

var values = Object.values(shoppingCart);
console.log(values);
// keys =[ 'books', 'pen', 'copy', 'pencil', 'shoes', 'dress' ]
// values =[ 2, 3, 5, 10, 1, 4 ]
// for(var i = 0; i < keys.length && i < values.length; i++){
//     var properties = keys[i];
//     var value = shoppingCart[properties];
//     console.log(properties, value);
// }

for(var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}