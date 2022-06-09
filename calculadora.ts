class Calculadora{

    static Somar(x: number, y: number): number{
        return x+y;
    }

    static Subtrair(x: number, y:number): number{
        return x-y;
    }

    static Dividir(x:number, y:number): number{
        return x/y; 
    }
    
    static Multiplicar(x: number, y: number): number{
        return x*y;
    }

    static Potencia(x: number, y: number): number{
        return Math.pow(x,y);
    }

    static Tabuada(x: number): number[]{
        let values: number[] = [];
        for (let index = 1; index <=10; index++) {
            values.push(x*(index));
        }
        return values;
    }
    
    static Par(x: number): boolean{
        return (x%2==0);
    }

    static Impar(x: number): boolean{
        return (x%2!=0);
    }

    static Positivo(x: number): boolean{
        return (x>=0);
    }

    static Negativo(x: number): boolean{
        return (x<0);
    }
}
