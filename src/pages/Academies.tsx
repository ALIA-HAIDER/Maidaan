import { ApFeatures } from '@/components/ApFeatures/ApFeatures'
import { Apheader } from '@/components/Apheader/Apheader'
import { AcademyGrid } from '@/components/ApSearch/AcademyGrid'
import React from 'react'

const Academies = () => {
  return (
    <div>
      <Apheader/>
      <ApFeatures/>
      {/* <SportsSelection/> */}
      <AcademyGrid/>
    </div>
  )
}

export default Academies
