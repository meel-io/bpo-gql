import gql from "graphql-tag";

export const UPDATE_RATE = gql`
  mutation($roomRateId: String!, $weekdayRate: Int!, $weekendRate: Int!) {
    setRoomRate(
      roomRateId: $roomRateId
      weekdayRate: $weekdayRate
      weekendRate: $weekendRate
    ) {
      id
      roomType
      weekdayRate
      weekendRate
    }
  }
`;
