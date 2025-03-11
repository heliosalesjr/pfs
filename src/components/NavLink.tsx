import Link from 'next/link'
import React from 'react'

interface Props {
    planetName: string
    planetId: string
}

const NavLink = ( {planetName, planetId}: Props ) => {
  return (
    <Link href={planetId}>{planetName}</Link>
  )
}

export default NavLink