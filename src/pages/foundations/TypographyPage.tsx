import { Card } from '../../components'
import { Page } from '../../layouts'

const TypographyPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Typography</h1>
        <p>
          Sabor's typography is a fusion of contemporary flair and classical
          charm. Embrace the sleek minimalism of the sans-serif Heebo family,
          complemented by the serif Playfair Display family that invokes a sense
          of warmth and trustworthiness. Together, they form a harmonious blend
          that stands the test of time while resonating with modern audiences.
        </p>
        
        <Card>
          <h2 className='subtitle'>Font Families</h2>
          <div className='tiles fonts'>
            <div className='tile font wide'>
              <span className='sample playfair-display'>AaBbCc</span>
              <span className='caption'>Playfair Display</span>
            </div>
            <div className='tile font wide'>
              <span className='sample heebo'>AaBbCc</span>
              <span className='caption'>Heebo</span>
            </div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { TypographyPage }
