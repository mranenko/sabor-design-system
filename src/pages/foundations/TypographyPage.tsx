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
            <div className='tile font large'>
              <span className='sample heebo'>AaBbCc</span>
              <span className='caption'>Heebo</span>
            </div>
            <div className='tile font large'>
              <span className='sample playfair-display'>AaBbCc</span>
              <span className='caption'>Playfair Display</span>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className='subtitle'>Text</h2>
          <table className='table fonts'>
            <tr>
              <td>
                <div className='tile font small'>Text</div>
              </td>
              <td className='strong'>text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semi-bold<br />
                font-size-regular<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                400 / normal<br />
                .875rem / 14px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font small strong'>Strong text</div>
              </td>
              <td className='strong'>strong-text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semi-bold<br />
                font-size-regular<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                600 / semibold<br />
                .875rem / 14px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font small'>Small text</div>
              </td>
              <td className='strong'>small-text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semi-bold<br />
                font-size-small<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                400 / normal<br />
                .75rem / 12px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>
            
            <tr>
              <td>
                <div className='tile font small strong'>Small strong text</div>
              </td>
              <td className='strong'>small-strong-text</td>
              <td className='color-subtle'>
                font-family-heebo<br/>
                font-weight-semi-bold<br />
                font-size-small<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                600 / semibold<br />
                .75rem / 12px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>
          </table>
        </Card>
      </section>
    </Page>
  )
}

export { TypographyPage }
