import React, { Component } from 'react';

class Counter extends Component {
 state = {
   value: this.props.value,
   tags: ['tag1', 'tag2', 'tag3']
 };

//  constructor() {
//    super();
//    this.handleIncrement = this.handleIncrement.bind(this);
//  }

 styles = {
  fontSize: 12,
  fontWeight: 'bold' 
 };

 renderTags() {
   if (this.state.tags.length === 0) return 'There are no tags.';

   return <ul>
   { this.state.tags.map(tag => <li key={tag}>{tag}</li>) }
   </ul>
 }

 handleIncrement = () =>  {
   this.setState({ value: this.state.count + 1 });
 };

  render() {
    console.log('props', this.props);
    
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button 
          onClick={ () => this.handleIncrement() } 
          className="btn btn-secondary ctn-sm"
        > 
          Increment 
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes ="badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
    }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;