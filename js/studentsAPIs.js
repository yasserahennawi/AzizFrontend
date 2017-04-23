import $ from 'jquery';
var Promise = require('promise');

export function getStudentsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/students`,
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
        <a type="button" href="" class="smBtn">Edit</a> 
        <a type="button" href="" class="smBtn">Delete</a> 
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
