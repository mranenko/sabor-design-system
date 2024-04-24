import { Card } from '../../components'
import { Page } from '../../layouts'

const InputPage = () => {
  return (
    <Page>
      <section className='flex-column gap-1'>
        <h1 className='title'>Input</h1>
        <p>
          Our designs elevate user interactions, inviting customers to engage effortlessly with our
          digital products. With intuitive layouts and responsive designs, our input components ensure
          a seamless experience, echoing the spirit of innovation and convenience that defines our
          digital presence.
        </p>

        <Card>
          <h2 className='subtitle'>Text and Textarea</h2>
          <p className='input-group'>
            <label htmlFor='name'>Your name</label>
            <input className='text' id='name' type='text' />
          </p>
          <p className='input-group'>
            <label htmlFor='comments'>Comments</label>
            <textarea className='text' id='comments' />
          </p>
        </Card>
      </section>
    </Page>
  )
}

export { InputPage }
