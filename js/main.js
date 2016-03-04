// JS for processing data items hw

var s_one, s_two, s_three, s_four, s_five, s_six;

s_one = document.querySelector('#stuff_one');
s_two = document.querySelector('#stuff_two');
s_three = document.querySelector('#stuff_three');
s_four = document.querySelector('#stuff_four');
s_five = document.querySelector('#stuff_five');
s_six = document.querySelector('#stuff_six');

// start of QUESTION ONE --------

// !!!!!Finds every price in the object array!!!!!
items.map(function(obj) {
 return obj.price;
});

var mapByPrice = items.map(function(obj) {
 return obj.price;
});

var sum = mapByPrice.reduce(function(totalPrice, currentPrice) {
	return totalPrice += currentPrice;
}, 0);

var finalAns = Math.round((sum / mapByPrice.length) * 100) / 100;

s_one.innerHTML = "The average price is $" + finalAns;

// end of QUESTION ONE ----------

// start of QUESTION TWO ----------

var f_price = items.filter(function(obj) {
 return (obj.price > 14 && obj.price < 18);
});

var finalTitles = f_price.map(function(obj) {
	return obj.title;
});

s_two.innerHTML = finalTitles;

// end of QUESTION TWO ----------

// start of QUESTION THREE ----------

var hasGbp = items.filter(function(obj) {
 return obj.currency_code === 'GBP';
});

var titleOfObject = hasGbp.map(function(obj) {
	return obj.title;
})

var priceOfObject = hasGbp.map(function(obj) {
	return obj.price;
})

s_three.innerHTML = titleOfObject + " costs &pound;" +  priceOfObject;

// end of QUESTION THREE --------

// start of QUESTION FOUR --------

var gotWood = items.filter(function(obj) {
	return obj.materials.indexOf('wood') > -1;
});

var woodItems = gotWood.map(function(obj){
	return obj.title;
})

s_four.innerHTML = woodItems;

// end of QUESTION FOUR --------

// start of QUESTION FIVE --------

var gotEightItems = items.filter(function(obj) {
	return obj.materials.length >= 8;
	});

var titlesOfMaterials = gotEightItems.map(function(obj) {
	return obj.title;
	});

var numbersOfMaterials = gotEightItems.map(function(obj) {
	return obj.materials.length;
	});

var typesOfMaterials = gotEightItems.map(function(obj) {
	return obj.materials;
	});
s_five.innerHTML = titlesOfMaterials + " " + numbersOfMaterials + " " + typesOfMaterials;

// end of QUESTION FIVE --------

// start of QUESTION SIX --------

var iMadeIt = items.filter(function(obj) {
 return obj.who_made === 'i_did';
});

var iMadeItLength = iMadeIt.length;

s_six.innerHTML = iMadeItLength + " were made by their sellers";

