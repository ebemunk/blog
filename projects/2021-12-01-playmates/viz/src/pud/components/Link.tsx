import React, { ComponentProps } from 'react'

export default function Link(props: ComponentProps<'a'>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />
}
