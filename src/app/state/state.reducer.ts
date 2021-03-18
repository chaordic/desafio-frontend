import { AppState } from './index';

export const initialState: AppState = {
    breweriesList: []
};

export function reducer(state: AppState = initialState, action: any) {

    switch (action.type) {
        case 'FILL_BREWERIES':
            return { ...state, breweriesList: action.payload }
        
        default:
            return state
    }
}
