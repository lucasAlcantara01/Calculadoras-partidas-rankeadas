function calcularRank(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo 
}

let vitorias = calcularRank(90, 5)

switch (true) {
    case vitorias <= 10:
        nivel = 'Ferro'
        break;
    case vitorias > 11 && vitorias <= 20:
        nivel = 'Bronze'
        break;
    case vitorias > 21 && vitorias <= 50:
        nivel = 'Prata'
        break;
    case vitorias > 51 && vitorias <= 80:
        nivel = 'Ouro'
        break;
    case vitorias > 81 && vitorias <= 90:
        nivel = 'Diamante'
        break;
    case vitorias > 91 && vitorias <= 100:
        nivel = 'Lendário'
        break;
    case vitorias >= 101:
        nivel = 'Imortal'
        break;
    default:
        nivel = 'Desconhecido';
        break;
}

console.log(`O Herói tem de saldo de ${vitorias} está no nível de ${nivel}`)