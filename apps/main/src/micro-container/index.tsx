import 'react'
import { MICRO_APP_CONTAINER } from '../micro'

export const MicroContainer = () => {
  return (
    <div>
      <h1>This is the title of main App.</h1>
      <br />
      <div style={{ display: 'flex' }}>
        <div style={{ flexBasis: '50%', border: '1px solid #7a7374' }}>
          This is content of main App.
        </div>
        <div style={{ flexGrow: 1 }} id={MICRO_APP_CONTAINER} />
      </div>
    </div>
  )
}
