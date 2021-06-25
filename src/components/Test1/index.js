import React from 'react';

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'daniel'
    };
  }

  componentDidMount() {
    this.setState({name: 'pepe' })
  }

  render() {
    const { name, contar } = this.state
    return (
      <div className="App">
         <h1>hola mundo {name}</h1>
         <h3>copntador {contar}</h3>
        <button onClick={() => this.setState({contar: contar ? contar+1 : 1})} > +1</button> 
      </div>
    );
  }
}

export default Test;
