import React, { FC } from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import axios from 'axios'

const Home: FC = () => {
  //------------------------ boolean型 ------------------------

  let isFinished: boolean = true
  isFinished = false
  // isFinished = 1
  console.log(isFinished)
  //------------------------ number型 ------------------------
  let year: number = 1994
  // year = false

  //------------------------ string型 ------------------------

  let name: string = 'tanaka'
  // name = 1

  //------------------------ Array型 ------------------------
  let numbers: number[] = [1, 2, 3]

  let numbers2: Array<number> = [1, 2, 3]

  let strings: string[] = ['a', 'i', 'u']

  let nijigen: number[][] = [
    [100, 50],
    [110, 60],
  ]

  //------------------------ tuple型 ------------------------
  let hairetsu: (number | boolean | string)[] = [1, false, 'japan']

  let profile: [string, number] = ['aaa', 40]
  // profile = [40, 'bbb']

  //------------------------ any型 ------------------------
  let url: string =
    'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

  axios.get(url).then((res) => {
    interface Article {
      id: number
      title: string
      description: string
    }
    let data: Article[] = res.data

    // data = [
    //   {
    //     id: 2,
    //     title: 'aaa',
    //     description: 'aaa',
    //   },
    // ]
  })

  //------------------------ void型 ------------------------

  // returnしない関数についてはvoid型を使用する
  const nonReturn = (): void => {
    console.log('NO Return')
  }
  console.log(nonReturn())

  //------------------------ null型 ------------------------
  let absence: null = null

  // absence = 'hello'

  //------------------------ undefined型 ------------------------
  let data: undefined = undefined

  // data = 'hello'

  //------------------------ never型 ------------------------
  // エラーが起きるなど、呼び元に帰ってこない時に使用する。
  // 例外を起こす関数に関してはneverと覚える。
  const error = (message: string): never => {
    throw new Error(message)
  }

  // try {
  //   error('test')
  // } catch (error) {
  //   console.log({ error })
  // }

  // let foo: void = undefined
  // let bar: never = error('only me')

  //------------------------ object型 ------------------------
  let profile1: object = { name: 'tanaka' }
  profile1 = { year: 1994 }

  let profile3: { name: string } = { name: 'tanaka' }
  // profile3 = { year: 1999 }

  //------------------------ エイリアス ------------------------
  //（先頭は大文字）typeで宣言
  type Mojiretu = string

  let mojiretu: Mojiretu = 'aaa'

  let example1 = {
    name: 'tanaka',
    age: 25,
  }

  type Profile = {
    name: string
    age: number
  }

  let example2: Profile = {
    name: 'suzuki',
    age: 23,
  }

  // こちらのほうが合理的
  type Profile2 = typeof example1

  //------------------------ interface型 ------------------------

  interface ObjectInterface {
    name: string
    age: number
  }

  type ObjectType = { name: string; age: number }

  let object1: ObjectInterface = {
    name: 'aaa',
    age: 10,
  }

  //------------------------ unknown型 ------------------------
  // コンパイル前にエラーを発見できる（この変数は数値じゃないかもしれない）
  const kansu = (): number => 45
  let numberAny: any = kansu()
  let numberUnknown: unknown = kansu()

  let sumAny = numberAny + 10
  if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10
  }
  // unknown型で指定した変数の型が確定しているなら実行する（Type Guard）

  //------------------------ intersection(交差)型 ------------------------
  // 複数の方を & で合成させて新しい方を作ることができる
  type Pitcher1 = {
    throwingSpeed: number
  }

  type Batter1 = {
    battingAve: number
  }

  type TwoWayPlayer = Pitcher1 & Batter1

  const Sasaki: Pitcher1 = {
    throwingSpeed: 154,
  }

  const Ochiai: Batter1 = {
    battingAve: 0.367,
  }

  const Ohtani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAve: 0.286,
  }

  //------------------------ union型 ------------------------
  // | を利用して複数の型を割り当てる
  let value: number | string = 1
  value = 'foo'
  value = 1

  //------------------------ Literal型 ------------------------
  //　型の中でも指定した値のみ許容する

  let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日'
  dayOfTheWeek = '月'
  // dayOfTheWeek = '31'

  let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
  month = 12
  // month = 13

  //------------------------ enum型 ------------------------
  // 連番を付与したいとき
  // 開始番号を変更したいとき、先頭の数値をオーバーライドする
  enum Manths {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December,
  }

  //　番号が出力される(0スタート)
  console.log(Manths.January)

  enum Colors {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
  }

  let green = Colors.WHITE

  return <></>
}
export default Home
