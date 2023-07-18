// ageCountSlice.test.ts

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { AnyAction } from 'redux';
import fetchMock from 'jest-fetch-mock';
import ageCountReducer, {
  getAgeCount,
} from '../store/reducers/ageCount.reducer';
// import ageCountReducer, { getAgeCount } from ''; // Update this with the correct file path

const mockStore = configureMockStore([thunk]);

describe('ageCountSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks(); // Reset fetch mock before each test
  });

  it('should fetch age count data and fulfill the thunk', async () => {
    const fakeAgeCountData = {
      teen: 10,
      adult: 20,
      senior: 5,
    };

    fetchMock.mockResponseOnce(
      JSON.stringify({ data: { getAgeCountData: fakeAgeCountData } })
    );

    const store = mockStore({});

    await store.dispatch<any>(getAgeCount());

    const actions = store.getActions();
    const expectedPayload = fakeAgeCountData;
    expect(actions[0].payload).toEqual(expectedPayload);
  });

  it('should handle errors when fetching age count data', async () => {
    fetchMock.mockRejectOnce(new Error('API error'));

    const store = mockStore({});

    await store.dispatch<any>(getAgeCount());

    const actions = store.getActions();
    expect(actions[0]).toHaveProperty('error');
  });

  it('should handle the fulfilled action and update state', () => {
    const fakeAgeCountData = {
      teen: 10,
      adult: 20,
      senior: 5,
    };

    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const action = {
      type: 'ageCount/getAgeCount/fulfilled',
      payload: fakeAgeCountData,
    };

    const nextState = ageCountReducer(initialState, action);
    expect(nextState.data).toEqual(fakeAgeCountData);
    expect(nextState.loading).toEqual(false);
    expect(nextState.error).toBeNull();
  });
});
