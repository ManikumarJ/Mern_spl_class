import React from 'react'
import Empsal from './components/Empsal'
import Userfind from './components/Userfind'
import ProductCard from './components/ProductCard'
import Calccartamt from './components/Calccartamt'
import StudManagementSys from './components/StudManagementSys'
import { OrderTask } from './components/OrderTask'

const App = () => {
  return (
    <>
      <Empsal/>
      <Userfind/>
      <ProductCard/>
      <Calccartamt/>
      <StudManagementSys/>
      <OrderTask/>

    </>
  )
}
export default App
