import { Card } from '../../components'
import { Page } from '../../layouts'

const GridPage = () => {
  return (
    <Page className='grid'>
      <section className='flex-column gap-1'>
        <h1 className='title'>Grids</h1>
        <p>
          Responsive, one-dimensional grids are currently used for all layouts. (Background and
          padding below are added for demonstration purposes only.)
        </p>
        
        <Card>
          <h2 className='subtitle'>Horizontal</h2>
          <div className='grid-row content-container gap-1 p-05'>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Vertical</h2>
          <div className='grid-column content-container gap-1 p-05'>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Responsive</h2>
          <div className='grid-row-medium content-container gap-1 p-05'>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
            <div className='column content-section p-1'>Content</div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { GridPage }
