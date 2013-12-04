#composites

It is sometimes handy to treat objects in the same way you would treat an array,
but with special functionality.  This package allows that.

##Installing
`npm install composites`

##Example

We're building a transpiler, and we'd like to generate a program.  You may be
tempted to use arrays, but when you join the elements of the array, you get
commas in between your elements.  Plus, you have to add line endings to get
pretty output.

`CompositeString` joins it's elements without commas.

`Program` adds line endings to `push()`.

````javascript
var composites      = require('composites');
var Program         = composites.Program;
var CompositeString = composites.CompositeString;
var program         = new Program;
var statement1;
var statement2;

program.push("//my copyright info");
statement1 = new Program;
program.push(statement1);
statement2 = new CompositeString;
statement1.push("if(", statement2, "){");
statement1.push("    alert(5);");
statement1.push("}");

statement2.push(true, " && " , true);

console.log(program.toString());

//logs:
/*
//my copyright info
if(true && true){
    alert(5);
}
*/
````

##Creating custom Composites
Extend Composite.  If you think it's worth sharing, issue a pull request!

##License
```
Copyright 2013 Joseph Spencer

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
