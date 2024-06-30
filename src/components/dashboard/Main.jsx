import { Aside } from "./Aside"
import { Dashmain } from "./Dashmain"


const Main = () => {
  return (
    <main className="flex justify-between mt-2">

      <Dashmain />

      <Aside />

    </main>
  )
}

export {Main}