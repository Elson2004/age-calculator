const howOld = (age, year) => {
    let yearBorn = 2004;
    let currentYear = 2020;
    const yearDifference = year - currentYear;
    const newAge = Math.abs(age + yearDifference);
    if (year > currentYear) {
        return `You will be ${newAge} in the year ${year}`;
    } else if (year < currentYear && year > yearBorn) {
        return `You were ${newAge} in the year ${year}`
    } else {
        return `The year ${year} was ${newAge} years before you were born`;
    }
}
console.log(howOld(16, 2000));