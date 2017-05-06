import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://localhost:4567";

export function getClassesPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/classes`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  })
};

export function getClassByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/classes/${id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  })
};

export function deleteClassesPromise(class_id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `${backendServer}/api/classes/${class_id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteClassHandler() {
  var buttons = $('.tClasses.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteClassesPromise(button.getAttribute('data-classesid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}

export function getClassesEdit(data) {
  $.each(data, function(key,value){
    $('.tClasses.edit').append(`
      <div class="row">
        <div>${value.class_id}</div>
        <div>${value.class_type}</div>
        <a 
          type="button" 
          class="smBtn edit">
          Edit
        </a> 
        <a 
          type="button" 
          data-classesid="${value.class_id}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `)
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






