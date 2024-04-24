import {
  Basket,
} from '@phosphor-icons/react'

import { Button } from '../../components'
import {
  Header,
  Page,
} from '../../layouts'

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

        <Header className='relative'>
          <span>Header</span>
          <Button as='a' href='/review' variant='icon'>
            <Basket />
          </Button>
        </Header>
      </section>
    </Page>
  )
}

export { HeaderPage }
