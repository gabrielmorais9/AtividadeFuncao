function converterParaSegundos(minutos, segundos) {
    return (minutos * 60) + segundos;
}

function calcularTempoPlaylist(playlist) {
    let tempoTotal = 0;

    for (let musica of playlist) {
        tempoTotal += converterParaSegundos(musica.minutos, musica.segundos);
    }

    return tempoTotal;
}

let playlist = [
    {
        titulo: "Do I Wanna Know?",
        minutos: 4,
        segundos: 32
    },
    {
        titulo: "Sweet Child O' Mine",
        minutos: 5,
        segundos: 56
    },
    {
        titulo: "Back In Black",
        minutos: 4,
        segundos: 15
    }
];

let duracaoTotal = calcularTempoPlaylist(playlist);

console.log("Duração total da playlist: " + duracaoTotal + " segundos");
