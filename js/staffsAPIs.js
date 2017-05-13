import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://localhost:4567";

export function getStaffsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/staffs`,
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
      url: `${backendServer}/api/staffs/${id}`,
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
        <div>
          <input 
            class="dataInput ${value.staff_id}id" 
            value=${value.staff_id}>
        </div>
        <div>
          <input 
            class="dataInput ${value.staff_id}firstname" 
            value=${value.staff_firstname}>
        </div>
        <div>
          <input 
            class="dataInput ${value.staff_id}secondname" 
            value=${value.staff_secondname}>
        </div>
        <div>
          <input 
            class="dataInput ${value.staff_id}gender" 
            value=${value.ganeder}>
        </div>
        <div>
          <input 
            class="dataInput ${value.staff_id}degree" 
            value=${value.degree}>
        </div>
        <div>
          <input 
            class="dataInput ${value.staff_id}address" 
            value=${value.address}>
        </div>
        <a
          type="button"
          data-staffid="${value.staff_id}"
          class="smBtn edit">
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
      url: `${backendServer}/api/staff/${staff_id}`,
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

export function addStaffPromise() {
  var id = $('.addStaffInputID').val();
  var firstname = $('.addStaffInputFirstname').val();
  var secondname = $('.addStaffInputSecondname').val();
  var gender = $('.addStaffInputGender').val();
  var degree = $('.addStaffInputDegree').val();
  var address = $('.addStaffInputAddress').val();

  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: `${backendServer}/api/staffs?id=${id}&firstname=${firstname}&secondname=${secondname}&gender=${gender}&degree=${degree}&address=${address}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function addStaffHandler() {
  var button = $('.staffAdd').get(0);
  button.onclick = function() {
    addStaffPromise()
    location.reload();
  }
}

export function editStaffPromise(id, staff) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'PATCH',
      url: `${backendServer}/api/staffs/${id}?id=${staff.id}&firstname=${staff.firstname}&secondname=${staff.secondname}&gender=${staff.gender}&degree=${staff.degree}&address=${staff.address}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editStaffHandler() {
  var buttons = $('.tStaffs.edit .row').children('.edit');
  for (let button of buttons) {
    button.onclick = function() {
      var thisID = button.getAttribute('data-staffid');
      console.log(thisID);
      var data = {
        id: $(`.${thisID}id`).val() ,
        firstname: $(`.${thisID}firstname`).val() ,
        secondname: $(`.${thisID}secondname`).val(),
        gender: $(`.${thisID}gender`).val(),
        degree: $(`.${thisID}degree`).val(),
        address: $(`.${thisID}address`).val()
      }
      console.log(data);
      editStaffPromise(button.getAttribute('data-staffid') , data)
      location.reload();
    }
  }
}