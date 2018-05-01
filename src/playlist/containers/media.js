import React, { Component } from 'react';
import Media from '../components/media.js';
import { connect } from 'react-redux';

class MediaContainer extends Component {
  handleOpenModal = (id) => {
    this.props.dispatch({
      type: 'OPEN_MODAL',
      payload: {
        mediaId: id,
      }
    });
  }

  render() {
    return (
      <Media openModal={this.handleOpenModal} {...this.props.data.toJS()} />
    );
  }
}

const mapStateToProps = (state, props) => ({
  data: state.get('data').get('entities').get('media').get(props.id)
});

export default connect(mapStateToProps)(MediaContainer);