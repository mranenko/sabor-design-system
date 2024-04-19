import {
  ArrowLeft,
  ArrowRight,
  Basket,
  CaretLeft,
  CaretRight,
  Dot,
  DotOutline,
  List,
  Minus,
  Plus,
  Timer,
  User,
  X,
} from '@phosphor-icons/react'

import { Card } from '../../components'
import { Page } from '../../layouts'

const IconographyPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Iconography</h1>
        <p>
          Simplicity meets sophistication in this collection of clean,
          modern icons from Phosphor Icons. Embodying the essence of
          minimalism, our icons communicate with clarity and precision,
          guiding users intuitively through digital experiences.
        </p>
        
        <Card>
          <h2 className='subtitle'>Icons</h2>
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
              <i className='icon'><Dot /></i>
              <span className='caption'>Dot</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><DotOutline /></i>
              <span className='caption'>DotOutline</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><List /></i>
              <span className='caption'>List</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><Minus /></i>
              <span className='caption'>Minus</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><Plus /></i>
              <span className='caption'>Plus</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><Timer /></i>
              <span className='caption'>Timer</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><User /></i>
              <span className='caption'>User</span>
            </div>
            <div className='tile icon'>
              <i className='icon'><X /></i>
              <span className='caption'>X</span>
            </div>
          </div>
        </Card>
      </section>
    </Page>
  )
}

export { IconographyPage }
