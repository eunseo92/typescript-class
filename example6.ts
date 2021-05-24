// readonly properties
class Person6 {
  public readonly name: string ='Eunseo'
  private readonly country: string //readonly 키워드가 달려있는 경우 초기화 되는 영역에서 값을 지정 가능(pulbic, private)
  public constructor(private _name: string, private age: number){
    this.country = 'Korea'  //초기화 되는 영역에서 값을 지정할 수 있음
  }
  
  hello() {
    this.country ='Japan'
  }
}
const p7: Person6 = new Person6('eunseo', 30)
console.log(p7.name) //getter
p7.name = 'Sora' //setter
console.log(p7.name)