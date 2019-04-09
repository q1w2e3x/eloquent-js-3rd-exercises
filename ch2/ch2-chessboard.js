let size = 8;
let board  = '';
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        (i + j) % 2 == 0 ? board += ' ' : board += '#' 
    }
    board += '\n'
}
console.log(board);
