"use strict";
let personName = '';
personName = prompt('Enter your name: ') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName}, your name are displayed as:
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    titlecase: ${titlecase}`);
}
else {
    alert(`Please enter your name!`);
}
