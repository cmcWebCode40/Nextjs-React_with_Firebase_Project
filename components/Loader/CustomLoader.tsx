import { NextPage } from 'next'
import React from 'react'
import Loader from 'react-loader-spinner'

interface ComProps {
  type: string
  width?: number
  color?: string
  height?: number
  timeout?: number
  visible?: boolean
}

const CustomLoader: NextPage<ComProps> = ({
  type,
  visible,
  color,
  height,
  width,
  timeout,
}): JSX.Element => {
  return (
    <Loader
      type={'Oval'}
      visible={visible}
      color={color}
      height={height}
      width={width}
      timeout={timeout} //3 secs
    />
  )
}

CustomLoader.defaultProps = {
  type: 'Oval',
  width: 100,
  color: '#00BFFF',
  height: 100,
  timeout: 0,
  // visible: false,
}

export default CustomLoader
