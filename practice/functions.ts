export {}

//------------------------ アロー関数の型定義 ------------------------
// let bmi: (weight: number, height: number)　←引数 => number　←返り値

let bmi: (weight: number, height: number) => number = (
  weight: number,
  height: number
): number => weight / (height * height)

console.log(bmi(175, 75))

//------------------------ 関数の型定義（オプショナル） ------------------------
// 型定義で？を付けると、その引数が存在しなくてもエラーを吐かなくなる。

let bmi2: (height: any, weight: any, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
) => {
  const bmi: number = weight / (height * height)
  if (printable) {
    console.log(bmi)
  }
  return bmi
}

//------------------------ デフォルトパラメータの型定義 ------------------------
// 関数のデフォルト引数の型設定

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate
}

console.log(nextYearSalary(1000))

//------------------------ Restパラメータの型定義 ------------------------

const reducer = (accumulater: number, currentValue: number) =>
  accumulater + currentValue

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer)
}
sum(1, 2, 3, 4)

//------------------------ オーバーロードの型定義 ------------------------
//　この場合、else if で条件を追加する必要がない

function double(value: number): number
function double(value: string): string

function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  } else {
    return value + value
  }
}

console.log(double(100))
console.log(double('go'))
// console.log(double(true))
