import React, { useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Entry from '../../models/Entry';

interface IEntrySelectProps {
  getSelectedEntries: (entry: Entry) => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const EntrySelect: React.SFC<IEntrySelectProps> = ({ getSelectedEntries }) => {
  const [entries, setEntries] = React.useState({
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
    setEntries({ ...entries, [event.target.name]: event.target.checked });
  };
  useEffect(() => {
    getSelectedEntries(entries);
    // eslint-disable-next-line
  }, [entries]);

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Published}
            onChange={handleChange}
            name="Published"
            // color="primary" //TODO - modify color in theme to match the bar color
          />
        }
        label="Published"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Abstract}
            onChange={handleChange}
            name="Abstract"
          />
        }
        label="Abstract"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Presentation}
            onChange={handleChange}
            name="Presentation"
          />
        }
        label="Presentation"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.JournalArticle}
            onChange={handleChange}
            name="JournalArticle"
          />
        }
        label="Journal Article"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Datasets}
            onChange={handleChange}
            name="Datasets"
          />
        }
        label="Datasets"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Report}
            onChange={handleChange}
            name="Report"
          />
        }
        label="Report"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.ConferenceProceedings}
            onChange={handleChange}
            name="ConferenceProceedings"
          />
        }
        label="Conference Proceedings"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Other}
            onChange={handleChange}
            name="Other"
          />
        }
        label="Other"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Brochure}
            onChange={handleChange}
            name="Brochure"
          />
        }
        label="Brochure"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.BookChapter}
            onChange={handleChange}
            name="BookChapter"
          />
        }
        label="BookChapter"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Video}
            onChange={handleChange}
            name="Video"
          />
        }
        label="Video"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Book}
            onChange={handleChange}
            name="Book"
          />
        }
        label="Book"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Exhibit}
            onChange={handleChange}
            name="Exhibit"
          />
        }
        label="Exhibit"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Software}
            onChange={handleChange}
            name="Software"
          />
        }
        label="Software"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={entries.Magazine}
            onChange={handleChange}
            name="Magazine"
          />
        }
        label="Magazine"
      />
    </FormGroup>
  );
};
export default EntrySelect;
