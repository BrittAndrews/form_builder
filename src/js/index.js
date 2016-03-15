// Javascript Entry Point
import $ from 'jquery';


import data from './data';


import { typeText, typetextField, typeSelect } from './template';


var main = $('main');


// typeText(data[2]);

// typetextField(data[5]);

// typeSelect(data[4]);



var typeStuff = {
  'text': typeText,
  'email': typeText,
  'textarea': typetextField,
  'select': typeSelect,
  'tel': typeText
}




data.forEach(function(formField) {
  var template = typeStuff[formField.type];
  var html = template(formField);
  main.append( html );
});