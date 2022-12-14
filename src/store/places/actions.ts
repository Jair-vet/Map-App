import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { PlacesResponse } from '@/interfaces/places';
import { Feature } from '../../interfaces/places';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation( { commit } ) {
        // TODO: Colocar Loading
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude} ),
            ( err ) => {
                console.log(err);
                throw new Error('No Geolocation :( ')
            }
        )
    },

    // Colocar el valor de retorno
    async searchPlacesByTerm({ commit, state }, query: string):Promise<Feature[]> {

        if ( query.length === 0 ) {
            commit('setPlaces', []);
            return [];
        }

        if ( !state.userLocation ){
            throw new Error('No hay ubicación');
        }

        commit('setIsLoadingPlaces');
        
        const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`,{
            params: {
                proximity: state.userLocation?.join(',')
            }
        });
        commit('setPlaces', resp.data.features);
        
        return resp.data.features
        
    }
}



export default actions;