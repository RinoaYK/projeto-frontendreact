import React, { createContext, useState, useEffect } from 'react'
import moment from 'moment'

export const DiscountContext = createContext()

const DiscountProvider = ({ children }) => {
  // localStorage.clear();

  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = moment.duration(moment().endOf('day').diff(moment()))
      setHours(String(duration.hours()).padStart(2, '0'))
      setMinutes(String(duration.minutes()).padStart(2, '0'))
      setSeconds(String(duration.seconds()).padStart(2, '0'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const [randomNumber, setRandomNumber] = useState(null)

  useEffect(() => {
    const storedNumber = localStorage.getItem('randomNumber')
    const storedDate = localStorage.getItem('randomNumberDate')
    const currentDate = new Date().toDateString()

    if (storedNumber && storedDate === currentDate) {
      setRandomNumber(parseInt(storedNumber))
    } else if (
      randomNumber === null ||
      (hours === '00' && minutes === '00' && seconds === '00')
    ) {
      const newNumber = Math.floor(Math.random() * 15) + 1
      setRandomNumber(newNumber)
      localStorage.setItem('randomNumber', newNumber)
      localStorage.setItem('randomNumberDate', currentDate)
    }
  }, [randomNumber, hours, minutes, seconds])

  return (
    <DiscountContext.Provider value={{ hours, minutes, seconds, randomNumber }}>
      {children}
    </DiscountContext.Provider>
  )
}
export default DiscountProvider
