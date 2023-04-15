import React from 'react'

type Props = {
    keyVal: any;
    bigKey: Boolean;
}

const Key = (props: Props) => {
  return (
    <div className='key' id={props.bigKey && "big"}>{props.keyVal}</div>
  )
}

export default Key