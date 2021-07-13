import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
const useStyles = makeStyles({
  formControl: {
    margin: '16px',
    minWidth: '120',
  },
});

interface IYearSelectProps {
  getSelectedYear: (year: string) => void;
}

const YearSelect: React.SFC<IYearSelectProps> = ({ getSelectedYear }) => {
  const classes = useStyles();
  const [year, setYear] = React.useState('2021');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(event.target.value as string);
  };
  useEffect(() => {
    getSelectedYear(year);
  }, [getSelectedYear, year]);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={year}
          onChange={handleChange}
        >
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
        </Select>
        <FormHelperText>Select a year to view data.</FormHelperText>
      </FormControl>
    </div>
  );
};
export default YearSelect;
