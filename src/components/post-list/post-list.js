import React from 'react';
import { ListGroup } from 'reactstrap';

import './post-list.css'

import PostListItem from "../post-list-item/post-list-item";

const PostList = ({posts}) => {

    const element = posts.map((item) => {
        return (
            <li key={item.id} className='list-group-item'>
                <PostListItem
                    label={item.label}
                    important={item.important}
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