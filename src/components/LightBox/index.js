import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

const images = [{ source: '/static/2ffa153e58fcb5855de0027483f40843/8539d/billionaire.jpg' }, { source: '/static/1c1250396255d8519a0efad1a886be96/8539d/chapter55.jpg' }];

class Component extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      modalIsOpen: false
    }
	}
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    const { modalIsOpen } = this.state;

    return (
      <div>
        <div onClick={this.toggleModal}>click here!</div>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default Component;