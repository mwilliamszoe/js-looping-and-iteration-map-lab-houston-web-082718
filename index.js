// Write `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names in lowercase. 

function lowerCaseDrivers(list) {
  return list.map(function(driver) {
    return driver.toLowerCase();
  });
}

//Write `nameToAttributes` - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.

function nameToAttributes(list) {
  return list.map(function(driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}

// Write `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array. 

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}