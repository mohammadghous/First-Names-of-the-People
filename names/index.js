const peopleNames = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");

function getPeopleInCity(peopleNames) {
  return firstName(peopleNames);
}

module.exports = getPeopleInCity;
