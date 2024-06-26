import {
  ArrowLeft,
  ArrowRight,
  Basket,
  CaretLeft,
  CaretRight,
  List,
  User,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Card } from '../components'
import { Page } from '../layouts'

const OverviewPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Sabor Design System</h1>
        <p>
          Inspired by the vibrant colors, flavors, and culture of Mexico, Sabor
          Design System combines authenticity with intuitive functionality. From
          visually captivating interfaces to seamless navigation, every aspect
          is meticulously designed to enhance user engagement and satisfaction.
         </p>

        <h2 className='subtitle'>Foundations</h2>
        <Link to='/foundations/color'>
          <Card>
            <h2 className='subtitle'>Color</h2>
            <p>
              Sabor color palette contains carefully curated colors that ensure
              a visually cohesive and engaging user experience across every
              screen and interaction. From lively hues that stimulate the
              appetite to comforting tones that convey warmth and hospitality,
              each color choice is a nod to the rich heritage of culinary
              artistry.
            </p>
            <div className='swatches'>
              <div className='swatch cilantro wide'></div>
              <div className='swatch lime wide'></div>
              <div className='swatch cocoa wide'></div>
            </div>
          </Card>
        </Link>

        <Link to='/foundations/typography'>
          <Card>
            <h2 className='subtitle'>Typography</h2>
            <p>
              Sabor's typography is a fusion of contemporary flair and classical
              charm. Embrace the sleek minimalism of the sans-serif Heebo family,
              complemented by the serif Playfair Display family that invokes a sense
              of warmth and trustworthiness. Together, they form a harmonious blend
              that stands the test of time while resonating with modern audiences.
            </p>
            <div className='tiles fonts'>
              <div className='tile font display'>
                <span className='sample playfair-display'>AaBbCc</span>
                <span className='caption'>Playfair Display</span>
              </div>
              <div className='tile font display'>
                <span className='sample heebo'>AaBbCc</span>
                <span className='caption'>Heebo</span>
              </div>
            </div>
          </Card>
        </Link>

        <Link to='/foundations/iconography'>
          <Card>
            <h2 className='subtitle'>Iconography</h2>
            <p>
              Simplicity meets sophistication in this collection of clean,
              modern icons from Phosphor Icons. Embodying the essence of
              minimalism, our icons communicate with clarity and precision,
              guiding users intuitively through digital experiences.
            </p>
            <div className='tiles icons'>
              <div className='tile icon'>
                <i className='icon'><ArrowLeft /></i>
                <span className='caption'>ArrowLeft</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><ArrowRight /></i>
                <span className='caption'>ArrowRight</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><Basket /></i>
                <span className='caption'>Basket</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><CaretLeft /></i>
                <span className='caption'>CaretLeft</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><CaretRight /></i>
                <span className='caption'>CaretRight</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><List /></i>
                <span className='caption'>List</span>
              </div>
              <div className='tile icon'>
                <i className='icon'><User /></i>
                <span className='caption'>User</span>
              </div>
            </div>
          </Card>
        </Link>

        <Link to='/foundations/logos'>
          <Card>
            <h2 className='subtitle'>Logos</h2>
            <p>
              Our logos are the fiesta before the feast, embodying the lively
              spirit and authentic flavors of Mexican cuisine. ¡Buen provecho!
            </p>
            <div className='tiles logos'>
              <div className='tile logo dark'>
                <img
                  alt='Sabor Design System'
                  className='logo'
                  src='/assets/images/logos/sabor-logo-light.svg'
                />
              </div>

              <div className='tile logo'>
                <img
                  alt='Sabor Design System'
                  className='logo'
                  src='/assets/images/logos/sabor-logo-dark.svg'
                />
              </div>
            </div>
          </Card>
        </Link>
      </section>
    </Page>
  )
}

export { OverviewPage }
