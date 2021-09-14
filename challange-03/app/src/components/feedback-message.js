import { useEffect } from 'react'

export const FeedbackMessage = ({ feedbackMessage, setFeedbackMessage }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setFeedbackMessage('')
    }, 5000)

    return () => {
      clearTimeout(timerId)
    }
  }, [setFeedbackMessage])

  return <div className="feedback-message">{feedbackMessage}</div>
}
