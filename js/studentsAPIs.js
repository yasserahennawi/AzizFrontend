import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://localhost:4567";

export function getStudentsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/students`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStudentByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/students/${id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getStudentsEdit(data) {
  $.each(data, function(key,value){
    $('.tStudents.edit').append(`
      <div class="row">
        <div>
          <input 
            class="dataInput ${value.student_ID}id" 
            value=${value.student_ID}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}firstname" 
            value=${value.student_Firstname}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}lastname" 
            value=${value.student_lastname}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}gander" 
            value=${value.student_gander}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}section" 
            value=${value.section}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}division" 
            value=${value.division}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}stage" 
            value=${value.stage}>
        </div>
        <div>
          <input 
            class="dataInput ${value.student_ID}address" 
            value=${value.address}>
        </div>
        <a
          type="button"
          data-studentid="${value.student_ID}"
          class="smBtn edit">
          Edit
        </a> 
        <a
          type="button"
          data-studentid="${value.student_ID}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `);
  });
}

export function getStudentsGuest(data) {
  $.each(data, function(key,value){
    $('.tStudents.guest').append(`
      <div class="row">
        <div title="${value.student_ID}">${value.student_ID}</div>
        <div title="${value.student_Firstname}">${value.student_Firstname}</div>
        <div title="${value.student_lastname}">${value.student_lastname}</div>
        <div title="${value.student_gander}">${value.student_gander}</div>
        <div title="${value.section}">${value.section}</div>
        <div title="${value.division}">${value.division}</div>
        <div title="${value.stage}">${value.stage}</div>
        <div title="${value.address}">${value.address}</div>
      </div>
    `);
  });
}

export function deleteStudentPromise(student_ID) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `${backendServer}/api/student/${student_ID}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function addStudentPromise() {
  var id = $('.addStudentInputID').val();
  var firstname = $('.addStudentInputFirstname').val();
  var lastname = $('.addStudentInputLastname').val();
  var gender = $('.addStudentInputGender').val();
  var section = $('.addStudentInputSection').val();
  var division = $('.addStudentInputDivision').val();
  var stage = $('.addStudentInputStage').val();
  var address = $('.addStudentInputAddress').val();

  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: `${backendServer}/api/students?id=${id}&firstname=${firstname}&lastname=${lastname}&gender=${gender}&section=${section}&division=${division}&stage=${stage}&address=${address}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editStudentPromise(id, student) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'PATCH',
      url: `${backendServer}/api/students/${id}?id=${student.id}&firstname=${student.firstname}&lastname=${student.lastname}&gender=${student.gender}&section=${student.section}&division=${student.division}&stage=${student.stage}&address=${student.address}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editStudentHandler() {
  var buttons = $('.tStudents.edit .row').children('.edit');
  for (let button of buttons) {
    button.onclick = function() {
      console.log("clicked");
      var thisID = button.getAttribute('data-studentid');
      var data = {
        id: $(`.${thisID}id`).val() ,
        firstname: $(`.${thisID}firstname`).val() ,
        lastname: $(`.${thisID}lastname`).val(),
        gender: $(`.${thisID}gander`).val(),
        section: $(`.${thisID}section`).val(),
        division: $(`.${thisID}division`).val(),
        stage: $(`.${thisID}stage`).val(),
        address: $(`.${thisID}address`).val()
      }
      editStudentPromise(button.getAttribute('data-studentid') , data)
      location.reload();
    }
  }
}

export function deleteStudentHandler() {
  var buttons = $('.tStudents.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteStudentPromise(button.getAttribute('data-studentid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}

export function addStudentHandler() {
  var button = $('.studentAdd').get(0);
  button.onclick = function() {
    addStudentPromise()
    location.reload();
  }
}