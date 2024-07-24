## Example 3

| Action   | Performed on | Side Effect | Return Value | Is Return Value Used? |
| -------- | ------- | ------- | ------- | ------- |
| method call (map) | The outer array | None | New array ([1, 3]) | No |
| callback execution | Each sub-array | None | | Number at index 0 of sub-array | Yes, used by map for transformation |
| element access ([0]) | Each sub-array | None | Element at index 0 of sub-array | Yes, used by console.log |
| method call (console.log) | Element at index 0 of each sub-array | Outputs a string representation of an Integer | undefined | No |
| element reference ([0]) | Each sub-array | None | Element at index 0 of sub-array | Yes, explicitly returned by callback |