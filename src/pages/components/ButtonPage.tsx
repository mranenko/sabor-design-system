import {
  ArrowLeft,
  ArrowRight,
  Basket,
  Plus,
  User,
} from '@phosphor-icons/react'

import {
  Button,
  Card,
} from '../../components'
import { Page } from '../../layouts'

const ButtonPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Button</h1>
        <p>
          Transporting the vibrancy of Mexican culture into digital interfaces,
          our button components encapsulate the essence of fiesta and flavor.
          From the rich hues of mole and refried beans to the lively tones of
          cilantro and salsa verde, each button reflects the palette of Mexico's
          diverse landscapes and culinary heritage.
        </p>

        <Card>
          <h2 className='subtitle'>Variants</h2>
          <div className='buttons'>
            <Button>Primary (default)</Button>
            <Button variant='accent'>Accent</Button>
            <Button variant='outline'>Outline</Button>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Icon Buttons</h2>
          <div className='buttons'>
            <Button variant='accent icon'><Plus /></Button>
            <Button variant='accent icon link'><ArrowLeft /></Button>
            <Button variant='accent icon link'><ArrowRight /></Button>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Link Buttons</h2>
          <div className='buttons'>
            <Button as='a' href='#' variant='accent link'>
              Link Button
            </Button>
            <Button as='a' href='#' variant='accent link'>
              <i><ArrowLeft /></i>
              Link Left
            </Button>
            <Button as='a' href='#' variant='accent link'>
              Link Right
              <i><ArrowRight /></i>
            </Button>
          </div>
        </Card>

        <Card variant='primary'>
          <h2 className='subtitle'>Light Buttons</h2>
          <div className='buttons'>
            <Button variant='outline'>Outline</Button>
            <Button variant='icon link'><User /></Button>
            <Button variant='icon link'><Basket /></Button>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { ButtonPage }
