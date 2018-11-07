import React from "react"
import {Data} from "./article"
import axios from "axios"
import Button from "@material-ui/core/Button/Button"
import {selectData} from "../data/action-creators";

import {connect} from "react-redux";

class News extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoading: false,
			isFailed: false,
			result: []		}
	}

	onClick = () => {
		this.setState({
			isLoading: true,
			isFailed: false
		});
		//API KEY: MGwGukdTRCrSkwQKkG
		axios.get('https://gender-api.com/get?name=anna;anna;anna&country=DE;US;CA&multi=true&key=MGwGukdTRCrSkwQKkG')
			.then((response) => {
			const documents1=response.data;
				this.setState({
					result:Object.values(response.data.result) || [],
					isLoading: false
				})
				console.log("Answer1: "+documents1);
				console.log("Answer2: "+this.state.result);
			})
			.catch((e) => {
				this.setState({
					isFailed: true,
					isLoading: false
				})
			})
	}

	render() {
		return (
			<React.Fragment>
				<h2>{this.props.selectedData}</h2>
				<Button onClick={this.onClick} variant="contained" color="primary">
					Загрузить новости
				</Button>
				{this.state.isLoading && <div>Подождите, идет загрузка</div>}
				{this.state.isFailed && <div>Ой-ой :(</div>}

				<ul>
					{this.state.result.map((doc) => (
						<li key={doc.samples}>

							<h3 onClick={ () => this.props.selectData(doc.samples)}>{doc.country}</h3>
							<h4>{doc.samples}</h4>
						</li>
					))}
				</ul>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	selectedData: state.article
});

const mapDispatchToProps = (dispatch) => ({
	selectData: (articleText) => dispatch(selectData(articleText))
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;