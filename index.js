import $ from 'jquery';
var Promise = require('promise');

import {getStudents, getStudentsPromise} from './js/studentsAPIs.js';

$(()=> {
  getStudentsPromise().then((data)=>{
    getStudents(data);
  })
})