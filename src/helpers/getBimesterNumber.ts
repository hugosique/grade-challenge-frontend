export const getBimesterNumber = (bimestre: string) => {
    switch (bimestre) {
        case "PRIMEIRO":
            return 1;
        case "SEGUNDO":
            return 2;
        case "TERCEIRO":
            return 3;
        case "QUARTO":
            return 4;
        default:
            return 0; // ou outro valor padrão se necessário
    }
}