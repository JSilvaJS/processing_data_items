# Synopsis
The goal is to use this [items.js](https://tiy-learn-content.s3.amazonaws.com/82cc6a32-items.js) & this [banner.jpg](https://tiy-learn-content.s3.amazonaws.com/7c5e124a-banner.jpg) links and mimic the example image below with the answers in their appropriate locations.

# Example Image
![alt text](https://tiy-learn-content.s3.amazonaws.com/21d3d3d6-mockup.png)

# Sample Code
``` javascript
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
```
# Deployed Code
[Check it here!](http://jsilvajs.github.io/processing_data_items/)
