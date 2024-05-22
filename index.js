let nomeDoHeroi = "Chapolin"
let nivelXpDoHeroi = 900
let hankDoHeroi = ""

switch (nivelXpDoHeroi){
    case nivelXpDoHeroi <= 1000:
    hankDoHeroi = "Ferro"
    console.log("O Heroi de nome " + nomeDoHeroi + " está no nivel de " + hankDoHeroi)
    break

    case nivelXpDoHeroi >= 2000:
    hankDoHeroi = "Bronze"
    console.log("O Heroi de nome " + nomeDoHeroi + " está no nivel de " + hankDoHeroi)
    break
}