import React, {Component} from 'react'
// import $ from 'jquery'
import axios from 'axios'

class LifeCycleApp extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        // $.get('https://jsonplaceholder.typicode.com/users')
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((data)=>{
            console.log(data)
            this.setState({
                users: data.data
            })
        })
    }
    render(){
        return(
            <div>
                {
            this.state.users.map((item, i)=>{
                return(<div key={i}> <strong>Name:</strong>{item.name}, <br/>
                <hr/>
            </div>)
            })
            }
         </div>
        )
    }
}
export default LifeCycleApp