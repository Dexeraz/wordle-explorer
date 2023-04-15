import React from 'react'

type Props = {
  letterPos: number,
  attemptVal: number,
}

const Letter = (props: Props) => {
  return (
    <div>row: {props.letterPos}, attempt: {props.attemptVal}</div>
  )
}

export default Letter
