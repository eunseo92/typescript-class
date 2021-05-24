//Getter & Setter
class Person5 {
  public  constructor(public _name: string, private age: number){}
  
  get name() {
    //
    console.log('get')
    return this._name + 'Park'
  }


  set name(n: string){
    console.log('set')
    this._name = n
  }
}
const p6: Person5 = new Person5('eunseo', 30)
console.log(p6.name) //getter
p6.name = 'Sora' //setter
console.log(p6.name)