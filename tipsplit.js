let grossTotalTips = 1738
let bartender1Hours = 11
let bartender2Hours = 7
let bartender3Hours = 6
let barBackPercentage = 10

let barBackCut = barBackPercentage / 100
let barBackTips = grossTotalTips * barBackCut
let totalHours = bartender1Hours + bartender2Hours + bartender3Hours
let netTotalTips = grossTotalTips - barBackTips
let hourlyearnings = netTotalTips / totalHours

console.log('Hourly ' + hourlyearnings)
console.log('Eric ' + bartender2Hours * hourlyearnings)
console.log('Chelsea ' + bartender3Hours * hourlyearnings)
console.log('Chase ' + bartender1Hours * hourlyearnings)
console.log('Ryan ' + barBackTips)