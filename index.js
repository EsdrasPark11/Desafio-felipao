let nome = "Esdras Park";
let experiencia = 23000;

if (experiencia === 999 || experiencia <= 999){
    console.log("Ferro");
}

else if (experiencia >= 1000 && experiencia <= 1999){
	console.log("Bronze");
} 

else if (experiencia >= 2000 && experiencia <= 2999){
	console.log("Prata");
} 

else if (experiencia >= 3000 && experiencia <= 3999){	
	console.log("Ouro");
}

else if (experiencia >= 4000 && experiencia <= 5999){
	console.log("Platina");
}

else if (experiencia >= 6000 && experiencia <=8999){
	console.log("Diamente");
}    

else if (experiencia >= 9000 && experiencia <= 14999){
	console.log("Cosmico");
}

else if (experiencia >= 15000){
	console.log("Challenger");
}    


console.log(nome + " Nível de XP " + experiencia)


// considerações finais: Fiz alguma modificações no exemplo que o professor pediu para ficar do meu agrado

// opitei por usar o (else if), 

//tive bastante dificuldade precisei da ajuda de um amigo para lembrar de usar o ( || )

// e precisei usar o chat GPT para lembrar de usar o ( && ) e ( ; )
