import $ from 'jquery';
var Promise = require('promise');

export function getSub_deptsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:4567/api/sub_depts`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getSub_deptsEdit(data) {
  $.each(data, function(key,value){
    $('.tSub_depts.edit').append(`
      <div class="row">
        <div>${value.sub_depts_name}</div>
        <div>${value.sub_depts_id}</div>
        <a type="button" href="" class="smBtn">Edit</a> 
        <a type="button" href="" class="smBtn">Delete</a> 
      </div>
    `);
  });
}

export function getSub_deptsGuest(data) {
  $.each(data, function(key,value){
    $('.tSub_depts.guest').append(`
      <div class="row">
        <div>${value.sub_depts_name}</div>
        <div>${value.sub_depts_id}</div>
      </div>
    `);
  });
}






