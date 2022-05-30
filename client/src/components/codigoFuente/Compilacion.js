import React from 'react'

export const Compilacion = ({output, statusCode, memory, cpuTime}) => {
  return (
    <div>
      <h3>Output: {output}</h3>
      <h3>Memoria: {memory}</h3>
      <h3>Tiempo de CPU: {cpuTime}</h3>
    </div>
  )
}
