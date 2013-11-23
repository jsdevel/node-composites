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


describe("Composite", function(){
    var assert    = require('assert');
    var sinon     = require('sinon');
    var Composite = require('../src/Composite');

    it("is an instance of Array", function(){
        assert(new Composite instanceof Array);
    });

    describe("instance", function(){
        var sut;

        beforeEach(function(){
            sut = new Composite;
        });

        describe("#join", function(){
            it("should call join on instances of Composite when join", function(){
                var composite = new Composite();
                composite.join = sinon.stub().returns(3);
                sut.push(5);
                sut.push(composite);
                sut.push(6);

                sut.join();

                assert(composite.join.calledOnce);
                assert.equal(sut.join(), "5,3,6");
            });
        });

        describe("#push", function(){
            it("should return the instance", function(){
                assert(sut.push(5) === sut);
            });

            it("should add to the end of the composite", function(){
                sut[0]=5;
                sut.length=1;
                sut.push(6);
                console.dir(sut);
                assert.equal(sut[1], 6);
            });

            it("should handle multiple arguments", function(){
                sut.push(1,3,2,4,5);
                assert.equal(sut.toString(), "1,3,2,4,5");
            });
        });

        describe("#unshift", function(){
            it("should return the instance", function(){
                assert(sut.unshift(5) === sut);
            });

            it("should add to the beginning of the composite", function(){
                sut[0]=5;
                sut.length=1;
                sut.unshift(6);
                assert.equal(sut[0], 6);
            });

            it("should handle multiple arguments", function(){
                sut.unshift(1,3,2,4,5);
                assert.equal(sut.toString(), "1,3,2,4,5");
            });
        });
    });
});