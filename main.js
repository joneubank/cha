exports.hash = function(input) {
    return shittyHash(input);
}


function shittyHash (input) {
    const PERMUTATIONS = 16777216;
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    let output = ['0','0','0','0','0','0'];
    let tally = 19;
    for(let index = 0; index < output.length*2; index++) {

        for (let i = 0; i < input.length; i++){
            const code = input.charCodeAt(i);
            tally += i;
            tally += tally << 2;
            tally += code;
            tally = tally >> 1;
            tally += code * 3;
            tally = tally >> 1;

            char_index = (input.charCodeAt(i)+tally)%chars.length;
            while (char_index < 0) {
                char_index += chars.length;
            }
            output[tally%output.length] = chars[char_index];
        }
    }

    
    return output.toString().replace(new RegExp(',', 'g'),'');
}

function hasFunctionTemplate (input) {
    const PERMUTATIONS = 16777216;
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    
    // do some hashing, make an output

    let output = ['0','0','0','0','0','0'];

    return output.toString().replace(new RegExp(',', 'g'),'');
}