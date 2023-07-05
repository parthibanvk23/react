import axios from 'axios';

const getList=async ()=>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`);
}

const getContent = async (id)=>{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}

export {getList,getContent};