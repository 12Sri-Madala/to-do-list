import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css'
import React, { Component } from 'react';
import axios from 'axios';
import List from './list';
import AddItem from './add_item';
// import listData from '../dummy_data/list'; (GETTING DATA FROM SERVER)
import { randomString } from '../helpers';

console.log('Random String: ', randomString(20))

const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c718_demouser';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }
    }

    deleteItem = (index) => {
        const listCopy = this.state.list.slice();

        listCopy.splice(index, 1);

        this.setState({
            list: listCopy
        })
    }

    addItem = (item) => {
        item._id = randomString(8);

        this.setState({
            list: [item, ...this.state.list]
        })
    }

    componentDidMount(){
        this.getListData();
    }

    async getListData(){
        // Call server to get data
        // http://api.reactprototypes.com/todos?key=c718_demouser

        const resp = await axios.get(BASE_URL + API_KEY);

        console.log('Resp: ', resp)

        // axios.get(BASE_URL + API_KEY).then((resp) => {
        //     // console.log('Server Response: ', resp);

        //     this.setState({
        //         list: resp.data.todos
        //     })
        // }).catch((err) => {
        //     console.log('Request Error: ', err.message)
        //     this.setState({
        //         error: 'Error Getting Todos'
        //     })
        // }) 

        // console.log('After axios.get call') (COMES BEFORE AXIOS CALL BECAUSE CALL HAS TO FINISH BEFORE C.LOG RUNS)
       
    }

    render(){
        const { error } = this.state;

        return (
            <div className ="container">
                <h1 className="center">To Do List</h1>

                <AddItem add={this.addItem}/>

                {
                    error 
                    ? <h1 className="center red-text"> {error}</h1>
                    : <List delete={this.deleteItem} data={this.state.list}/>
                }
                
            </div>
        );
    }
}

export default App;
