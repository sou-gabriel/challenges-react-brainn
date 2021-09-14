import { useState, useEffect } from 'react'
import { CarForm } from './components/car-form'
import { CarTable } from './components/car-table'
import { FeedbackMessage } from './components/feedback-message'
import './style.css'

export const App = () => {
  const [cars, setCars] = useState([])
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3333/cars')
      .then((response) => response.json())
      .then(setCars)
  }, [])
  return (
    <div className="container">
      {feedbackMessage !== '' && (
        <FeedbackMessage
          feedbackMessage={feedbackMessage}
          setFeedbackMessage={setFeedbackMessage}
        />
      )}
      <div className="left">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.4086 32.3516C42.7991 31.7422 42.7991 30.75 43.4086 30.1406L47.7135 25.8359C49.2448 24.3047 50.1511 22.1328 49.9792 19.7578C49.6979 15.625 46.0884 12.5 41.9475 12.5H12.5007V50H41.9475C46.0884 50 49.6979 46.875 49.9792 42.7422C50.1433 40.3672 49.2448 38.1953 47.7135 36.6641L43.4086 32.3516ZM37.4864 7.25781C37.1973 3.125 33.5877 0 29.4469 0H0V37.5H9.3755V9.375H37.3379C37.4707 8.69531 37.5332 7.98438 37.4864 7.25781Z"
            fill="#fff"
          ></path>
        </svg>
        <CarForm
          cars={cars}
          setCars={setCars}
          setFeedbackMessage={setFeedbackMessage}
        />
      </div>

      <div className="right">
        <CarTable
          cars={cars}
          setCars={setCars}
          setFeedbackMessage={setFeedbackMessage}
        />
      </div>
    </div>
  )
}
