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
          <h2 className='subtitle'>Limón</h2>
          <div className='tiles logos'>
            <div className='tile logo'>
              <img
                alt='Sabor Design System'
                className='logo'
                src='/images/logos/sabor.svg'
              />
            </div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { LogoPage }
