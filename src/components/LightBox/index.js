import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import './index.scss';

class LightBox extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      currentModal: null
    }
	}
  toggleModal(index) {
    this.setState({ currentModal: index });
  }
  render() {
    const { currentModal } = this.state;
    const { children, images, col } = this.props;
    const getGridStyle = (col) => ({
      gridTemplateColumns: `repeat(${col || 2}, auto)`,
    })
    const validChildren = children.filter((child) => React.isValidElement(child))
    console.log(validChildren)
    const childrenWithProps = React.Children.map(validChildren, (child, i) => {
      const clone = React.cloneElement(child, {
        onClick: () => this.toggleModal(i)
      })
      return clone;
    })
    return (
      <div>
        <div className='grid' style={getGridStyle(3)}>
          {childrenWithProps}
        </div>
        <ModalGateway>
          {Number.isInteger(currentModal) ? (
            <Modal
              closeOnBackdropClick={true}
              onClose={() => this.toggleModal()}
            >
              <Carousel
                currentIndex={currentModal}
                components={{ Footer: null }}
                views={images}
              />
            </Modal>
          ) : null}

        </ModalGateway>
      </div>
    );
  }
}

export default LightBox;
