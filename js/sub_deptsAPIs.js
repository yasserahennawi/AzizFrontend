import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://localhost:4567";

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
        <div>
          <input 
            class="dataInput ${value.sub_depts_id}id" 
            value=${value.sub_depts_id}>
        </div>
        <div>
          <input 
            class="dataInput ${value.sub_depts_id}name" 
            value=${value.sub_depts_name}>
        </div>
        <a
          type="button" 
          data-sub_deptid="${value.sub_depts_id}"
          class="smBtn edit">
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


export function addSub_deptPromise() {
  var id = $('.addSub_deptInputID').val();
  var name = $('.addSub_deptInputName').val();

  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: `${backendServer}/api/sub_depts?id=${id}&name=${name}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function addSub_deptHandler() {
  var button = $('.sub_deptAdd').get(0);
  button.onclick = function() {
    addSub_deptPromise()
    location.reload();
  }
}

export function editSub_deptPromise(id, sub_dept) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'PATCH',
      url: `${backendServer}/api/sub_depts/${id}?id=${sub_dept.id}&name=${sub_dept.name}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editSub_deptHandler() {
  var buttons = $('.tSub_depts.edit .row').children('.edit');
  for (let button of buttons) {
    button.onclick = function() {
      var thisID = button.getAttribute('data-sub_deptid');
      console.log(thisID);
      var data = {
        id: $(`.${thisID}id`).val() ,
        name: $(`.${thisID}name`).val() ,
      }
      console.log(data);
      editSub_deptPromise(button.getAttribute('data-sub_deptid') , data)
      location.reload();
    }
  }
}