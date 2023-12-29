import React, {useRef, useState} from "react";
import Counter from "./Components/Counter";
import ClassCounter from "./Components/ClassCounter";
import './styles/App.css'
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'javascript', body: 'Description'},
        {id: 2, title: 'javascript2', body: 'Description'},
        {id: 3, title: 'javascript3', body: 'Description'},
    ])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
