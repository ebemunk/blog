import React, { ReactNode } from 'react'
import { Waypoint as ReactWaypoint } from 'react-waypoint'

import { Quote as IQuote } from '../../type'
import Paragraphs, { Paragraph } from '../Paragraphs'
import Quote from '../Quote'
import { Section, Step } from './types'

export default function Waypoint({
  data,
  onEnter,
  style,
  number,
  total,
}: {
  data: Section
  onEnter: () => void
  style: any
  number: number
  total: number
}) {
  const { title, text, quote } = data.value.reduce<{
    title?: string
    quote?: IQuote
    text: Paragraph[]
  }>(
    (acc, cur) => {
      if (cur.type === 'title') {
        acc.title = cur.value
      } else if (cur.type === 'text') {
        acc.text.push(cur)
      } else if (cur.type === 'quote') {
        acc.quote = cur
      }
      return acc
    },
    {
      title: null,
      text: [],
      quote: null,
    },
  )

  return (
    <ReactWaypoint topOffset="10%" bottomOffset="10%" onEnter={onEnter}>
      <div style={style}>
        <div
          style={{
            textAlign: 'right',
            fontSize: '0.7rem',
            color: 'var(--color-text)',
          }}
        >
          {number}/{total}
        </div>
        {title && <h2>{title}</h2>}
        {quote && <Quote data={quote} />}
        <Paragraphs data={text} />
      </div>
    </ReactWaypoint>
  )
}

export function WP({
  step,
  setStep,
  number,
  total,
  children,
}: {
  step: Step
  setStep: (v: Step) => void
  number: number
  total: number
  children: ReactNode
}) {
  return (
    <ReactWaypoint
      topOffset="10%"
      bottomOffset="10%"
      onEnter={() => {
        setStep(step)
      }}
    >
      <div
        style={{
          border: '1px solid white',
          marginBottom: '90vh',
          pointerEvents: 'all',
          padding: '0 1rem',
        }}
      >
        <div
          style={{
            textAlign: 'right',
            fontSize: '0.7rem',
          }}
        >
          {number}/{total}
        </div>
        {children}
      </div>
    </ReactWaypoint>
  )
}
