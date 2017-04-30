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

export function getSubjectByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/subjects/${id}`,
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
        <a 
          type="button" 
          class="smBtn">
          Edit
        </a> 
        <a 
          type="button"
          data-subjectid="${value.subject_id}"
          class="smBtn delete">
          Delete
        </a> 
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

export function deleteSubjectPromise(subject_id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:4567/api/subject/${subject_id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteSubjectHandler() {
  var buttons = $('.tSubjects.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteSubjectPromise(button.getAttribute('data-subjectid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}