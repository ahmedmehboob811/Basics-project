 //for creating tsconfig file:npm --init
//for creating package.json file:npm init -y or --yes

import inquirer from "inquirer";

const file= "js.file,package.json file,tsconfig fie";

const answers = await inquirer.prompt([
    {
        name:"userguessfile",
        type:"choices",
        message:"Please choose a file"

    }
])
if(answers.userguessfile ==="js file"){
    console.log("tsc or tsc main.ts");
}
else if (answers.userguessfile ==="package.json file") {
    console.log("npm init -y or -yes");
    
}
else if (answers.userguessfile ==="tsconfig.json file") {
    console.log("tsc --init");
    
} else {
    console.log("invalid file");
    
}
 