import React, { Component } from 'react';
import Media from '../components/media.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './../../actions'

class MediaContainer extends Component {
  handleOpenModal = (id) => {
    // this.props.dispatch(openModal(id));
    this.props.actions.openModal(id);
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer);