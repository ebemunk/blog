import React from 'react'

import { Quote as IQuote } from '../type'

export default function Quote({ data }: { data: IQuote }) {
  return (
    <figure>
      <blockquote
        style={{
          padding: '1rem',
          fontSize: '1.1rem',
          maxWidth: '43rem',
          margin: '0 auto',
          fontFamily: 'Tiempos Headline Web',
        }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: data.value.text,
          }}
          style={{
            position: 'relative',
            fontStyle: 'italic',
            margin: 0,
            marginBottom: '0.5rem',
          }}
          className="quote"
        />
        <figcaption>
          -{' '}
          <cite
            dangerouslySetInnerHTML={{
              __html: `${data.value.attr}`,
            }}
            style={{ margin: 0 }}
          />
        </figcaption>
      </blockquote>
    </figure>
  )
}
