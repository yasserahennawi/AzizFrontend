import $ from 'jquery';
var Promise = require('promise');

import {editStudentHandler, addStudentHandler, getStudentsEdit, getStudentByIdPromise, getStudentsGuest, getStudentsPromise, deleteStudentHandler} from './js/studentsAPIs.js';
import {addStaffHandler, editStaffHandler, getStaffsEdit, getStaffsGuest, getStaffsPromise, deleteStaffHandler} from './js/staffsAPIs.js';
import {editSubjectHandler, addSubjectHandler, getSubjectsEdit, getSubjectsGuest, getSubjectsPromise, deleteSubjectHandler} from './js/subjectsAPIs.js';
import {editSub_deptHandler, addSub_deptHandler, getSub_deptsEdit, getSub_deptsGuest, getSub_deptsPromise, deleteSub_deptHandler} from './js/sub_deptsAPIs.js';
import {addClassHandler, editClassHandler, getClassesEdit, getClassesGuest, getClassesPromise, deleteClassHandler} from './js/classesAPIs.js';
import {searchButtonHandler} from './js/search.js';

$(()=> {
  getStudentsPromise()
  .then((data)=>{
    getStudentsGuest(data);
    getStudentsEdit(data);
  })
  .then((data)=> {
    deleteStudentHandler();
    addStudentHandler();
    editStudentHandler();
  });

  getSubjectsPromise()
  .then((data)=>{
    getSubjectsGuest(data);
    getSubjectsEdit(data);
  })
  .then(()=> {
    deleteSubjectHandler();
    addSubjectHandler();
    editSubjectHandler();
  });

  getStaffsPromise()
  .then((data)=>{
    getStaffsGuest(data);
    getStaffsEdit(data);
  })
  .then((data)=> {
    deleteStaffHandler();
    addStaffHandler();
    editStaffHandler();
  });

  getSub_deptsPromise()
  .then((data)=> {
    getSub_deptsEdit(data);
    getSub_deptsGuest(data);
  })
  .then (()=>{
    deleteSub_deptHandler();
    addSub_deptHandler();
    editSub_deptHandler();
  })

  getClassesPromise()
  .then((data)=> {
    getClassesEdit(data);
    getClassesGuest(data);
    return data;
  })
  .then((data)=> {
    deleteClassHandler();
    addClassHandler();
    editClassHandler();
  })
  searchButtonHandler();

})
