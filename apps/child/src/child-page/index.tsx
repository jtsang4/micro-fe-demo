import { useNavigate } from 'react-router-dom'

export const ChildPage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <p>Child page content</p>
      <button type="button" onClick={() => { navigate(-1) }}>Back</button>
    </div>
  )
}
