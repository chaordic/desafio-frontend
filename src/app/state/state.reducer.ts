import { AppState } from './index';

export const initialState: AppState = {
    breweriesList: [],
    selectedFilter: 'all'
};

export function reducer(state: AppState = initialState, action: any) {

    switch (action.type) {
        case 'FILL_BREWERIES':
            return { ...state, breweriesList: action.payload }
        case 'FILL_SELECTED_FILTER':
            return { ...state, selectedFilter: action.payload }

        default:
            return state
    }
}
