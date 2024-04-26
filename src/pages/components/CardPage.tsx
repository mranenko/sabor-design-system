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
              <h4>Light Card (Default)</h4>
              <p>
                Our digital nomad development lifecycle enables company-wide,
                immersive enterprises. Key players will take ownership of their
                user experiences by dynamically reusing world-class market foci.
                In the product space, industry is globally strategizing its
                proactive knowledge transfers. Our capability development
                lifecycle enables holistic, value-added paradigm shifts.
              </p>
            </Card>

            <Card variant='dark'>
              <h4>Dark Card</h4>
              <p>
                Iteratively touching base about incentivizing stacks will make us leaders in the
                best-in-class stakeholder industry. We use our cloud native bandwidths to
                effectively manage our low hanging fruit expectations. Our business revolutionizes
                growth hackers to intelligently and virtually productize our mobile team player.
                You need to globally synergise your deliverables to increase your diversity
                velocity.
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

        <section className='section vegetables-on-table my-1'>
          <Card variant='ghost'>
            <h4>Ghost Card</h4>
            <p>
              Powder sweet donut gummi bears gingerbread biscuit cotton candy cupcake ice cream.
              Fruitcake cookie powder brownie sweet candy gummies bear claw cotton candy. Lollipop
              brownie cookie tiramisu macaroon cheesecake gingerbread icing powder. Powder sesame
              snaps topping tart candy cookie marshmallow chocolate cake. Donut soufflé brownie
              muffin sweet sweet roll macaroon powder lollipop. Croissant caramels sesame snaps
              carrot cake cotton candy tart. Danish gingerbread sesame snaps bonbon bear claw sweet
              tart sesame snaps wafer. Donut icing oat cake bonbon sweet cotton candy.
            </p>
          </Card>
        </section>
      </section>
    </Page>
  )
}

export { CardPage }
