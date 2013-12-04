/*!
 * Copyright 2013 Joseph Spencer.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


describe("Program", function(){
    var assert    = require('assert');
    var Composite = require('../src/Composite');
    var Program   = require('../src/Program');

    it("is an instance of Composite", function(){
        assert(new Program instanceof Composite);
    });

    describe("instance", function(){
        var sut;

        beforeEach(function(){
            sut = new Program;
        });

        describe("#push", function(){
            it("should add \n as an implicit last argument", function(){
                sut.push('if(', 5, ')');
                assert.equal(sut.toString(), "if(5)\n");
            });
        });
    });
});