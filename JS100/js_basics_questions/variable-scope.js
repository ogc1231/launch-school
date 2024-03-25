// 1
// undefined, var is hoist and is decalred as undefined at the beggining

// 2
// error, string is not defined before it is logged

// 3
// error, block scoped of myValue so not defined and not availble to be logged

// 4
// 1, postive numbers are truthy and a is console logged

// 5
// error, a is re-intialised and can't be accessed before

// 6
// false, let b true is block scoped

// 7
// 1, a is a global variable and can used inside the function

// 8
// 2, b is passed as the argument which is has the same name a, argument takes over

// 9
// TypeError, a is a const and can't be reassigned

// 10
// {firstName: 'Jane', lastName: 'Doe'}, whole object can't be reassinged but the values can be unless frozen
