// Singletons

class ClassName {
  private static instance: ClassName | null  = null
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object 가 있으면 return
    // ClassName으로부터 만든 object 가 없으면 생성
    if(ClassName.instance === null){
      ClassName.instance = new ClassName()
    }
    return ClassName.instance
  }
  private constructor() {}
}

// const aa = new ClassName()
// const ab = new ClassName()

const ab = ClassName.getInstance()
const ac = ClassName.getInstance()

console.log(a === b) // res :ture
