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


describe("CompositeString", function(){
    var assert          = require('assert');
    var CompositeString = require('../src/CompositeString');
    var Composite       = require('../src/Composite');

    it("is an instance of Composite", function(){
        assert(new CompositeString instanceof Composite);
    });

    describe("instantiated", function(){
        var sut;

        beforeEach(function(){
            sut = new CompositeString;
            sut.push(5);
            sut.push(4);
            sut.push(3);
            sut.push({toString:function(){return "foo";}});
        });

        it("joins without commas", function(){
            assert.equal(sut.join(), "543foo");
        });

        it("converts nodes to strings", function(){
            assert.equal(sut.toString(), "543foo");
        });
    });
});