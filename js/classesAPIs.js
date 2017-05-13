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
        <div>
          <input 
            class="dataInput ${value.class_id}id" 
            value=${value.class_id}>
        </div>
        <div>
          <input 
            class="dataInput ${value.class_id}type"
            value=${value.class_type}>
        </div>
        <a 
          type="button" 
          data-classesid="${value.class_id}"
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

export function addClassPromise() {
  var id = $('.addClassInputID').val();
  var type = $('.addClassInputType').val();

  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: `${backendServer}/api/classes?id=${id}&type=${type}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function addClassHandler() {
  var button = $('.classesAdd').get(0);
  button.onclick = function() {
    addClassPromise()
    location.reload();
  }
}

export function editClassPromise(id, newClass) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'PATCH',
      url: `${backendServer}/api/classes/${id}?id=${newClass.id}&type=${newClass.type}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editClassHandler() {
  var buttons = $('.tClasses.edit .row').children('.edit');
  for (let button of buttons) {
    button.onclick = function() {
      var thisID = button.getAttribute('data-classesid');
      var data = {
        id: $(`.${thisID}id`).val() ,
        type: $(`.${thisID}type`).val() ,
      }
      editClassPromise(thisID , data)
      location.reload();
    }
  }
}





