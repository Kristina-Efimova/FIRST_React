import React, {Component} from 'react';

import './post-list-item.css'


export default class PostListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }


    render() {

        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNamesSpan = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNamesSpan += ' important';
        }

        if (like) {
            classNamesSpan += ' like';
        }

        return (
            <div className={classNamesSpan}>
            <span className='app-list-item-label'
                  onClick={this.onLike}>
                {label}
            </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type='button'
                            className='btn-star btn-sm'
                            onClick={this.onImportant}>
                        <i className='fa fa-star'/>
                    </button>
                    <button type='button'
                            className='btn-trash btn-sm'
                            onClick={onDelete}>
                        <i className='fa fa-trash'/>
                    </button>
                    <i className='fa fa-heart'/>
                </div>
            </div>
        )
    }
}