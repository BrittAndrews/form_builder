// Javascript Entry Point
import $ from 'jquery';


import data from './data';


import { text, email, select, textarea, tele } from './template';



var dataTypeToTemplate = {
  'Manager': manager,
  'Employee': employee,
  'Customer': customer
}