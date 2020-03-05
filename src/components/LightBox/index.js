import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class LightBox extends React.Component {
  constructor(props){
		super(props);
    this.state = {
      currentModal: null
    }
	}
  toggleModal = (index) => {
    this.setState({ currentModal: index });
  }
  render() {
    const { currentModal } = this.state;
    const { children, images, col} = this.props;
    const getGridStyle = (col) => ({
      display: 'grid',
      margin: '2rem 0',
      gridColumnGap: '50px',
      gridTemplateColumns: `repeat(${col || 2}, auto)`,
    })
    const childrenWithProps = React.Children.map(children, (child, i) => {
      if (React.isValidElement(child)) {
        const clone = React.cloneElement(child, {
          onClick: () => this.toggleModal(i)
        });
        return clone;
        }
      })
    return (
      <div>
        <div className='grid' style={getGridStyle(col)}>
          {childrenWithProps}
        </div>
        <ModalGateway>
          {Number.isInteger(currentModal) ? (
            <Modal
              closeOnBackdropClick={true}
              onClose={this.toggleModal}
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
