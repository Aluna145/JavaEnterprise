import React from "react"
import Button from "@material-ui/core/Button/Button"
import {loadNews, deleteCard, cardToggle} from "../data/action-creators";
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';

//Data visualization library
import {Chart} from "react-charts";

import Tooltip from '@material-ui/core/Tooltip';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FlightLandIcon from '@material-ui/icons/FlightLand'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import LanguageIcon from '@material-ui/icons/Language'
import MoneyIcon from '@material-ui/icons/Money'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//grid
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
//buttons
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DateRangeIcon from '@material-ui/icons/DateRange';

import {connect} from "react-redux";
import Search from "./city-search";

const styles = {
	form: {
		maxWidth: 300,
		minWidth: 300,
		height: 345,
		margin: 20,
		textAlign: 'center',
	},
	flightForm: {
		width: 150
	},
	card: {
		maxWidth: 300,
		minWidth: 300,
		margin: 20,
	},
	media: {
		textAlign: 'center',
		objectFit: 'cover'
	},
	gridBoard: {
		minHeight: '87vh',
		background: '#f5f5f5'
	},
	gridBack: {
		backgroundSize: 'cover',
		// backgroundImage: `url('https://www.vactualpapers.com/wallpapers/a-beautiful-sunset-by-the-beach-nature-landscape-4k-wallpaper/download/5120x2880.jpg')`,
	},
	chartWeather: {
		maxWidth: 252,
		minWidth: 252,
		maxHeight: 100,
		height: 100,
		textAlign: 'center',
	}
};

class News extends React.Component {

	onClick = () => {
		this.props.loadNews();
	};
	deleteCard = (city) => {
		this.props.deleteCard(city)
	};
	cardToggle = (city) => {
		this.props.cardToggle(city)
	};

	render() {
		return (
			<React.Fragment>
				<Grid container
				      alignItems="center"
				      justify="center" style={styles.gridBoard}>
					<Grid item>
						<Paper style={styles.form}>
							<Typography variant="h6" gutterBotton align={'center'} color={'textPrimary'}
							            style={{fontWeight: 'bold'}}>
								<br/>{this.props.user}😃
							</Typography>
							<TextField name="city" defaultValue={this.props.currentlocation} label="Current city"
							           disabled margin="normal"/>

							<Search/>
							<br/>
							<Button onClick={this.onClick} variant="contained" color="primary"
							        style={styles.buttonMain}>
								Add place
							</Button>

							<br/>
							<br/>
							{this.props.readyToWork &&
							<div style={{color: 'green', fontFamily: 'Roboto', fontSize: '14px'}}>Ready to
								work</div>}
							{this.props.newsIsLoading &&
							<div style={{color: 'orange', fontFamily: 'Roboto', fontSize: '14px'}}>Loading...</div>}
							{this.props.newsLoadingFailed &&
							<div style={{color: 'red', fontFamily: 'Roboto', fontSize: '14px'}}>Something went
								wrong!</div>}

						</Paper>
					</Grid>
					{this.props.cards.map((img1) => (
						<Grid item>
							<Zoom in={img1.isExist}>
								<Card
									style={styles.card}>
									<CardHeader
										action={
											<IconButton
												aria-label="Delete"
												onClick={() => {
													this.deleteCard(img1.city)
												}}>
												<DeleteIcon/>
											</IconButton>
										}
										style={{whiteSpace: 'nowrap'}}
										title={img1.city.charAt(0).toUpperCase() + img1.city.slice(1)}
										subheader={img1.fullCityName}/>
									<CardActionArea

										onClick={() => {
											this.cardToggle(img1.city)
										}}>
										<CardMedia
											style={{
												display: img1.displayImage,
												textAlign: 'center',
												objectFit: 'cover',
											}}
											focusRipple
											component="img"
											alt="Contemplative Reptile"
											height="230"
											image={img1.imageSrc}
											title="Contemplative Reptile"
										/>

										<CardContent
											focusRipple
											style={{
												height: img1.heightContent,
												fontFamily: 'Roboto',
												visibility: img1.visibilityContent
											}}
										>
											<div style={styles.chartWeather}>
												<Chart
													data={[
														{
															label: "t(℃)",
															data: [['Jan', -8], ['Feb', -1], ['Mar', 5], ['Apr', 12], ['May', 18], ['Jun', 18], ['Jul', 24], ['Aug', 22], ['Sept', 19], ['Oct', 15], ['Nov', 10], ['Dec', -5]]
														},
													]}
													axes={[
														{primary: true, type: "ordinal", position: "bottom"},
														{type: "linear", position: "left"}
													]}
												/>
											</div>
											<Typography component="p">
												<Tooltip title="Currency">
													<IconButton aria-label="Weather">
														<MoneyIcon/>
													</IconButton></Tooltip>EUR
												<Tooltip title="Official Language">
													<IconButton aria-label="Weather">
														<LanguageIcon/>
													</IconButton></Tooltip>EN
												<Tooltip title="Current weather">
													<IconButton aria-label="Weather">
														<WbSunnyIcon/>
													</IconButton></Tooltip>
												{img1.weather}
												<Tooltip title="Current date and time">

													<IconButton aria-label="Data and time">
														<DateRangeIcon/>
													</IconButton></Tooltip>
												{img1.dateandtime}
												<br/>
												<Tooltip title="Approximate cost of a ticket
													from your city to this and back">

													<IconButton aria-label="Money" style={styles.flightIcon}>
														<MonetizationOnIcon/>
													</IconButton>
												</Tooltip>
												The Flight ticket: {img1.price} {img1.currency}
												<br/>
												<Tooltip title="Departure date by price above">
													<IconButton aria-label="Take off">
														<FlightTakeoffIcon/>
													</IconButton></Tooltip>{img1.dateBack}

												<Tooltip title="Arrival date by price above">

													<IconButton aria-label="Land">
														<FlightLandIcon/>
													</IconButton></Tooltip>{img1.dateTo}
												<br/>
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Zoom>
						</Grid>
					))}</Grid>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => ({
	user: state.app.username,
	selectedArticle: state.app.article,
	news: state.app.news,
	cards: state.app.cards,
	currentlocation: state.app.currentlocation,
	readyToWork: state.app.readyToWork,
	newsIsLoading: state.app.newsIsLoading,
	newsLoadingFailed: state.app.newsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
	loadNews: () => dispatch(loadNews()),
	deleteCard: (city) => dispatch(deleteCard(city)),
	cardToggle: (city) => dispatch(cardToggle(city))
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;