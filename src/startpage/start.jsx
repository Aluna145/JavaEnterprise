import React from "react";
import Button from '@material-ui/core/Button';
import {Link, Route} from "react-router-dom";
import Card from '@material-ui/core/Card';
import {loadNews, selectArticle, setUser} from "../data/action-creators";
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CityLocation from "./location-search";
import {connect} from "react-redux";
// import Search from "./search";
const styles = {
	media: {
		textAlign: 'center',
	},
	gridBack: {
		minHeight: '88vh',
		backgroundSize: 'cover',
		backgroundImage: `url('https://www.vactualpapers.com/wallpapers/a-beautiful-sunset-by-the-beach-nature-landscape-4k-wallpaper/download/5120x2880.jpg')`,
	},
};

class User extends React.Component {

	onClick = () => {
		this.props.setUser();
	};

	render() {
		return (
			<React.Fragment>
				<Grid container spacing={0}
				      direction="column"
				      alignItems="center"
				      justify="center" style={styles.gridBack}				>
					<Grid item xs={12}>
						<Card>
							<CardActionArea>
								<CardContent
									style={styles.media}
								>
									<CityLocation/>
									<br/>
									<Button onClick={this.onClick} variant="contained" color="primary" component={Link}
									        to="/board">
										START
									</Button>
									<br/>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	};
}

const mapStateToProps = (state) => ({
	selectedArticle: state.app.article,
	news: state.app.news,
	image: state.app.cards,
	newsIsLoading: state.app.newsIsLoading,
	newsLoadingFailed: state.app.newsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
	setUser: () => dispatch(setUser()),
	loadNews: () => dispatch(loadNews())
});
const FirstPageConnect = connect(mapStateToProps, mapDispatchToProps)(User);

export default FirstPageConnect;
