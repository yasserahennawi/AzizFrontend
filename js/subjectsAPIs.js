import $ from 'jquery';
var Promise = require('promise');

var backendServer = "http://localhost:4567";

export function getSubjectsPromise() {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/subjects`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getSubjectByIdPromise(id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'GET',
      url: `${backendServer}/api/subjects/${id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function getSubjectsEdit(data) {
  $.each(data, function(key,value){
    $('.tSubjects.edit').append(`
      <div class="row">
        <div>
          <input 
            class="dataInput ${value.subject_id}id"
            value=${value.subject_id}>
        </div>
        <div>
          <input 
            class="dataInput ${value.subject_id}sub_deptName"
            value=${value.sub_dept_name}>
        </div>
        <div>
          <input 
            class="dataInput ${value.subject_id}subjectName"
            value=${value.subject_name}>
        </div>
        <div>
          <input 
            class="dataInput ${value.subject_id}chrNo"
            value=${value.chr_no}>
        </div>
        <div>
          <input 
            class="dataInput ${value.subject_id}degree"
            value=${value.subject_degree}>
        </div>
        <a 
          type="button" 
          data-subjectid="${value.subject_id}"
          class="smBtn edit">
          Edit
        </a> 
        <a 
          type="button"
          data-subjectid="${value.subject_id}"
          class="smBtn delete">
          Delete
        </a> 
      </div>
    `);
  });
}

export function getSubjectsGuest(data) {
  $.each(data, function(key,value){
    $('.tSubjects.guest').append(`
      <div class="row">
        <div>${value.subject_id}</div>
        <div>${value.sub_dept_name}</div>
        <div>${value.subject_name}</div>
        <div>${value.chr_no}</div>
        <div>${value.subject_degree}</div>
      </div>
    `);
  });
}

export function deleteSubjectPromise(subject_id) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'DELETE',
      url: `${backendServer}/api/subject/${subject_id}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function deleteSubjectHandler() {
  var buttons = $('.tSubjects.edit .row').children('.delete');
  for (let button of buttons) {
    button.onclick = function() {
      deleteSubjectPromise(button.getAttribute('data-subjectid'))
      .then(()=>{
        location.reload();
      })
    }
  }
}

export function addSubjectPromise() {
  var id = $('.addSubjectInputID').val();
  var subdeptname = $('.addSubjectInputSubDeptName').val();
  var subjectname = $('.addSubjectInputSubjectName').val();
  var chr = $('.addSubjectInputCredit').val();
  var degree = $('.addSubjectInputDegree').val();

  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'POST',
      url: `${backendServer}/api/subjects?id=${id}&subdeptname=${subdeptname}&subjectname=${subjectname}&chr=${chr}&degree=${degree}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function addSubjectHandler() {
  var button = $('.subjectAdd').get(0);
  button.onclick = function() {
    addSubjectPromise();
    console.log("add");
    location.reload();
  }
}

export function editSubjectPromise(id, subject) {
  return new Promise( function(resolve, reject) {
    $.ajax({
      type: 'PATCH',
      url: `${backendServer}/api/subjects/${id}?id=${subject.id}&subdeptname=${subject.sub_deptName}&subjectname=${subject.subjectName}&chr=${subject.chrNo}&degree=${subject.degree}`,
      success: (data) => {
        resolve(data);
      },
      error: (error) => {
        reject(error)
      } 
    })
  }
)};

export function editSubjectHandler() {
  var buttons = $('.tSubjects.edit .row').children('.edit');
  for (let button of buttons) {
    button.onclick = function() {
      var thisID = button.getAttribute('data-subjectid');
      console.log(thisID);
      var data = {
        id: $(`.${thisID}id`).val(),
        sub_deptName: $(`.${thisID}sub_deptName`).val(),
        subjectName: $(`.${thisID}subjectName`).val(),
        chrNo: $(`.${thisID}chrNo`).val(),
        degree: $(`.${thisID}degree`).val()
      }
      console.log(data);
      editSubjectPromise(button.getAttribute('data-subjectid') , data)
      location.reload();
    }
  }
}