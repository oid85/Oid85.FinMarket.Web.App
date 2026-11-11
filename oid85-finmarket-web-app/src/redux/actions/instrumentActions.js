import {
    SAGA_INSTRUMENT_LIST,    
    SAGA_SECTOR_LIST,
    FETCH_INSTRUMENT_LIST,
    FETCH_CURRENT_INSTRUMENT,
    FETCH_SECTOR_LIST
} from '../types/instrumentTypes'


export const sagaInstrumentList = () => {
    return {
        type: SAGA_INSTRUMENT_LIST
    }
}

export const sagaSectorList = () => {
    return {
        type: SAGA_SECTOR_LIST
    }
}

export const fetchInstrumentList = (data) => {
    return {
        type: FETCH_INSTRUMENT_LIST,
        payload: data
    }
}

export const fetchSectorList = (data) => {
    return {
        type: FETCH_SECTOR_LIST,
        payload: data
    }
}

export const fetchCurrentInstrument = (data) => {
    return {
        type: FETCH_CURRENT_INSTRUMENT,
        payload: data
    }
}
