
    function pow(x, n) {
        let result = 1;
        if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
for (let i = 0; i < n; i++) {
  result *= x;
}
return result;
    }
function pick(list){
    return (list[Math.floor(Math.random() * (list.length))]);
};

function catFactory(defaults){
    let obj = {};
    obj = { 
        name: pick(['aaa','bbb','ccc','ddd','ggg','hhh','eee','www']),
        age: pick([1,2,3,4,5,6,7,8,9,]),
        gender: pick(['m','w']),
        legsCount: pick([2,3,4]),
        tailLength: pick([10,20,30,40]),
        };
        for(key in defaults){
            obj[key] = pick([defaults[key]]);
        }
    return obj;
        };

function catsGroupGenerate(n,defaults){
    let catsArr = [];
    for (let i = 0; i < n;i++){
        let cat = catFactory(defaults);
        catsArr.push(cat);
    };
    return catsArr;
};

function catsGroupMan (arr) {
    let catsMan = [];
    for (let item of arr){
        if (item.gender == 'm' ) catsMan.push(item);
    };
    return catsMan;
}
function catsName (arr){
    let setMan = new Set();
    for (let item of arr){
         setMan.add(item.name);
    };
    let catsMan = [];
    for (let user of setMan){
        catsMan.push(user);
    }
    return catsMan;
}
function catsOldMan(arr,n){
    let max = arr[0].age ;
    let catsOld = [];
    let arrMen = catsGroupMan (arr) ;
    for ( item of arrMen){
        if ( max < item.age) max = item.age ; 
    }
    for (item of arrMen){
        if ( max == item.age) catsOld.push(item);
        if ( catsOld.length == n) return catsOld ;
    }
    return catsOld;
}
function catsYoungName(arr,n){
    let min = arr[0].age ;
    let catName = [];
    let catsGirl = [];
    for (let item of arr){
        if (item.gender == 'w' ) catsGirl.push(item);
    };
    for ( item of catsGirl){
        if ( min > item.age) min = item.age ; 
    };
    for (item of catsGirl){
        if ( min == item.age) catName.push(item.name);
        if ( catName.length == n) return catName ;
    };
    return catName;
}
function catsNameStatus(list){
    arrName = catsName (list);
    nameCounter = {};
    for (item of arrName){
        nameCounter[item] = 0;
    };
    for ( item of list){
       nameCounter[item.name] = nameCounter[item.name] + 1;
    };
    return nameCounter ;
}
const list = catsGroupGenerate(999)
let obj5 = {gender: 'M'}
// console.log(list);
// console.log(catsGroupMan(list));
// console.log(catsName(list));
// console.log(catsOldMan(list,15));
// console.log(catsYoungName(list,15));
// console.log(catsNameStatus(list));
// console.log(catFactory(obj5));
module.exports = {pow,pick,catFactory,catsGroupGenerate, catsGroupMan,catsName,catsOldMan,catsYoungName,catsNameStatus, };