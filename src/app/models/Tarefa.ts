export interface Tarefa {
    texto: string;
    feito: boolean;
    prioridade: Prioridade
}

export enum Prioridade {
    Baixa = 1,
    Media = 2,
    Alta = 3
}