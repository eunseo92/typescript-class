// Accecss Modifiers
class Person3 {
  public name: string ='eunseo'
  private _age!: number   // '_' 붙을 시 외부에서 호출 불가 
  public  constructor(age?: number) {
    if(age === undefined) {
      this.age = 20
    }
    else{
      this.age = age
    }
  }
  public async init() {
    
  }
}

const p4: Person3 = new Person3(30)
console.log(p4)