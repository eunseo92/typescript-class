abstract class AbstractPerson {
  protected _name: string = 'Eunseo'
  
  abstract setName(name: string): void
}

//new AbstractPerson() //생성 불가 

class Person10 extends AbstractPerson{
  setName(name: string): void {
    this._name = name
  }
}

const p10 = new Person10()
p10.setName('Eunseo')