// create class header
class Header extends React.Component {
	constructor () 
		{ super();
		// membuat objek state
		this.state = {
			angkal: "0",
			angka2: "0",
			result: "0"
		};
	}
	// Set values
	setValuel = (vall) => { this.setState({ angkal: ""+vall }); } 
	setValue2 = (val2) => { this.setState({ angka2: ""+val2 }); }
	
	// Arithmetic operations such as addition, subtraction, division, multiplication 
	funcMultiply = (val) => {
		var hasil = parseInt(this.state.angkal)* parseInt(this.state.angka2); 
		this.setState({ result: ""+hasil });
	}
	
	funcDivide = (val) => {
		var hasil = parseInt(this.state.angkal) / parseInt(this.state.angka2);
		this.setState({ result: ""+hasil });
	}
	
	funcSubtract = (val) => {
		var hasil = parseInt(this.state.angkal) - parseInt(this.state.angka2); 
		this.setState({ result: ""+hasil });
	}
	
	funcAdd = (val) => {
		var hasil = parseInt(this.state.angkal) + parseInt(this.state.angka2); 
		this.setState({ result: ""+hasil });
	}
	
	render() {
		return (
		<div>
			<h1>Simple Calculator ReactJs</h1>
			Input 1: <input value ={this.state.angkal} onChange ={(e) => {this.setValuel (e.target.value)}} /> 
			<br/>
			Input 2: <input value ={this.state.angka2} onChange ={(e) => {this.setValue2 (e.target.value)}} /> 
			<h1>Result: {this.state.result}</h1>
			<button onClick={this.funcMultiply}>Multiply</button> 
			<button onClick={this.funcDivide}>Division</button> 
			<button onClick={this.funcSubtract}>Subtract</button> 
			<button onClick={this.funcAdd}>Addition</button>
		</div>
		);
	}
}

// render komponen ke RealDOM
ReactDOM.render(<Header />, document.getElementById("app"));