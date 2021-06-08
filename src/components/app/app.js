import React, {Component} from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import './app.css';
// import PostListItem from "../post-list-item/post-list-item";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label: 'Going to lealrn React',
                    important: true,
                    id: 'asd'
                },
                {
                    label: 'That is good',
                    important: false,
                    id: 'sdf'

                },
                {
                    label: 'I need a break... ',
                    important: false,
                    id: 'rqw'

                }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            // data.splice(index, 1);
            // return{
            //     data: data
            // }

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }


        })
    }

    render() {
        return (
            <div className='app'>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
                <PostAddForm/>
            </div>
        )
    }


}
