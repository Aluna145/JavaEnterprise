import TextField from "@material-ui/core/TextField/TextField";
import {Field, reduxForm} from 'redux-form'
import React from "react";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Typography from '@material-ui/core/Typography';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff'
import FormControl from '@material-ui/core/FormControl';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
		},
	}
};
const Cities = [
	'Berlin',
	'Bucharest','Buenos Aires','Chicago','Jakarta','Milan',
	'Miami','Montreal','Moscow',
	'New York City',
	'Osaka','Rio de Janeiro','Rome',
	'São Paulo','Sapporo','Seoul', 'Stockholm','Tokyo','Toronto',
	'Washington','Bangkok',
	'Beijing',
	'Dallas',
	'Dubai',
	'Houston',
	'Johannesburg',
	'Kiev',
	'Kuala Lumpur',
	'Medellín',
	'Nagoya',
	'Shanghai',
	'Taipei',
	'Tehran'
];
const AdaptedSelect = ({input: {value, onChange}, ...custom}) => (
	<FormControl style={{width: '100%'}}>
		<InputLabel>Your Location</InputLabel>
		<Select MenuProps={MenuProps} renderValue={value => `${value}`} value={value} onChange={onChange} label='dfd' {...custom} margin='normal' style={{    textAlign: 'justify'}}>
			{Cities.map(name => (
				<MenuItem key={name} value={name}>
					{name}
				</MenuItem>
			))}
		</Select>
	</FormControl>
);

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
	<TextField
		value={value}
		onChange={onChange}
		{...custom}/>
);
const styles = {
	icon: {
		fontSize: 48
	},
};
const CityLocation = () => (
	<form>
		<FlightTakeoffIcon aria-label="Take off" color="action"  style={{ fontSize: 48 }} >
		</FlightTakeoffIcon>
		<Typography variant="h3" gutterBotton='true' align={'center'} color={'textPrimary'}>
			TIBO
		</Typography>
		<br/>

		<Field
			floatingLabelStyle={{textAlign: 'center', width: '100%', transformOrigin: 'center top 0px'}}
			inputStyle={{textAlign: 'center'}}
			hintStyle={{textAlign: 'center', width: '100%'}}
			component={AdaptedTextField} name="name" label="Name" margin="normal" placeholder="Alyona"/>
		<br/>
		<Field component={AdaptedSelect} name="location" placeholder="Moscow" margin="normal"/>
	</form>
);

const initialValues = {
	location: "Moscow",
	name: "Alyona"
};
export default reduxForm({form: 'citylocation', initialValues})(CityLocation);