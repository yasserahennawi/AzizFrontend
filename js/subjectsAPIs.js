import $ from 'jquery';
var Promise = require('promise');

export function getSubjectsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/subjects`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getSubjectsEdit(data) {
  $.each(data, function(key,value){
    $('.tSubjects.edit').append(`
      <div class="row">
        <div>${value.subject_id}</div>
        <div>${value.sub_dept_name}</div>
        <div>${value.subject_name}</div>
        <div>${value.chr_no}</div>
        <div>${value.subject_degree}</div>
        <a type="button" href="" class="smBtn">Edit</a> 
        <a type="button" href="" class="smBtn">Delete</a> 
      </div>
    `);
  });
}
export function getSubjectsGuest(data) {
  $.each(data, function(key,value){
    $('.tSubjects.guest').append(`
      <div class="row">
        <div>${value.subject_id}</div>
        <div>${value.sub_dept_name}</div>
        <div>${value.subject_name}</div>
        <div>${value.chr_no}</div>
        <div>${value.subject_degree}</div>
      </div>
    `);
  });
}






