import React from 'react';
import './CSS/VideoPage.css';
import axios from 'axios';
import Youtube from 'react-youtube';
import ChatBox from './ChatBox';
const API_KEY = 'http://localhost:3001';


class VideoPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	componentDidMount = async () => {
		let response = await axios.get(`${API_KEY}/videos/id/${this.props.id}`);
		this.setState({...response.data.payload[0]});
	}

	render(){
		return (
			<div className ='video-container'>
				<h1>{this.state.title}</h1>
				<div className='videoScreen'>
					<Youtube
						videoId={'TcMBFSGVi1c'}>
					</Youtube>
				</div>
				<div className ='chatBox'>
					<ChatBox />
				</div>
				<div className='nextShow'>
				</div>
			</div>);
	}
}

export default VideoPage;