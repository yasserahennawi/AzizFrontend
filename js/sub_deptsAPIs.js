import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://192.168.1.102:4567";

export function getSub_deptsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/sub_depts`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getSub_deptByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/sub_depts/${id}`,
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
        <div>${value.sub_depts_id}</div>
        <div>${value.sub_depts_name}</div>
        <a
          type="button" 
          class="smBtn">
          Edit
        </a> 
        <a
          type="button" 
          data-sub_deptid="${value.sub_depts_id}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `);
  });
}

export function getSub_deptsGuest(data) {
  $.each(data, function(key,value){
    $('.tSub_depts.guest').append(`
      <div class="row">
        <div>${value.sub_depts_id}</div>
        <div>${value.sub_depts_name}</div>
      </div>
    `);
  });
}

export function deleteSub_deptPromise(sub_dept_id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `${backendServer}/api/sub_dept/${sub_dept_id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteSub_deptHandler() {
  var buttons = $('.tSub_depts.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteSub_deptPromise(button.getAttribute('data-sub_deptid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}

