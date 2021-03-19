import { AppState } from './index';

export const initialState: AppState = {
    breweriesList: [],
    selectedFilter: 'all',
    page: 1,
    selectedBrewerie: null
};

export function reducer(state: AppState = initialState, action: any) {

    switch (action.type) {
        case 'FILL_BREWERIES':
            return { ...state, breweriesList: action.payload }
        case 'FILL_SELECTED_BREWERIE':
            return { ...state, selectedBrewerie: action.payload }
        case 'FILL_SELECTED_FILTER':
            return { ...state, selectedFilter: action.payload }
        case 'FILL_PAGE':
            return { ...state, page: action.payload }

        default:
            return state
    }
}
