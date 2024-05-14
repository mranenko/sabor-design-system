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
          <h2 className='subtitle'>Sabor</h2>
          <div className='tiles logos'>
            <div className='tile logo dark'>
              <img
                alt='Sabor Design System Logo'
                className='logo'
                src='/assets/images/logos/sabor-logo-light.svg'
              />
            </div>

            <div className='tile logo'>
              <img
                alt='Sabor Design System Logo'
                className='logo'
                src='/assets/images/logos/sabor-logo-dark.svg'
              />
            </div>

            <div className='tile logomark dark'>
              <img
                alt='Sabor Design System Logomark'
                className='logomark'
                src='/assets/images/logos/sabor-logomark-light.svg'
              />
            </div>

            <div className='tile logomark'>
              <img
                alt='Sabor Design System Logomark'
                className='logomark'
                src='/assets/images/logos/sabor-logomark-dark.svg'
              />
            </div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { LogoPage }
