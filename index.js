// First, I'm importing datejs
require('datejs');

// function to take many arrays of usernames & merge them
function combineUsers(...args) {
  // intializing object
  const combinedObject = {
    users: []
  };

  // Looping and merging arrays
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Adding current date
  const today = new Date();
  combinedObject.merge_date = today.toString("M/d/yyyy");

  // Returning object
  return combinedObject;
}

// exporting the function for test

module.exports = { combineUsers };