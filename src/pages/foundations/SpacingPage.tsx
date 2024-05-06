import { Card } from '../../components'
import { Page } from '../../layouts'

const SpacingPage = () => {
  return (
    <Page className='spacing'>
      <section className='flex-column gap-1'>
        <h1 className='title'>Spacing</h1>
        <p>
          The spacing for margins and padding uses fractions and multiples of 16px.
        </p>
        
        <Card>
          <h2 className='subtitle'>Margins</h2>
          <div className='content-container'>
            <div className='content-section m-05 p-1'>Margin: 8px</div>
          </div>
          <div className='content-container'>
            <div className='content-section m-1 p-1'>Margin: 16px</div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Padding</h2>
          <div className='content-section p-05'>Padding: 8px</div>
          <div className='content-section p-1'>Padding: 16px</div>
        </Card>
      </section>
    </Page>
  )
}

export { SpacingPage }
