import $ from 'jquery';
var Promise = require('promise');

export function getClassesPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/classes`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getClassesEdit(data) {
  $.each(data, function(key,value){
    $('.tClasses.edit').append(`
      <div class="row">
        <div>${value.class_id}</div>
        <div>${value.class_type}</div>
        <a type="button" href="" class="smBtn">Edit</a> 
        <a type="button" href="" class="smBtn">Delete</a> 
      </div>
    `);
  });
}

export function getClassesGuest(data) {
  $.each(data, function(key,value){
    $('.tClasses.guest').append(`
      <div class="row">
        <div>${value.class_id}</div>
        <div>${value.class_type}</div>
      </div>
    `);
  });
}






