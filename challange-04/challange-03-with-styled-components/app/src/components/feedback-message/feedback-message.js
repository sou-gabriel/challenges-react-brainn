import { useEffect } from 'react'
import { Container } from './style'

export const FeedbackMessage = ({ feedbackMessage, setFeedbackMessage }) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      setFeedbackMessage('')
    }, 5000)

    return () => {
      clearTimeout(timerId)
    }
  }, [setFeedbackMessage])

  return <Container>{feedbackMessage}</Container>
}
