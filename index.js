import $ from 'jquery';
var Promise = require('promise');

import {getStudentsEdit, getStudentByIdPromise, getStudentsGuest, getStudentsPromise, deleteStudentHandler} from './js/studentsAPIs.js';
import {getStaffsEdit, getStaffsGuest, getStaffsPromise, deleteStaffHandler} from './js/staffsAPIs.js';
import {getSubjectsEdit, getSubjectsGuest, getSubjectsPromise, deleteSubjectHandler} from './js/subjectsAPIs.js';
import {getSub_deptsEdit, getSub_deptsGuest, getSub_deptsPromise, deleteSub_deptHandler} from './js/sub_deptsAPIs.js';
import {getClassesEdit, getClassesGuest, getClassesPromise, deleteClassHandler} from './js/ClassesAPIs.js';
import {searchButtonHandler} from './js/search.js';

$(()=> {
  getStudentsPromise()
  .then((data)=>{
    getStudentsGuest(data);
    getStudentsEdit(data);
  })
  .then((data)=> {
    deleteStudentHandler();
  });
  getSubjectsPromise()
  .then((data)=>{
    getSubjectsGuest(data);
    getSubjectsEdit(data);
  })
  .then(()=> {
    deleteSubjectHandler();
  });
  getStaffsPromise()
  .then((data)=>{
    getStaffsGuest(data);
    getStaffsEdit(data);
  })
  .then((data)=> {
    deleteStaffHandler();
  });
  getSub_deptsPromise()
  .then((data)=> {
    getSub_deptsEdit(data);
    getSub_deptsGuest(data);
  })
  .then (()=>{
    deleteSub_deptHandler();
  })
  getClassesPromise()
  .then((data)=> {
    getClassesEdit(data);
    getClassesGuest(data);
    return data;
  })
  .then((data)=> {
    deleteClassHandler();
  })
  searchButtonHandler();

})
