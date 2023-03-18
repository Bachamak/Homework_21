// написати функцію mapping(array, callback), яка буде створювати новий масив на умові функції callback, в не залежності який буде масив, та які будуть пекретворення чи умови в функції колбек. Ця фінкція мусить працювати для всих.

function mapping(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) );
	}
	return result;
}
let result_1 = mapping([1, 2, 3, 4, 5], function(num) {
	return num ** 2;
});
console.log(result_1);

// додатково...

// 1. створити функцію, myReduce(array, callback, initialValue) - яка працює як функція: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array = [23, 411, 347, 68, 209];

function myReduce(arr, callback) {
	let result = 0;
	for (let elem of arr) {
		result += callback(elem);
	}
	return result;
}
let result_2 = myReduce(array, function(num) {
	return num;
});
console.log(result_2);

// 2) взяти масив з ДЗ 12: https://lms.ithillel.ua/groups/63426add2fa78f4b3a6f9654/homeworks/63da855472dfc757035a214f та потренуватися з методами масиву... над кожним методом додати коментар, чи є це мутабельним методом (чи буде цей метод зміняти оригінал)

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ];
    
let isActiveUsers = users.filter(function (user) {
  return user.gender === 'female';
}).map(function (user) {
  return user.name;
});
console.log(isActiveUsers);