import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import logo from './assets/logosw.png'


const PATH_BASE = 'https://swapi.co/api/people/'
const PARAM_PAGE = 'page='


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      result: [],
      page: 1,
    }

    this.starWarsCoversList = this.starWarsCoversList.bind(this)
  }

  starWarsCoversList(previus){
    return axios.get(`${PATH_BASE}?${PARAM_PAGE}${this.state.page}`).then(res => {
      this.setState({
        result: res.data.results
      })
    })
  }

  componentDidMount(){
    this.starWarsCoversList()
  }



render() {
    const results = this.state.result
    return (
      <div className="App">
        <div className="logo">
          <img  src={logo} alt="logo"/>
        </div>
          <div className="iteractions">
            <Table list={results} />
          </div>
          <div className="iteractions">
            <Buttom onClick={() => this.starWarsCoversList(this.setState({
                page: this.state.page - 1
              }))}>
               -
            </Buttom>
            <Buttom onClick={() => this.starWarsCoversList(this.setState({
            page: this.state.page + 1
            }))}>
              +
            </Buttom>
          </div>
      </div>
    );
  }
}


const Table = ({ list }) =>
  <div className="table">
    {list.map(item =>
      <div key={item.id} className="table-row">
        <span style={{width:'20%'}}>{item.name}</span>
        <span style={{width:'20%'}}>{item.height}</span>
        <span style={{width:'20%'}}>{item.mass}</span>
        <span style={{width:'10%'}}>{item.hair_color}</span>
        <span style={{width:'10%'}}>{item.skin_color}</span>
        <span style={{width:'10%'}}>{item.eye_color}</span>
        <span style={{width:'10%'}}>{item.birth_year}</span>
      </div>
    )}
  </div>

const Buttom = ({children, onClick}) =>
  <button onClick={onClick}>
    {children}
  </button>
  


export default App;
