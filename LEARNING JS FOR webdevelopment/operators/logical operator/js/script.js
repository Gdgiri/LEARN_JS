let highincome=true;

let CIBILscore=true;

let eligibel_person=highincome&&CIBILscore;

let eligibal_person=highincome||CIBILscore;

let Application=!eligibel_person;

let Applications=!eligibal_person;

console.log("loan_status"+ eligibel_person);

console.log("application_status"+ Application);

console.log("loan_status"+ eligibal_person);

console.log("applications_status"+ Applications);