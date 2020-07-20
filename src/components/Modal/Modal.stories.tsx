import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import Btn from '../Btn'
import Modal from './index'

export default {
  title: 'Modal',
  component: Modal,
  decorators: [withKnobs],
}

export const BodyText = () => (
  <Modal isOpen={true} onClose={action('Triggered onClose event')}>
    <p>
      {text(
        'Body Text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue enim ac nibh dictum, eu hendrerit enim malesuada. Vivamus et magna dignissim ipsum viverra pretium quis interdum dui. Proin eget rhoncus arcu, ut feugiat est. Integer eget nulla sed orci gravida aliquet. Sed a luctus metus, ac porta ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vestibulum quam. Vivamus porta vulputate ultrices. Ut et congue purus. Sed id tortor et sem cursus aliquet sed eget nibh. Sed scelerisque quam eleifend dolor pellentesque, eget ultricies justo aliquam. Praesent eu tortor sed diam dignissim accumsan. Cras sit amet ex mi.'
      )}
    </p>
  </Modal>
)

export const Heading = () => (
  <Modal isOpen={true} onClose={action('Triggered onClose event')}>
    <h1 className="modal-heading heading4">
      {text('Heading Text', 'Lorem Ipsum')}
    </h1>
  </Modal>
)

export const HeadingAndText = () => (
  <Modal isOpen={true} onClose={action('Triggered onClose event')}>
    <h1 className="modal-heading heading4">
      {text('Heading Text', 'Lorem Ipsum')}
    </h1>
    <p>
      {text(
        'Body Text',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue enim ac nibh dictum, eu hendrerit enim malesuada. Vivamus et magna dignissim ipsum viverra pretium quis interdum dui. Proin eget rhoncus arcu, ut feugiat est. Integer eget nulla sed orci gravida aliquet. Sed a luctus metus, ac porta ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vestibulum quam. Vivamus porta vulputate ultrices. Ut et congue purus. Sed id tortor et sem cursus aliquet sed eget nibh. Sed scelerisque quam eleifend dolor pellentesque, eget ultricies justo aliquam. Praesent eu tortor sed diam dignissim accumsan. Cras sit amet ex mi.'
      )}
    </p>
  </Modal>
)

const CompositeBtnAndModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Btn type="button" onClick={() => setIsOpen(true)}>
        {text('Button Text', 'Open Modal')}
      </Btn>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1 className="modal-heading heading4">
          {text('Modal Heading Text', 'Lorem Ipsum')}
        </h1>
        <p>
          {text(
            'Modal Body Text',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue enim ac nibh dictum, eu hendrerit enim malesuada. Vivamus et magna dignissim ipsum viverra pretium quis interdum dui. Proin eget rhoncus arcu, ut feugiat est. Integer eget nulla sed orci gravida aliquet. Sed a luctus metus, ac porta ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non vestibulum quam. Vivamus porta vulputate ultrices. Ut et congue purus. Sed id tortor et sem cursus aliquet sed eget nibh. Sed scelerisque quam eleifend dolor pellentesque, eget ultricies justo aliquam. Praesent eu tortor sed diam dignissim accumsan. Cras sit amet ex mi.'
          )}
        </p>
      </Modal>
    </>
  )
}

export const BtnAndModal = () => <CompositeBtnAndModal />
