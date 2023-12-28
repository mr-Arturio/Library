Roman Numeral Converter
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
- M	1000
- CM	900
- D	500
- CD	400
- C	100
- XC	90
- L	50
- XL	40
- X	10
- IX	9
- V	5
- IV	4
- I	1
All roman numerals answers should be provided in upper-case.


```javascript
function convertToRoman(2014) {
    // Mapping of Roman numerals to their corresponding Arabic values
    const romanMap = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    // Initialize an empty string for the result
    let romanNumeral = "";//MMXIV

    // Loop through the romanMap array
    for (const [key, value] of romanMap) {
        while (2014 >= value) { // 1.2014>"M", 1000, 2.1014>"M", 1000, 3.14>"X", 10, 4.4>="IV", 4
            // Add roman to romanNumeral and subtract value from num
            romanNumeral += key; // 1.+M 2.+M 3.+X 4.+IV
            2014 -= value;// 1. 2014-1000=1014, 2.1014-1000=14, 3.14-10=4 4.4-4=0 done
        }
    }

    // Return the accumulated Roman numeral string
    return romanNumeral;
}

// Example usage
console.log(convertToRoman(2));  // Should return "II"
console.log(convertToRoman(3));  // Should return "III"
console.log(convertToRoman(4));  // Should return "IV"
console.log(convertToRoman(2014)); // Should return "MMXIV"
// ... and so on for other numbers

```
