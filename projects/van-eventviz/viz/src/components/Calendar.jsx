import React from 'react'
import DayPicker from 'react-day-picker'

import '!style-loader!css-loader!react-day-picker/lib/style.css'

export default function Calendar() {
  return (
    <div>
      <DayPicker showOutsideDays firstDayOfWeek={1} />
    </div>
  )
}
