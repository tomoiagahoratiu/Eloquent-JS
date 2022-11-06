# Repo for studying Eloquent Javascript.
## Notes from each chapter can be found in README, exercises in src folder

## Chapter 1: Values, Types, AND Operators
Types:
    numbers: 64 bits (1st bit used to determine sign +-)
    strings: 16 bits
    boolean: 1 byte
    undefined
    null
    
NaN - not a number, but is a value of the number type. Can get this result if you try to do 0/0 or Infinity - Infinity (operations that don't have a meaningful result).

If we write "\n" inside of a string -> represents a new line. If we have the need to write "\" inside of string we need to write "\\", the first \ will be left of the resulting string and \ will be printed.

`` -> template literals, used to embed values inside the string using ${} syntax.

typeof - operator

Only one value that is not equal to himself (NaN == NaN) is false.

null, undefined - denote absence of a meaningful value.

JS has automatic type conversion
=== and !== used to see if a value is precisely equal to what we want
If you use == or != you can't prevent unexpected type conversions.

console.log( null || user) -> will print user, if first value can be converted to false the right value is printed. && work similarly but the other way around. Also the right part is only evaluated when necessary. (short-circuit evaluation).

## Chapter 2: Program Structure
Missing ; at the end of a statement can make the next line part of the same statement. TBC
 
let caught = 5 * 5; is called binding.
var used in pre-2015 JS, similar to let but differes. TBC
const

Binding names must not start with a number, can include $ OR _ but no other special characters. Keywords can't be used as binding names.


## Chapter 3: Functions
Functions that not have return statement or blank return, return undefined
If we use var for binding they are visible through the whole function/global scope.

let myFunction = function() {} -> function binding.
function myFunction() {} -> function declaration.
functions declarations are not part of the top-to-bottom flow, they are moved to the top of their scope and can be used by all the code in that scope even if it sits higher than the function declaration.

Arrow Functions

const square1 = (x) => { return x * x; };
const square2 = x => x * x;   ->  they are the same.

call stack -> where computer stores context

Optional Arguments

if you have a function with one parameter and you pass three arguments the extra two arguments will be ignored without throwing an error. If you pass to few the missing params get assigned undefined.

If you write an = operator after a parameter, followed by an expres-
sion, the value of that expression will replace the argument when it is
not given.