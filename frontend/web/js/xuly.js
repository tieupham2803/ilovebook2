var list;
var Note = React.createClass({
	render: function(){
		return <div className = "div-note">
		{ this.props.children}
		 </div>
	}
});

function addDiv(){
	ReactDOM.render(<div><InputDiv/></div>,document.getElementById("div-add"));
} 

var List = React.createClass({
 getInitialState(){
 		list = this;
		return { mang: ["hii","ahihi","Khoa Pham"]};

	},
	render: function(){
		return(
		<div className="div-list">
	<div id = "div-add"></div>	 
		<button type="button" class="btn btn-primary" onClick = {addDiv}>Them</button>
		{
			this.state.mang.map(function(note, index){
				return <Note key={index}> {note} </Note>
			})	
		}
	</div>
			);

	}
});

var InputDiv = React.createClass({
	
	send(){
		list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
		ReactDOM.unmountComponentAtNode(document.getElementById('div-add'))
	},
	render(){
	return  <div>
		<input type ="text"  ref="txt" placeholder = "nhap noi dung note"/>
		<button type="button" class="btn btn-primary" onClick = {this.send}>gui</button>
	</div>
	}
});
ReactDOM.render( 
	<div>
	<List>
	</List>
	
	</div> 
	, document.getElementById('root')
	);