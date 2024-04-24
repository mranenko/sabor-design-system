import { Card } from '../../components'
import { Page } from '../../layouts'

const HeaderPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Header</h1>
        <p>
          Featuring our iconic logo, our header sets the stage for an immersive dining experience.
          Keep track of your feast with real-time updates on your basket's contents and as estimate
          on your order preparation time. With its intuitive layout, our header will guide you on a
          flavorful journey through our offerings.
        </p>

        <Card>
          <h2 className='subtitle'>Variants</h2>
          <p>
            TBD
          </p>
        </Card>
      </section>
    </Page>
  )
}

export { HeaderPage }
