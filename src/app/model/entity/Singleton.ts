export class Singleton {
     
     public qntdProdCarrinho: number;
     public mobile : boolean;  
     public textoPesquisa : string;

     //CLASSE PADRAO SINGLETON INSTANCIA ACESSADA SOMENTE ANTRAVES DESTA VARIAVEL.
     public static _instancia : Singleton;

     constructor(){
        if( Singleton._instancia ){
            throw new Error("Erro: Classe ja instanciada padrao Singleton! ");
        }
        Singleton._instancia = this;    
        this.qntdProdCarrinho = 0;
     }

}