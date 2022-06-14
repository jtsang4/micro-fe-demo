import { useNavigate } from 'react-router-dom'

export const PageA = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>Page A</p>
      <button type="button" onClick={() => { navigate(-1) }}>Back</button>
    </div>
  )
}
