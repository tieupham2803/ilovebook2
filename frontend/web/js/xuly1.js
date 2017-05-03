function getName(name){
	alert(name);
}


var KhoaPham = React.createClass({

	laythongtin: function(){
		alert(this.props.ten);
	},
	render: function(){
		return(<div><h1 className="mauvang">{this.props.children}</h1>
					<KhoaHoc/>  
					<button onClick={()=>getName(this.props.ten)} type="button" className="btn btn-primary">Lay thong tin</button> 
				</div>
			);
	}
});
var KhoaHoc = React.createClass({
	render: function(){
		return(<h3>component con</h3>);
	}
});


var InputTag = React.createClass(
	{
		show(){
				var tesxt = this.refs.sl.value;
				alert(text);	
			},
		render(){

			return(
			<div>
				<select ref= "sl"><option value="a">AAA</option><option value="c">CCC</option><option value="b">BBB</option></select>
				
				<input type="text" ref = "txt"/>
				<button onClick={this.show} type="button" class="btn btn-primary" >Hien thi</button>
			</div>
			);
		}
	}
);
ReactDOM.render(<div> <InputTag/>
					 <KhoaPham ten = "Note props">Dmmm</KhoaPham>
					<KhoaPham ten = "Higt props"/>

</div>, document.getElementById("root"));
var Form = React.createClass({
    render: function(){
        return (
            <div>
                <input type="submit" onClick={this.props.onUserClick} />
                <h3>You have pressed the button {this.props.counter} times!</h3>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function(){
        return {
            counter: 0
        }
    },
    onUserClick: function(){
        var newCount = this.state.counter += 1;
        this.setState({
            counter: newCount
        });
    },
    render: function(){
        return (
            <div>
                <h1> Welcome to the counter app!</h1>
                <Form counter={this.state.counter} onUserClick={this.onUserClick} />
            </div>
        );
    }
});

ReactDOM.render(<App />,  document.getElementById("ttp"));

var Com =React.createClass(
{	
	add(){
		this.setState({num: this.state.num +1 });
	},
	getInitialState(){

	return {num: 0};
},
	 render(){
	 	return(
			<button onClick={ this.add}type="button" class="btn btn-primary">Hello {this.state.num}</button>
	 	);
	 }
}	
	);


ReactDOM.render(<Com/>, document.getElementById('bai1')
);
var Com1 =React.createClass(
{	
	next(){
		this.setState({hinh: this.state.hinh == 4?4:this.state.hinh+1});

	},
		prev(){
		this.setState({hinh: this.state.hinh == 1?1:this.state.hinh - 1});
	
	},
	
	getInitialState(){

	return {hinh: 2};
},
	 render(){
	 	return(
			<div className="hayho"> 	
				<img src={"images/1/" + this.state.hinh + ".jpg"}/>
				<hr/>
				<button onClick={this.prev} type="button" class="btn btn-primary div1">pre</button>
				<button onClick={this.next} type="button" class="btn btn-primary">next</button>
			</div>
	 	);
	 }
}	
	);


ReactDOM.render(<Com1/>, document.getElementById('bai2')
);

var Image =React.createClass(
{	
	
	changeImg(){
		this.setState({hinh1: (this.state.hinh1 % 4) +1});
	},
	getInitialState(){

	return {hinh1: 1};
	},
	 render(){
	 	return(
			<div className="hayho"> 	
				<img src={"images/1/" + this.state.hinh1 + ".jpg"}/>
				<hr/>
				
			</div> 
	 	);
	 },
	 componentDidMount(){
	 	setInterval(this.changeImg,1000);
	 }
}	
	);


ReactDOM.render(<Image/>, document.getElementById('bai3')
);
var List =React.createClass({
		add(){

			this.state.mang.unshift({srcHinh: "images/1/4.jpg", noiDung: "bach dep trai"});
			this.setState(this.state);
		},
		getInitialState(){

		return{mang: [
				{srcHinh:"images/1/1.jpg", noiDung:"hello1"},
				{srcHinh:"images/1/2.jpg", noiDung:"hello2"},
				{srcHinh:"images/1/3.jpg", noiDung:"hello3"}
			]}; 
	},
	 render(){

	 	return(
			<div> 	
			<button type="button" class="btn btn-primary" onClick={this.add}>Them</button>
			{
				this.state.mang.map(function(note,index){
					return <Note key={index} src={note.srcHinh}>{note.noiDung}</Note>
				})
			}
			</div> 
	 	);
	 }
});



var Note = React.createClass(
{	
	
	
	 render(){
	 	return(
	 		<div>
	 			<img src={this.props.src}/> 
				<p>{this.props.children}</p>
			</div>
	 	);
	 },
	 
}	
	);


ReactDOM.render(<div>

	<List/>
</div>, document.getElementById('bai4')
);
