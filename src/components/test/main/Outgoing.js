import { Fragment } from 'react';
import { useMediaQuery } from '@mui/material';

const Outgoing = ({ outgoing }) => {

  const small = useMediaQuery('(max-width: 600px)');

  const medium = useMediaQuery('(min-width: 601px) and (max-width: 885px)');

  const large = useMediaQuery('(min-width: 890px) and (max-width: 1200px)');

  const max = useMediaQuery('(min-width: 1201px)');

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

        }).slice(-25)}

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
