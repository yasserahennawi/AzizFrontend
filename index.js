import $ from 'jquery';
var Promise = require('promise');

import {getStudentsEdit, getStudentsGuest, getStudentsPromise} from './js/studentsAPIs.js';
import {getStaffsEdit, getStaffsGuest, getStaffsPromise} from './js/staffsAPIs.js';
import {getSubjectsEdit, getSubjectsGuest, getSubjectsPromise} from './js/subjectsAPIs.js';
import {getSub_deptsEdit, getSub_deptsGuest, getSub_deptsPromise} from './js/sub_deptsAPIs.js';
import {getClassesEdit, getClassesGuest, getClassesPromise} from './js/ClassesAPIs.js';

$(()=> {
  getStudentsPromise()
  .then((data)=>{
    getStudentsGuest(data);
    getStudentsEdit(data);
  });
  getSubjectsPromise()
  .then((data)=>{
    getSubjectsGuest(data);
    getSubjectsEdit(data);
  });
  getStaffsPromise()
  .then((data)=>{
    getStaffsGuest(data);
    getStaffsEdit(data);
  });
  getSub_deptsPromise()
  .then((data)=> {
    getSub_deptsEdit(data);
    getSub_deptsGuest(data);
  });
  getClassesPromise()
  .then((data)=> {
    getClassesEdit(data);
    getClassesGuest(data);
  });
})