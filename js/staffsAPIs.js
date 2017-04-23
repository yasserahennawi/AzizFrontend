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
        <a type="button" href="" class="smBtn">Edit</a> 
        <a type="button" href="" class="smBtn">Delete</a> 
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






