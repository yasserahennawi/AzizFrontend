import $ from 'jquery';
var Promise = require('promise');

export function getStaffsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/staffs`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStaffByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/staffs/${id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStaffsEdit(data) {
  $.each(data, function(key,value){
    $('.tStaffs.edit').append(`
      <div class="row">
        <div>${value.staff_id}</div>
        <div>${value.staff_firstname}</div>
        <div>${value.staff_secondname}</div>
        <div>${value.ganeder}</div>
        <div>${value.degree}</div>
        <div>${value.address}</div>
        <a
          type="button"
          class="smBtn">
          Edit
        </a> 
        <a
          type="button"
          data-staffid="${value.staff_id}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `);
  });
}

export function getStaffsGuest(data) {
  $.each(data, function(key,value){
    $('.tStaffs.guest').append(`
      <div class="row">
        <div>${value.staff_id}</div>
        <div>${value.staff_firstname}</div>
        <div>${value.staff_secondname}</div>
        <div>${value.ganeder}</div>
        <div>${value.degree}</div>
        <div>${value.address}</div>
      </div>
    `);
  });
}

export function deleteStaffPromise(staff_id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:4567/api/staff/${staff_id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteStaffHandler() {
  var buttons = $('.tStaffs.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteStaffPromise(button.getAttribute('data-staffid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}

