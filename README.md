# Colour Hash Algorithm (CHA)

Quick and dirty attempt to make a hash algorithm that converts any string into a 6 character hexadecimal string. Theres nothing fancy about the alogirthm itself, but attempts were made to have it achieve the make the algorithm generate noticeably different but similar outputs for strings that differ by a single character or single bit.

A running demo of this repo is hosted [here](http://www.joneubank.com/things/cha/demo.html).

### Node Module Stuff

`npm test` will generate the hash output for every line in the testwords.csv file. Useful for testing modifications to the hash algorithm.
