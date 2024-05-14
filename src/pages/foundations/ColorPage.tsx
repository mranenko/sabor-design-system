import { Card } from '../../components'
import { Page } from '../../layouts'

const ColorPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Color</h1>
        <p>
          Sabor color palette contains carefully curated colors that ensure
          a visually cohesive and engaging user experience across every
          screen and interaction. From lively hues that stimulate the
          appetite to comforting tones that convey warmth and hospitality,
          each color choice is a nod to the rich heritage of culinary
          artistry.
        </p>
        
        <Card>
          <h2 className='subtitle'>Main</h2>
          <div className='swatches'>
            <div className='swatch cilantro wide'></div>
            <div className='swatch lime wide'></div>
            <div className='swatch cocoa wide'></div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Cilantro</h2>
          <div className='swatches'>
            <div className='swatch cilantro-100'></div>
            <div className='swatch cilantro-200'></div>
            <div className='swatch cilantro-300'></div>
            <div className='swatch cilantro-400'></div>
            <div className='swatch cilantro-500'></div>
            <div className='swatch cilantro-600'></div>
            <div className='swatch cilantro-700'></div>
            <div className='swatch cilantro-800'></div>
            <div className='swatch cilantro-900'></div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Lime</h2>
          <div className='swatches'>
            <div className='swatch lime-100'></div>
            <div className='swatch lime-200'></div>
            <div className='swatch lime-300'></div>
            <div className='swatch lime-400'></div>
            <div className='swatch lime-500'></div>
            <div className='swatch lime-600'></div>
            <div className='swatch lime-700'></div>
            <div className='swatch lime-800'></div>
            <div className='swatch lime-900'></div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Cocoa</h2>
          <div className='swatches'>
            <div className='swatch cocoa-100'></div>
            <div className='swatch cocoa-200'></div>
            <div className='swatch cocoa-300'></div>
            <div className='swatch cocoa-400'></div>
            <div className='swatch cocoa-500'></div>
            <div className='swatch cocoa-600'></div>
            <div className='swatch cocoa-700'></div>
            <div className='swatch cocoa-800'></div>
            <div className='swatch cocoa-900'></div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { ColorPage }
