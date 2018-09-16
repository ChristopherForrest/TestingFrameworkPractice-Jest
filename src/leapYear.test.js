var leapYear = require('./leapYear.js')

it('finds a leap year',() => {
    let years = [1804,1808,1812,2088,1940,2000]

    years.forEach(year => {expect(leapYear(year)).toBe(year + " is a leap year")});

})
it('does not find a leap year',() => {
    let years = [1805,1900,1809,2029,2001,1902]

    years.forEach(year => {expect(leapYear(year)).toBe(year + " is not a leap year")});

})