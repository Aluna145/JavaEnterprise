import React from "react"
import AppBar from "@material-ui/core/AppBar/AppBar";
import Button from '@material-ui/core/Button';
import {Link, Route, Redirect} from "react-router-dom";
import {About} from "./about/about";
import FirstPageConnect from "./startpage/start";
import ConnectedNews from "./board/board";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";

const styles = {
	mainButton: {
		color: 'white',
		fontWeight: 500,
		fontSize: '21px',
		flexGrow: 1,
		justifyContent: 'left'
	}
};


export const Layout = ({match}) => (
	<main>
		<AppBar position="static">
			<Toolbar>
				<Button color="secondary" component={Link} to="/" style={styles.mainButton}>
					TIBO: Travel Inspiration BOard
				</Button>
				<Button variant="contained" color="secondary" component={Link} to="/about" style={{marginLeft: '8px'}}>
					about
				</Button>
			</Toolbar>
		</AppBar>
		<Route
			exact
			 path={'/'}
			component={FirstPageConnect}
		/>
		<Route path={`/about`} component={About}/>
		<Route path={`/board`} component={ConnectedNews}/>
	</main>
);