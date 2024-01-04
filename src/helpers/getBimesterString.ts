export const getBimesterString = (bimestre: number) => {
    switch (bimestre) {
        case 1:
            return "PRIMEIRO";
        case 2:
            return "SEGUNDO";
        case 3:
            return "TERCEIRO";
        case 4:
            return "QUARTO";
        default:
            return ""; // ou outro valor padrão se necessário
    }
}