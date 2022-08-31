

/*a) Remova o excesso de espaços no final da string;*/

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";



console.log(minhaString.length);
console.log(minhaString.trim().length);
//trocar a string  
console.log(minhaString.replace('________', 'sticioso') )
