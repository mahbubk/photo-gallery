import React, { Component } from "react";
import { connect } from 'react-redux';
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Alert } from "reactstrap";
import PhotoItem from "./PhotoItem";
import PhotoDetail from "./PhotoDetail";
import Loading from "./Loading";
import { addComment, fetchPhotos, fetchComments } from "../../redux/actionCreators";

const mapStateToProps = state => {
    return {
        photos: state.photos,
        comments: state.comments,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (photoId, author, comment) => dispatch(addComment(photoId, author, comment)),
        fetchPhotos: () => dispatch(fetchPhotos()),
        fetchComments: () => dispatch(fetchComments())
    }
}


class Photo extends Component {
    state = {
        selectedPhoto: null,
        modalOpen: false
    }

    onPhotoSelect = photo => {
        this.setState({
            selectedPhoto: photo,
            modalOpen: !this.state.modalOpen
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fetchPhotos();
        this.props.fetchComments();
    }


    render() {
        document.title = 'Photo Gallery';

        if (this.props.photos.isLoading) {
            return (
                <Loading />
            );
        }
        else if (this.props.photos.errMess) {
            return (
                <Alert color="danger">{this.props.photos.errMess}</Alert>
            )
        }
        else {

            const photo = this.props.photos.photos.map(item => {
                return (
                    <PhotoItem
                        photo={item}
                        key={item.id}
                        photoSelect={() => this.onPhotoSelect(item)}
                    />
                )
            });

            let photoDetail = null;
            if (this.state.selectedPhoto != null) {
                const comments = this.props.comments.comments.filter(comment => comment.photoId === this.state.selectedPhoto.id)
                photoDetail = <PhotoDetail
                    photo={this.state.selectedPhoto}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentIsLoading={this.props.comments.isLoading} />
            }

            return (
                <div className="container">
                    <div className="row">
                        <CardColumns>
                            {photo}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen}>
                            <ModalBody>
                                {photoDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>

                        </Modal>
                    </div>
                </div>
            )

        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Photo);