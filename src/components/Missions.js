import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <h2>
          <Title headline="Missões" />
        </h2>
        <section>
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </section>
      </>
    );
  }
}

export default Missions;
