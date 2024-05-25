let nomeDoHeroi = "Chapolin"
let nivelXpDoHeroi = 11000
let hankDoHeroi = ""

if (nivelXpDoHeroi >= 10001 ){
    
    hankDoHeroi = "Radiante"

}else if(nivelXpDoHeroi >= 10000 ){
    
    hankDoHeroi = "Imoortal"
    
}else if(nivelXpDoHeroi >= 9000 ){
    
    hankDoHeroi = "Ascendente"
    
}else if(nivelXpDoHeroi >= 8000 ){
    hankDoHeroi = "Platina"
    
}else if(nivelXpDoHeroi >= 7000 ){
    
    hankDoHeroi = "Ouro"
    
}else if(nivelXpDoHeroi >= 5000 ){
    
    hankDoHeroi = "Prata"
    
}else if(nivelXpDoHeroi >= 2000 ){
    
    hankDoHeroi = "Bronze"
    
}else{
    
    hankDoHeroi = "Ferro"
    
}

switch(hankDoHeroi){
    case "Ferro":
    case "Bronze":
    case "Prata":
    case "Ouro":
    case "Platina":
    case "Ascendente":
    case "Imortal":
    case "Radiante":
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + hankDoHeroi)
    break
}
