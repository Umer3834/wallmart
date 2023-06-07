const initialstate = {
    items: [],
    counter: 0,
    Price: 0
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "add": {
            // {
            //     state.items.map((ele)=>{
            //     console.log(ele.price,"fhfhfhfhfhf")
            //     return{
            //         Price:ele.price+state.Price
            //     }
            
            //     })
            // }
            // console.log(action.payload.item,"test");

            return {

                // ...state,
                items: [...state.items, action.payload.item],

                counter: state.counter + 1,
                // Price: action.payload.myprice
            }
        };
            break
        case 'Del_ITEM':

            var mystate = state.items
            mystate.splice(action.payload.index, 1)

            return {
                items: [...mystate],
                counter: state.counter - 1


            }
        default:
            return state;

    }
  

}

export default reducer