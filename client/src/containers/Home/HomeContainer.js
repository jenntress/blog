// blog/client/containers/Home/HomeContainer.js (smart components)

import React, {Component} from 'react'
import $ from 'jquery';
import {Home} from '../../components'

class HomeContainer extends Component {
  state = {
    articles: undefined
  }

componentDidMount = () => this.loadArticles()// react lifecycle component

  loadArticles(){
    $.ajax({
      url: '/api/articles',
      method: 'GET'
    }).done((response) => {
    console.log(response); //log the third object in my database
      this.setState({articles: response.data});
   });
  }


render() {
    return  (
      <div>
       {this.state.articles ?  <Home articles={this.state.articles}  /> : undefined}
      </div>
    )
  }
}

export default HomeContainer;
