import { Card } from '../../components'
import { Page } from '../../layouts'

const LogoPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Logos</h1>
        <p>
          Our logos are the fiesta before the feast, embodying the lively
          spirit and authentic flavors of Mexican cuisine. ¡Buen provecho!
        </p>
        
        <Card>
          <h2 className='subtitle'>Mi Casa</h2>
          <p>
            TBD
          </p>
        </Card>
      </section>
    </Page>
  )
}

export { LogoPage }
