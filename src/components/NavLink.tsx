import Link from 'next/link'
import React from 'react'

interface Props {
    planetName: string
    planetId: string
}

const NavLink = ( {planetName, planetId}: Props ) => {
  return (
    <Link href={planetId} style={{marginRight: "1rem"}}>
        {planetName.toUpperCase()}
    </Link>
  )
}

export default NavLink