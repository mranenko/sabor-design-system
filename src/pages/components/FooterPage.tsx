import { Card } from '../../components'
import { Page } from '../../layouts'

const FooterPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Footer</h1>
        <p>
          With its vibrant hues and user-friendly interface, our footer component ensures a
          delightful experience from start to finish, guiding users on a culinary adventure.
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

export { FooterPage }
