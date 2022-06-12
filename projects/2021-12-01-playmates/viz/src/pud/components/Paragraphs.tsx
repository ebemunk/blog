import React, { ComponentProps } from 'react'

export interface Paragraph {
  type: 'text'
  value: string
}

export default function Paragraphs({
  data,
  ...rest
}: { data: Paragraph[] } & Omit<ComponentProps<'div'>, 'data'>) {
  return (
    <div {...rest}>
      {data.map((p, i) => (
        <p
          key={i}
          dangerouslySetInnerHTML={{
            __html: p.value,
          }}
        />
      ))}
    </div>
  )
}
