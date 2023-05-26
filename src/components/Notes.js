
// split() splits a string into an array of substrings, which uses the delimiter as the parameter to divide each string (from sting to array)

// split("").forEach((character) => {}) returns each character from the substring, which would be useful if I was returning a new component

// substring() removes the character of a string, then returns the rest of the new string without the selected character

// slice() extracts the selected characters of the string and returns a new string without the characters: a negative index starts the extraction at the end of the string, while a positive index starts at the front

// join() joins substrings from an array into a single string, which uses the delimiter as the parameter to combine each string (from array to string)

// charAt() returns the character from a string based on the specified index as the parameter: 0, 1, length - 1, or other


// Option 1 for character-coloring:
// sx={{ color: { correct ? "red" : "blue" } }};

// Option 2 for character-coloring:
// create a child component that returns a span with the paragraph data for each letter, which then I would use className for correct and incorrect letters


// onChange vs onKeyDown:
// * create hard-coded letters for event.key that would determine which characters the keydown event should listen to..
// control the focus of the input if onChange determines typing test
