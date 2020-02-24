import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class LightBox extends React.Component {
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
    const { children, images} = this.props;
    const getGridStyle = (col) => ({
      display: 'grid',
      margin: '2rem 0',
      gridColumnGap: '50px',
      gridTemplateColumns: `repeat(${col || 2}, auto)`,
    })
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        const clone = React.cloneElement(child, {
          onClick:  this.toggleModal
        });
        console.log(clone)
        return clone;
        }
      })
    return (
      <div>

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

export default LightBox;
