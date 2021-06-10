import React from 'react';
import {ListGroup} from 'reactstrap';

import './post-list.css'

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

    const element = posts.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem
                    label={item.label}
                    like={item.like}
                    important={item.important}
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleLike={() => onToggleLike(item.id)}
                />
            </li>
        )
    });

    return (
        <ListGroup className='app-list'>
            {element}
        </ListGroup>
    )
}

export default PostList;