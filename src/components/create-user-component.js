import React,{Component} from 'react';
import axios from  'axios';
export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            username:""
        }
    }
onChangeUsername(e){
    this.setState({
        username:e.target.value
    })
}

onSubmit(e){
    e.preventDefault();

    const user={
        username:this.state.username
    }
    console.log(user);

    //connexion du backend et du frontend 
    axios.post('http://localhost:5000/users/add',user)
     .then(res=>console.log(res.data));

     this.setState({
         username:''
    })
}

    render(){
        return(
            <div className="container">
                <h3> create New User</h3>
                <form onSubmit={this.onsubmit}>
                    <div className='form-group'>
                        <label>Username:</label>
                        <br/>
                        <input type="text" required value={this.state.username} onChange={this.onChangeUsername}/>
                    </div>
                    <br/>
                    <div className='form-group'>
                        <input type="submit" value="Create User" className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}