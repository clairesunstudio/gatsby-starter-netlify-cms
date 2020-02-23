import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class LightBox extends React.Component {
  constructor(props){
		super(props);
    console.log(props)
    this.state = {
      modalIsOpen: false
    }
	}
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  }
  render() {
    const { modalIsOpen } = this.state;
    console.log(this.props.images)
    return (
      <div>
        <div onClick={this.toggleModal}>click here!</div>
        <ModalGateway>
          {modalIsOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={this.props.images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    );
  }
}

export default LightBox;
