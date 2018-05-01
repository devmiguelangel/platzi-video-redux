import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

import { connect } from 'react-redux';
import { List } from 'immutable';
// import { openModal, closeModal } from './../../actions';
import { bindActionCreators } from 'redux'
import * as actions from './../../actions';

class Home extends Component {
  /* state = {
    modalVisible: false,
  }
  handleOpenModal = (media) => {
    this.setState({
      modalVisible: true,
      media
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  } */

  handleOpenModal = (id) => {
    // this.props.dispatch(openModal(id));
    this.props.actions.openModal(id);
  }

  handleCloseModal = () => {
    // this.props.dispatch(closeModal());
    this.props.actions.closeModal();
  }

  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            search={this.props.search}
            handleOpenModal={this.handleOpenModal}
          />
          {
            this.props.modal.get('visibility') &&
            <ModalContainer>
              <Modal
                handleClick={this.handleCloseModal}
              >
                <VideoPlayer
                  autoplay
                  id={this.props.modal.get('mediaId')}
                  // src={this.state.media.get('src')}
                  // title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

const mapStateToProps = (state, props) => {
  const categories = state.get('data').get('categories').map(categoryId => {
    return state.get('data').get('entities').get('categories').get(categoryId);
  });

  const search = state.get('data').get('search');
  let searchResult = List();

  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    
    searchResult = mediaList.filter(item => {
      return item.get('author').toLowerCase().includes(search.toLowerCase());
    }).toList();
  }

  return {
    categories: categories,
    search: searchResult,
    modal: state.get('modal'),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
};

const ContainerHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ContainerHome;
