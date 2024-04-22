import { Card } from '../../components'
import { Page } from '../../layouts'

const CardPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Card</h1>
        <p>
          Each card is a window into a world of flavor, adorned with vibrant
          imagery, evocative typography, and playful accents inspired by Mexican
          motifs. From showcasing mouthwatering dishes to highlighting special
          events and promotions, these cards seamlessly blend style with
          functionality.
        </p>

        <div>
          <h2 className='subtitle mb-1'>Variants</h2>
          <div className='cards'>
            <Card>
              <h4>Default Card</h4>
              <p>
                Our digital nomad development lifecycle enables company-wide,
                immersive enterprises. Key players will take ownership of their
                user experiences by dynamically reusing world-class market foci.
                In the product space, industry is globally strategizing its
                proactive knowledge transfers. Our capability development
                lifecycle enables holistic, value-added paradigm shifts.
              </p>
            </Card>

            <Card variant='primary'>
              <h4>Primary Card</h4>
              <p>
                Our business offshores platforms to iteratively and ethically
                connect our innovative dot-bomb. Our business monetizes
                step-changes to effectively and intelligently engineer our
                end-to-end best practice. In the future, will you be able to
                proactively leverage bandwidths in your business? Mobile stacks
                strategically enable competitive visibilities for our cryptoes.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Page>
  )
}

export { CardPage }
