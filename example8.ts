// static p

class Person8 {
  private static city = 'seoul'
  public hello(){
    console.log('안녕하세요', Person8.city)
  }
  public change(){
    Person8.city = 'japan'
  }
}

const p8 = new Person8()
// p8.hello() // static 메서드 적용 시 사용 불가
p8.hello()  // res :안녕하세요 seoul
const p9 = new Person8()
p9.hello  // res : 안녕하세요 seoul
p8.change() // seoul -> japan으로 변경 
p9.hello // res : 안녕하세요 japan

//Person8.hello() //Person8.city //private 적용 시 외부에서 사용 불가
