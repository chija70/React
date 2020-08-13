	import React,{Component} from 'react';
	import ReactDOM from 'react-dom';
import Hero from './hero'
import Services from './services'
// import {RoomContext} from '../roomContext'
import Resort from '../resort'
import {RoomContext} from '../roomContext'
import Room from './romm'




export default class Home extends Component{
	// static contextType = RoomContext;
	static contextType = RoomContext;



	render(){
	const {filteredRoom: fr}= this.context
	let rooms = fr.map(room=>{
		return(
			<Room key={room.id} room={room}  />
			);
	})

	// console.log('contexttt',this.context);
	




	return(
		<div  style={{textAlign:"center"}}>
		<h1> heatured rom.s</h1>
		{rooms}
		
			</div>
		)
}
}