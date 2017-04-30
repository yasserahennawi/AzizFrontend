import $ from 'jquery';
import {getStudentByIdPromise} from './studentsAPIs.js'
import {getSub_deptByIdPromise} from './sub_deptsAPIs.js'
import {getStaffByIdPromise} from './staffsAPIs.js'
import {getSubjectByIdPromise} from './subjectsAPIs.js'
import {getClassByIdPromise} from './classesAPIs.js'
var Promise = require('promise');

export function searchButtonHandler() {
  var button = $('.search');
  button.click(function() {
    $('.results').children().remove();
    switch($('#searchType option:selected').text()) {
      case "Student":
        getStudentByIdPromise($('.inputID').val())
        .then(
          (data)=>{
            if (data.length != 0) {
              $('.results').append(`
                <div class="resultsRow" style="display: flex;">
                  <div>Firstname:</div>
                  <div>${data[0].student_Firstname}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Lastname:</div>
                  <div>${data[0].student_lastname}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Gender:</div>
                  <div>${data[0].student_gander}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Section:</div>
                  <div>${data[0].section}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Division:</div>
                  <div>${data[0].division}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Stage:</div>
                  <div>${data[0].stage}</div>
                </div>
                <div class="resultsRow" style="display: flex;">
                  <div>Address:</div>
                  <div>${data[0].address}</div>
                </div>
              `)
            }
            return data;
          }
        )
        .then((data)=>{
          if ($('.results').children().length == 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex">
                <div>No Student with this ID found</div>
              </div>
            `);  
          } 
        })
        break;
      case "Subject":
        getSubjectByIdPromise($('.inputID').val())
        .then((data)=>{
          if (data.length != 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex;">
                <div>Sub Dept. Name:</div>
                <div>${data[0].sub_dept_name}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Subject Name:</div>
                <div>${data[0].subject_name}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Credit Hours:</div>
                <div>${data[0].chr_no}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Degree:</div>
                <div>${data[0].subject_degree}</div>
              </div>
            `)
          }
        })
        .then((data)=>{
          if ($('.results').children().length == 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex">
                <div>No Subject with this ID found</div>
              </div>
            `);  
          } 
        })
        break;
      case "Staff":
        getStaffByIdPromise($('.inputID').val())
        .then((data)=>{
          if (data.length != 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex;">
                <div>Firstname:</div>
                <div>${data[0].staff_firstname}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Secondname:</div>
                <div>${data[0].staff_secondname}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Gender:</div>
                <div>${data[0].ganeder}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Degree:</div>
                <div>${data[0].degree}</div>
              </div>
              <div class="resultsRow" style="display: flex;">
                <div>Address:</div>
                <div>${data[0].address}</div>
              </div>
            `)
          }
        })
        .then((data)=>{
          if ($('.results').children().length == 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex">
                <div>No Staff with this ID found</div>
              </div>
            `);  
          } 
        })
        break;
      case "Sub_dept":
        getSub_deptByIdPromise($('.inputID').val())
        .then((data)=>{
          if (data.length != 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex;">
                <div>Name:</div>
                <div>${data[0].sub_depts_name}</div>
              </div>
            `)
          }
        })
        .then((data)=>{
          if ($('.results').children().length == 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex">
                <div>No Sub_dept with this ID found</div>
              </div>
            `);  
          } 
        })
        break;
      case "Classes":
        getClassByIdPromise($('.inputID').val())
        .then((data)=>{
          if (data.length != 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex;">
                <div>Type:</div>
                <div>${data[0].class_type}</div>
              </div>
            `)
          }
        })
        .then((data)=>{
          if ($('.results').children().length == 0) {
            $('.results').append(`
              <div class="resultsRow" style="display: flex">
                <div>No Class with this ID found</div>
              </div>
            `);  
          } 
        })
        break;
      default:
        console.log("I have never heard of that fruit...");
    }
  })
}
