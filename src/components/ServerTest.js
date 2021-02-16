import React, { Component } from 'react';
import axios from 'axios';

export default class ServerTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      list: [],
      update: false
    }
  }
  componentDidMount() { 
    this._getData();
  }

  _addData = async (e) => { 
    const { name } = this.state; 
    e.preventDefault();

    const res = await axios('/add/data', {
      method: 'POST',
      data: { 'data': name },
      headers: new Headers()
    })

    if (res.data) { 
      alert('데이터를 추가했습니다')
      return window.location.reload();
    }
  }

  _nameUpdate(e) { 
    this.setState({ name: e.target.value })
  }
  _getData = async () => {
    const res = await axios.get('/get/data');

    if(res.data[0] === undefined) {
      let cover = [];
      cover.push(res.data);

      return this.setState({ list : cover })
    }
    this.setState({ list : res.data });
  }
  
  render() {
    const { list } = this.state;

    return(
      <div className='ServerTest'>
        <h3> Welcome to <u>Hannah</u> Blog! </h3>
        <br />
        <form method='post' onSubmit={this._addData}>
          <input type='text' maxLength='10' onChange={(e) => this._nameUpdate(e)} />
          <input type='submit' value='add tags' />
        </form>
        <br />
        <br />

        <div style={{ height: '250px', overflow: 'auto' }}>
          <h4 style={{ color: '#ababa'}}>Tag List</h4>
          <div style={{ border : 'solid 1px black', width : '50%', marginLeft : '25%', textAlign : 'left' }}>
            <div style={{ display : 'grid', gridTemplateColumns : '32% 35% 30%', textAlign : 'center' }}>
              <div> Number </div>
              <div> Name </div>
              <div> Other </div>
            </div>
          </div>
          {list.length !== 0 ? list.map((el, key) => { 
            return (
              <div key={key} style={{ display: 'grid', lineHeight: '40px', gridTemplateColumns: '32% 35%', width: '50%', marginLeft: '25%' }}>
                <div>{el.id}</div>
                <div>{el.tagName}</div>
              </div>
            )
          })
            : null}
        </div>
      </div>
    )
  }
}
