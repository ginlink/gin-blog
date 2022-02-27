import styled from 'styled-components'
import { Text, TextProps } from 'rebass'
import React from 'react'

const TextWrapper = styled(Text)<{ color?: string; fontSize?: number }>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize + 'px'};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  label(props: TextProps) {
    return <TextWrapper fontWeight={600} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={40} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={32} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={22} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} {...props} />
  },
}
