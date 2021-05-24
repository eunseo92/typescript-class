// Initiallization in constructor parameters
class Person4 {
  public  constructor(public name: string, private age: number){  //앞에 접근제어자 붙일 시 = this.name(age) = name(age)
    
  }
  
}
const p5: Person4 = new Person4('eunseo', 30)
console.log(p5)