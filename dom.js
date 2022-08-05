// //DOM
// //to get html elements from the DOM, we have a special object to help us  which is the 'document' object

// //Getting and element using its's id attribute from a HTML Document
// var div_element = document.getElementById('element')
// console.log (div_element)
// div_element.innerHTML ='HELLO WORLD'

// //class work
// //create a html element using its ID
// //select the page element using its ID
// //output the selected page element into the console
var h2_tag = document.getElementById ('home')
console.log (h2_tag)
h2_tag.innerHTML ='welcome Home'


//getting an element using it's class attribute from a Html Document

var h2 = document.getElementsByClassName('item') // array of elements with the class name
console.log (h2[0])
h2[0].innerHTML ='list to buy'

// //class work 2
// // Select all matching page elements using the class name of the element.
// // 1. Create a simple HTML file to work on.
// // 2. Add three HTML elements adding the same class to each. You can use
// // different tags as long as the same element class is included. Add some
// // content within each element so you can distinguish between them.
// // 3. Add a script element to your file, and within it select the page elements by
// // class name. Assign the resulting HTMLCollection values to a variable.
// // 4. You can use an index value to select the individual HTMLCollection items,
// // just as you would for array items. Starting with an index of 0, select one
// // of the page elements with the class name and output the element into the
// // console.
// var p1 =document.getElementsByClassName('para1')
// console.log(p1[0])
// p1[0].innerHTML = 'welcome to the world of expectations'

// // var p2 = p1[1]
// // console.log(p2)
// // // p1[1].innerHTML = 'hoem isnt actually a home without family'

// // var p3 = p1[2];
// // p3.innerHTML += " John";
// // console.log(p3.innerHTML);


// //Accessing Element with a css selector
// //querySelector(h1) // single first h1
// //or querySelectorAll ('h1')//All h1

// var elem = document.querySelector('h1');
// console.log(elem.innerHTML);

// var elem1 = document.querySelectorAll('p');
// console.log(elem1[0].innerHTML);
// console.log(elem1[1].innerHTML);


// // Use querySelector() to enable single element selection:
// // 1. Create another simple HTML file.
// // 2. Create four HTML elements adding the same class to each. They can be
// // different tag names as long as they have the class within the element
// // attribute.
// // 3. Add some content within each element so you can distinguish between them.
// // 4. Within a script element, use querySelector() to select the first occurrence
// // of the elements with that class and store it in a variable. If there is more than
// // one matching result in querySelector(), it will return the first one.
// // 5. Output the element into the console.

// var cla =document.querySelector ('p');
// console.log (cla.innerHTML);

// // Class Work 4
// // Use querySelectorAll() to select all matching elements in an HTML file:
// // 1. Create an HTML file and add four HTML elements, adding the same class to
// // each one.
// // 2. Add some content within each element so you can distinguish between them.
// // 3. Within a script element, use QuerySelectorAll() to select all the matching
// // occurrences of the elements with that class and store them in a variable.
// // 4. Output all the elements into the console, first as an array and then looping
// // through them to output them one by one

// var bar =document.querySelectorAll ('p');
// console.log (bar);
// console.log (bar[0].innerHTML);

// for ( i =0; i < 3; i++ ){
//     console.log(bar[i].innerHTML);
// }
