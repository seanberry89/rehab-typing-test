import { Fragment } from 'react';
import { useMediaQuery } from '@mui/material';

const Outgoing = ({ outgoing, data }) => {

  const small = useMediaQuery('(max-width: 600px)');

  const medium = useMediaQuery('(min-width: 601px) and (max-width: 885px)');

  const large = useMediaQuery('(min-width: 890px) and (max-width: 1200px)');

  const max = useMediaQuery('(min-width: 1201px)');

  let ring = data.title === "The Lord of the Rings";
  let silmarils = data.title === "The Silmarillion";
  let mountains = data.title === "The Hobbit";
  let snowFlake = data.title === "A Christmas Carol";
  let wizard = data.title === "Harry Potter and the Goblet of Fire" || data.title === "Harry Potter and the Deathly Hollows";
  let drow = data.title === "Homeland";

  let style;

  style = drow ? "correct-drow" : null;
  style = ring ? "correct-ring" : null;
  style = silmarils ? "correct-silmarils" : null;
  style = mountains ? "correct-mountains" : null;
  style =  snowFlake ? "correct-snowflake" : null;
  style = wizard ? "correct-wizard" : null;

  return (
    <Fragment>

      { max && outgoing?.map((item, index) => {

        let id = item.id;
        let correct = item.correct;
        let incorrect = item.incorrect;

        return (
          <Fragment key={item + index}>
            { correct ? (
              <Fragment key={id}>
                <span className="correct">{correct}</span>
              </Fragment>
            ) : (
              <Fragment key={id}>
                <span className="incorrect">{incorrect}</span>
              </Fragment>
            )}
          </Fragment>
        )

        }).slice(-24)}

      { large && outgoing?.map((item, index) => {

        let id = item.id;
        let correct = item.correct;
        let incorrect = item.incorrect;

        return (
          <Fragment key={item + index}>
            { correct ? (
              <Fragment key={id}>
                <span className="correct">{correct}</span>
              </Fragment>
            ) : (
              <Fragment key={id}>
                <span className="incorrect">{incorrect}</span>
              </Fragment>
            )}
          </Fragment>
        )

        }).slice(-21)}

      { medium && outgoing?.map((item, index) => {

        let id = item.id;
        let correct = item.correct;
        let incorrect = item.incorrect;

        return (
          <Fragment key={item + index}>
            { correct ? (
              <Fragment key={id}>
                <span className="correct">{correct}</span>
              </Fragment>
            ) : (
              <Fragment key={id}>
                <span className="incorrect">{incorrect}</span>
              </Fragment>
            )}
          </Fragment>
        )

        }).slice(-14)}

      { small && outgoing?.map((item, index) => {

        let id = item.id;
        let correct = item.correct;
        let incorrect = item.incorrect;

        return (
          <Fragment key={item + index}>
            { correct ? (
              <Fragment key={id}>
                <span className="correct">{correct}</span>
              </Fragment>
            ) : (
              <Fragment key={id}>
                <span className="incorrect">{incorrect}</span>
              </Fragment>
            )}
          </Fragment>
        )

        }).slice(-10)}

    </Fragment>
  )
}

export default Outgoing;
