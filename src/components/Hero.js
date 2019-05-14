import React from 'react'

export default function Hero({children,hero}) {
  return (
    <header className={hero}>
     {children}
    </header>
  )
}
//touch the component .defaultProps and then set the prop
//hero
Hero.defaultProps = {
  hero : 'defaultHero'
}