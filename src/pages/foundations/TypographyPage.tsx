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
            <div className='tile font display'>
              <span className='sample heebo'>AaBbCc</span>
              <span className='caption'>Heebo</span>
            </div>
            <div className='tile font display'>
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
                <div className='tile font'>
                  <h1>Title 1</h1>
                </div>
              </td>
              <td className='strong'>title-1</td>
              <td className='color-subtle'>
                font-family-playfair-display<br />
                font-weight-semibold<br />
                font-size-xxx-large<br />
                leading-x-tight<br />
                tracking-normal
              </td>
              <td className='color-subtle'>
                'Playfair Display', serif<br />
                600 / semibold<br />
                2rem / 32px<br />
                1.125 / 112.5%<br />
                0 / normal
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font'>
                  <h2>Title 2</h2>
                </div>
              </td>
              <td className='strong'>title-2</td>
              <td className='color-subtle'>
                font-family-playfair-display<br />
                font-weight-semibold<br />
                font-size-xx-large<br />
                leading-tight<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Playfair Display', serif<br />
                600 / semibold<br />
                1.625rem / 26px<br />
                1.25 / 125%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font title-3'>
                  <h3>Title 3</h3>
                </div>
              </td>
              <td className='strong'>title-3</td>
              <td className='color-subtle'>
                font-family-playfair-display<br />
                font-weight-bold<br />
                font-size-x-large<br />
                leading-tight<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Playfair Display', serif<br />
                700 / bold<br />
                1.25rem / 20px<br />
                1.25 / 125%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font title-4'>
                  <h4>Title 4</h4>
                </div>
              </td>
              <td className='strong'>title-4</td>
              <td className='color-subtle'>
                font-family-playfair-display<br />
                font-weight-bold<br />
                font-size-large<br />
                leading-tight<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Playfair Display', serif<br />
                700 / bold<br />
                1rem / 16px<br />
                1.25 / 125%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font text-large'>Large text</div>
              </td>
              <td className='strong'>text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semibold<br />
                font-size-large<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                400 / normal<br />
                1rem / 16px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font text-large strong'>Strong large text</div>
              </td>
              <td className='strong'>strong-text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semibold<br />
                font-size-large<br />
                leading-normal<br />
                tracking-wide
              </td>
              <td className='color-subtle'>
                'Heebo', sans-serif<br />
                600 / semibold<br />
                1rem / 16px<br />
                1.5 / 150%<br />
                .5px
              </td>
            </tr>

            <tr>
              <td>
                <div className='tile font text'>Text</div>
              </td>
              <td className='strong'>text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semibold<br />
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
                <div className='tile font text strong'>Strong text</div>
              </td>
              <td className='strong'>strong-text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semibold<br />
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
                <div className='tile font text-small'>Small text</div>
              </td>
              <td className='strong'>small-text</td>
              <td className='color-subtle'>
                font-family-heebo<br />
                font-weight-semibold<br />
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
                <div className='tile font text-small strong'>Small strong text</div>
              </td>
              <td className='strong'>small-strong-text</td>
              <td className='color-subtle'>
                font-family-heebo<br/>
                font-weight-semibold<br />
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
