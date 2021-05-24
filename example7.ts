// index signiture

class Students {
  // eunseo: string ='male' // 새로운 학생 생성될떄마다 지정해야하는 단점, 
  [index: string] : 'male' | 'female'  //index signiture, class내에서 어떤 이름도 정의 가능
  
  //eunseo = 'male' //Error
  eunseo: 'male' = 'male'
}

const a = new Students()
a.eunseo = 'male'
a.sora = 'male'
console.log(a)

const b = new Students()
b.sori = 'female'
b.yuzu = 'female'
console.log(b)