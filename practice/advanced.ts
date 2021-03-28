export {}

//------------------------ 型の互換性 ------------------------
// any型は代入されると型が変わる
// 文字列リテラル型はstring、数値リテラル型はnumber型と互換性がある。その他にも互換性のある方は存在する。

let foo: any
let bar: string = 'TS'

foo = bar

let foo1 = 'TS'
let bar1 = 1
// foo1 = bar1

//------------------------ ジェネリクス型(汎用的なメソッド、クラスに型を紐付ける) ------------------------

//↓やっていることは同じだが、型が違うものを統一したい

// const echo = (arg: number): number => arg
// const echo = (arg: string): string => arg

const echo = <T>(arg: T): T => arg

// このように抽象的な型定義をして、関数の呼び出し時に<type>のようにしてあげれば良い。

console.log(echo<number>(100))
console.log(echo<string>('hello'))
console.log(echo<boolean>(true))

//------------------------ 型のアサーション ------------------------
// as type としてあげることで、アサーションを使用できる。<type>でも可能だが、非推奨。

let name: any = 'tanaka'

let length = (name as string).length

// let length = (<string>name).length

// length = 'foo'

//------------------------ constアサーション ------------------------
// as const とすることで 文字リテラル型のみを指定することができる。
// オブジェクトに指定すると read only になる(どれだけネストされていても全て指定される)。

let name1 = 'sasaki'

name1 = 'suzuki'

let name2 = 'sasaki' as const

// name2 = 'susuki'

let profile = {
  name: 'tanaka',
  height: 180,
} as const

// profile.name = "yamada"

//------------------------ Nullable Types ------------------------
// nullかもしれない型に対してはunion型で部分的に対応する。

let profile1: { name: string; age: number | null } = {
  name: 'tanaka',
  age: null,
}

//------------------------ インデックスシグネチャ ------------------------
// オブジェクトの添字に対する型注釈
// オブジェクトのプロパティが決まっていない時にはこれを使う。
interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}

let profile2: Profile = { name: 'tanaka', underTwenty: false }

profile2.name = 'tanaka'
profile2.age = 20
profile2.nationality = 'japan'
