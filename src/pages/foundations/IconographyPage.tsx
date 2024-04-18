import { Card } from '../../components'
import { Page } from '../../layouts'

const IconographyPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Iconography</h1>
        <p>
          Simplicity meets sophistication in this collection of clean,
          modern icons. Embodying the essence of minimalism, our icons
          communicate with clarity and precision, guiding users intuitively
          through digital experiences.
        </p>
        
        <Card>
          <h2 className='subtitle'>Icons</h2>
          <p>
            TBD
          </p>
        </Card>
      </section>
    </Page>
  )
}

export { IconographyPage }
