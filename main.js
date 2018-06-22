console.log('(Type "exit" to exit)')
console.log('\nTrivial Allocation Problem Solution\nMade by Tiago Moraes, Matheus Belfort & Gabriel Lyra');
console.log('-------------------------------------------------------');

var exit = false;

while (!exit == true) {

    //imports te modules.
    let allocation_solver = require('allocation_solver');
    let readline = require('readline-sync');
    
    //asks the user what's the file name.
    let fileName = readline.question("What's the file name?\n");
    console.log('\033c');
    
    if (fileName != 'exit') {      
        console.log('-------------------------------------------------------')

        //starts counting runtime
        console.time('runtime');

        let result = allocation_solver.allocate(fileName);
        for (let i = 0; i < result.length; i++) {
            console.log('Empresa ' + (result[i][0] + 1) + ' no local ' + (result[i][1] + 1));
        }
        console.log('\n');
        console.timeEnd('runtime');
        console.log('-------------------------------------------------------\n\n\n\n')
        console.log('Test again:');

    } else {
        exit = true;
    }
}