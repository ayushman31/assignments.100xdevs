/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


const transactions = [
    {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
    {
		id: 2,
		timestamp: 1656076800001,
		price: 20,
		category: 'Food',
		itemName: 'Burger',
	},
    {
		id: 3,
		timestamp: 1656076800002,
		price: 50,
		category: 'Drinks',
		itemName: 'Breezer',
	},
    {
		id: 4,
		timestamp: 1656076800003,
		price: 100,
		category: 'Drinks',
		itemName: 'Beer',
	},
    {
		id: 5,
		timestamp: 1656076800004,
		price: 30,
		category: 'Food',
		itemName: 'Starters',
	},

]


function calculateTotalSpentByCategory(list){
    const total = list.reduce(function(acc,curr){
        if(!acc[curr.category]) acc[curr.category] = 0;
        acc[curr.category] = acc[curr.category] + curr.price;
        return acc
    }, {});

    console.log(total);
}

calculateTotalSpentByCategory(transactions);