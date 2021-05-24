class Person2 {
  name: string ='eunseo'
  age!: number
  constructor(age?: number) {
    if(age === undefined) {
      this.age = 20
    }
    else{
      this.age = age
    }
  }
  async init() {

  }
}
  

const p2: Person2 = new Person2(30)
const p3: Person2 = new Person2()
console.log(p2)
console.log(p2.age) 
console.log(p3.age) 