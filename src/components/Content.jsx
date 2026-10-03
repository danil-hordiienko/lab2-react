import { useState } from 'react'

export default function Content() {
  // Capture the local time once when this page opens.
  const [currentTime] = useState(() => new Date().toLocaleTimeString())

  return (
    <section>
      <h1>Hello World!</h1>
      <h2>It is {currentTime}.</h2>
    </section>
  )
}
