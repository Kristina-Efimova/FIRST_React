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
                    important: false,
                    like: false,
                    id: 1
                },
                {
                    label: 'That is good',
                    important: false,
                    like: false,
                    id: 2

                },
                {
                    label: 'I need a break... ',
                    important: false,
                    like: false,
                    id: 3

                }
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);

        this.maxId = 4;
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportantAndlike(id, argument) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, [argument]: !old[argument]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }


    onToggleImportant(id) {
        this.onToggleImportantAndlike(id, 'important')
    }

    onToggleLike(id) {
        this.onToggleImportantAndlike(id, 'like')
    }


    render() {

        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPost = data.length;

        return (
            <div className='app'>
                <AppHeader
                    liked={liked}
                    allPost={allPost}/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        )
    }


}
