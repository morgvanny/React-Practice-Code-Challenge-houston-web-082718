import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = props => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(s => {
          return (
            <Sushi key={s.name} sushi={s} eat={console.log} eaten={false} />
          );
        })}
        <MoreButton moreSushi={console.log} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
