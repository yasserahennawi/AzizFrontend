import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://192.168.1.102:4567";

export function getStudentsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/students`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStudentByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/students/${id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStudentsEdit(data) {
  $.each(data, function(key,value){
    $('.tStudents.edit').append(`
      <div class="row">
        <div>${value.student_ID}</div>
        <div>${value.student_Firstname}</div>
        <div>${value.student_lastname}</div>
        <div>${value.student_gander}</div>
        <div>${value.section}</div>
        <div>${value.division}</div>
        <div>${value.stage}</div>
        <div>${value.address}</div>
        <a
          type="button"
          class="smBtn edit">
          Edit
        </a> 
        <a
          type="button"
          data-studentid="${value.student_ID}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `);
  });
}

export function getStudentsGuest(data) {
  $.each(data, function(key,value){
    $('.tStudents.guest').append(`
      <div class="row">
        <div>${value.student_ID}</div>
        <div>${value.student_Firstname}</div>
        <div>${value.student_lastname}</div>
        <div>${value.student_gander}</div>
        <div>${value.section}</div>
        <div>${value.division}</div>
        <div>${value.stage}</div>
        <div>${value.address}</div>
      </div>
    `);
  });
}


export function deleteStudentPromise(student_ID) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `${backendServer}/api/student/${student_ID}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteStudentHandler() {
  var buttons = $('.tStudents.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteStudentPromise(button.getAttribute('data-studentid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}
