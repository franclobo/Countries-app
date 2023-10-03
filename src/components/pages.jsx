import { Routes, Route } from 'react-router-dom'
import { Countries } from './countries/index'
import { Details } from './countries/details'

export const Pages = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </section>
  )
}
