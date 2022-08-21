/*
    {
        notes: [],
        active: null,
        active: {
            id: 'KKJSDALFKJDSLKKLJ1234170',
            title: '',
            body: '',
            imageUrl: '',
            date: 132134654667812
        }

    }
*/

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = ( state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }

}