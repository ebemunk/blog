import React from 'react'
import { useIsMetric } from '../../store'

export default function Measurement({
  metric,
  imperial,
}: {
  metric: string
  imperial: string
}) {
  const isMetric = useIsMetric()

  return <>{isMetric ? metric : imperial}</>
}
