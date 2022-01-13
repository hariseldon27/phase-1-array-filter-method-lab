// Code your solution here
// write three functions

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(driversList, nameToSearch) {
    // const matchFound = driversList.filter(driver => driver.toLowerCase() == nameToSearch.toLowerCase())
    // console.log(matchFound)
    // return matchFound
    return driversList.filter(driver => driver.toLowerCase() == nameToSearch.toLowerCase())
}

//findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], 'bobbY')

function fuzzyMatch(driversList, nameToSearch){
    return driversList.filter(driver => driver.substring(0,2) === nameToSearch.substring(0,2))
    //console.log(matchFound)
    //return matchFound
}
//fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'], 'Sarahann')


function matchName(arrayOfDrivers, nameToSearch) {
    return arrayOfDrivers.filter(driver => driver.name === nameToSearch)
    console.log(matchFound)
    //the above returns a new array, I just want to get the 
    //hometown data element
}

matchName(drivers, 'Bobby')