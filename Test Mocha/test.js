let assert = require('chai').assert;
let should = require('chai').should();
let expect = require('chai').expect;
// import { assert, should } from 'chai';
let script =  require('./Task2');
describe ("Pick",function() {
  it ("возврат случайного элемента A B C D", function() {
    assert.oneOf(script.pick(['A','B','C','D']),['A','B','C','D']);
  });
});
describe ("catFactory",function() {
  it ("возврат объекта name со случайным элементом", function() {
    assert.property(script.catFactory(),'name');
    assert.oneOf(script.catFactory().name,['aaa','bbb','ccc','ddd','ggg','hhh','eee','www']);
  });
  it ("возврат объекта age со случайным элементом", function() {
    assert.property(script.catFactory(),'age');
    assert.oneOf(script.catFactory().age,[1,2,3,4,5,6,7,8,9,]);
  });
  it ("возврат объекта gender со случайным элементом ", function() {
    assert.property(script.catFactory(),'gender');
    assert.oneOf(script.catFactory().gender,['m','w']);
  });
  it ("возврат объекта legsCount со случайным элементом", function() {
    assert.property(script.catFactory(),'legsCount');
    assert.oneOf(script.catFactory().legsCount,[2,3,4]);
  });
  it ("возврат объекта tailLength со случайным элементом", function() {
    assert.property(script.catFactory(),'tailLength');
    assert.oneOf(script.catFactory().tailLength,[10,20,30,40]);
  });
});
describe ("catsGroupGenerate",function() {
  it ("массив объектов, полученных из котогенератора, длиной n", function() {
    assert.equal(script.catsGroupGenerate(15).length,15);
    assert.equal(script.catsGroupGenerate(1).length,1);
    assert.equal(script.catsGroupGenerate(322).length,322);
  });
});
describe ("catsGroupMan",()=> {
  it ("Массив котов мужского пола", function() {
    const list = script.catsGroupGenerate(999);
    for ( let item of script.catsGroupMan(list)){
    assert.equal(item.gender,'m');
    };
  });
});
describe ("catsName",()=> {
  it ("Массив имен котов", function() {
    const list = script.catsGroupGenerate(999);
    for ( let item of script.catsName(list)){
    assert.oneOf(item,['aaa','bbb','ccc','ddd','ggg','hhh','eee','www']);
    };
  });
});
describe ("catsOldMan",()=> {
  it ("Массив котов самых старых котов", function() {
    const list = script.catsGroupGenerate(999);
    assert.equal(script.catsOldMan(list,15).length,15);
    for ( let item of script.catsOldMan(list,15)){
    assert.equal(item.gender,'m');
    assert.equal(item.age,9);
    assert.oneOf(item.name,['aaa','bbb','ccc','ddd','ggg','hhh','eee','www']);
    };
  });
});
describe ("catsYoungName",()=> {
  it ("Массив имен самых молодых кошек\\ВОПРОС!", ()=> {
    let listTest = [{ 
      name: 'ccc', age: 4, gender: 'w'
    },{
      name: 'www', age: 1, gender: 'm'
    },{
      name: 'WWW',
      age: 1,
      gender: 'w',
      },{
      name: 'bbb',
      age: 2,
      gender: 'w',
      }];
    assert.equal(script.catsYoungName(listTest,1).length,1);
    for ( let item of script.catsYoungName(listTest,1)){
    assert.equal(item,'WWW');
    };
  });
});
describe ("catsNameStatus",()=> {
  it ("Считает распределение объектов по именам", ()=> {
    let listTest = [{ name: 'ccc'},{name: 'ccc'},{name: 'uuu'},{name: 'uuu'},{name: 'bbb'},{name: 'bbb'},{name: 'ccc'},{name: 'aaa'},{name: 'uuu'}];
    assert.equal(script.catsNameStatus(listTest).uuu,3);
    assert.equal(script.catsNameStatus(listTest).ccc,3);
    assert.equal(script.catsNameStatus(listTest).bbb,2);
    assert.equal(script.catsNameStatus(listTest).aaa,1);
  });
});
describe ("catFactory(defaults) catsGroupGenerate(defaults)",()=> {
  it ("Вернет объект с произвольными значениями свойств ‘defaults’", ()=> {
    let obj = {gender: 'M'};
    for (item of script.catsGroupGenerate(15,obj)){
    assert.equal(item.gender,'M');
    };
  });
});

// describe("pow", function() {

//   it("возводит в степень n", function() {
//     assert.equal(script.pow(2, 3), 8);
//   });
//   it("3 в степени 4 будет 81", function() {
//     assert.equal(script.pow(3, 4), 81);
//   });
//   describe("возводит x в степень 3", function() {

//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} в степени 3 будет ${expected}`, function() {
//         assert.equal(script.pow(x, 3), expected);
//       });
//     }


//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
//   });
  // describe("pow", function() {

    // ...
  
    // it("для отрицательных n возвращает NaN", function() {
    //   assert.isNaN(script.pow(2, -1));
    // });
  
    // it("для дробных n возвращает NaN", function() {
    //   assert.isNaN(script.pow(2, 1.5));
    // });
  
  // });
//  describe("тест", function() {

//   before(() => alert("Тестирование началось – перед тестами"));
//   after(() => alert("Тестирование закончилось – после всех тестов"));

//   beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//   afterEach(() => alert("После теста – заканчиваем выполнение теста"));

//   it('тест 1', () => alert(1));
//   it('тест 2', () => alert(2));

// }); 
// });