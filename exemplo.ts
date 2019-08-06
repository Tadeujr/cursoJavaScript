interface Ponto{
   
   calPonto():number;
   

}

class Ponto3d implements Ponto{
    protected x: number;
    protected y: number;
    protected z: number;

     constructor( x:number,y:number,z:number){
         this.x = x;
         this.y = y;
         this.z = z;
    }


   public calPonto():number{
       let soma: number = this.x+this.y+this.z;
       return soma;
   }
}

 let ponto = new Ponto3d(1,2,3);
 console.log(ponto.calPonto())