import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    Published: true,
    Abstract: true,
    Presentation: false,
    JournalArticle: false,
    Datasets: false,
    Report: false,
    ConferenceProceedings: false,
    Other: false,
    Brochure: false,
    BookChapter: false,
    Video: false,
    Book: false,
    Exhibit: false,
    Software: false,
    Magazine: false,
  });
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Published}
            onChange={handleChange}
            name="Published"
          />
        }
        label="Published"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Abstract}
            onChange={handleChange}
            name="Abstract"
          />
        }
        label="Abstract"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Presentation}
            onChange={handleChange}
            name="Presentation"
          />
        }
        label="Presentation"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.JournalArticle}
            onChange={handleChange}
            name="JournalArticle"
          />
        }
        label="Journal Article"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Datasets}
            onChange={handleChange}
            name="Datasets"
          />
        }
        label="Datasets"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Report}
            onChange={handleChange}
            name="Report"
          />
        }
        label="Report"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.ConferenceProceedings}
            onChange={handleChange}
            name="ConferenceProceedings"
          />
        }
        label="Conference Proceedings"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Other}
            onChange={handleChange}
            name="Other"
          />
        }
        label="Other"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Brochure}
            onChange={handleChange}
            name="Brochure"
          />
        }
        label="Brochure"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.BookChapter}
            onChange={handleChange}
            name="BookChapter"
          />
        }
        label="BookChapter"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Video}
            onChange={handleChange}
            name="Video"
          />
        }
        label="Video"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.Book} onChange={handleChange} name="Book" />
        }
        label="Book"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Exhibit}
            onChange={handleChange}
            name="Exhibit"
          />
        }
        label="Exhibit"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Software}
            onChange={handleChange}
            name="Software"
          />
        }
        label="Software"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.Magazine}
            onChange={handleChange}
            name="Magazine"
          />
        }
        label="Magazine"
      />
    </FormGroup>
  );
}
