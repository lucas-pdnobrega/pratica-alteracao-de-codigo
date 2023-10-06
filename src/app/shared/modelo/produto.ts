export class Produto {

    quantidade:number;
    nome:string;
    preco:number;

    constructor(quantidade:number=0, nome:string="", preco:number=0.0) {
        this.quantidade = quantidade;
        this.nome = nome;
        this.preco = preco;
    }
    
    public toString():string {
        return `${this.quantidade}x ${this.nome}s - ${this.preco}R$`
    }

}