const initialState = [
    {name: 'Asus Vivobook X515MA', quantity: 20, price: 35500},
    {name: 'Dell E1916HV 18.5 Inch', quantity: 35, price: 9300},
    {name: 'Canon Eos 4000D 18MP', quantity: 72, price: 36500},
]

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productsReducer;
