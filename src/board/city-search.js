import {Field, reduxForm} from 'redux-form'
import React from "react";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
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
const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
	<FormControl style={{width: '182px'}}>
		<InputLabel>I want to visit</InputLabel>
		<Select MenuProps={MenuProps} renderValue={value => `${value}`} value={value} onChange={onChange} label='dfd' {...custom} margin='normal' style={{    textAlign: 'justify'}}>
			{Cities.map(name => (
				<MenuItem key={name} value={name}>
					{name}
				</MenuItem>
			))}
		</Select>
	</FormControl>
);



//add new city-card
const Search = () => (
	<form>
		<Field component={AdaptedTextField} name="city" label="I want to visit" margin="normal">
		</Field>
	</form>
);

const initialValues = {
	city: "London",
};
export default reduxForm({form: 'search', initialValues})(Search);