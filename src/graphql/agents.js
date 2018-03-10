import gql from "graphql-tag";

export const AGENTS = gql`
  fragment AgentRate on Rate {
    id
    name
    rooms {
      id
      roomType
      weekdayRate
      weekendRate
    }
  }

  fragment AgentSeasonRate on SeasonRate {
    id
    name
    seasons {
      id
      startDate
      rooms {
        id
        roomType
        weekdayRate
        weekendRate
      }
    }
  }

  query Agents {
    agents {
      id
      name
      rates {
        ...AgentRate
        ...AgentSeasonRate
      }
    }
  }
`;
