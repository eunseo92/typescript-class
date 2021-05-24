//inheritance

class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void{
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`)
  }

  protected printName(): void {
    console.log(this._name, this._age)
  }
}

const p = new Parent('eunseo',30)
p.print()

class Child extends Parent {
  //public _name = 'Eunseo Park' //override
  public gender = 'male'
  
  constructor(age: number) {  //자식생성자에는 super() 생성
    super('Eunseo Park', age) 
  }
}

const c = new Child(3)
c.print()
c.gender
//c._name
c.print()

