import {
  ArrowLeft,
  ArrowRight,
} from '@phosphor-icons/react'

import { Button } from '../../components'
import {
  Footer,
  Page,
} from '../../layouts'

const FooterPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Footer</h1>
        <p>
          With its vibrant hues and user-friendly interface, our footer component ensures a
          delightful experience from start to finish, guiding users on a culinary adventure.
        </p>

        <h2 className='subtitle'>Variants</h2>

        <h3>Default</h3>
        <Footer className='relative'>
          <Button as='a' href='/checkout' variant='accent icon link'>
            <i><ArrowLeft /></i>
          </Button>
          <Button as='a' href='/confirmation' variant='accent solid'>
            Place Order
            <i><ArrowRight /></i>
          </Button>
        </Footer>

        <h3>Button/link on the right</h3>
        <Footer className='relative' variant='end'>
          <Button as='a' href='/review' variant='accent solid'>
            Review Order
            <i><ArrowRight /></i>
          </Button>
        </Footer>

        <h3>Button/link on the left</h3>
        <Footer className='relative' variant='start'>
          <Button as='a' href='/' variant='accent icon link'>
            <i><ArrowLeft /></i>
          </Button>
        </Footer>
      </section>
    </Page>
  )
}

export { FooterPage }
