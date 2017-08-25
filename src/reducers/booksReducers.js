"use-strict"

export function booksReducers(state = {
	books: [
		{
			id: 1,
			title: "Glory to God",
			description: "It's a good thing to give thanks to God",
			price: '99'
			},
		{
			id: 2,
			title: 'And its another one',
			description: 'Yea let them talk',
			price: "11"
			}
		]
}, action) {
	switch (action.type) {
		case "GET_BOOK":
			return {
				...state,
				books: [
				    ...state.books
				   ]
			}
			break;
			case 'POST_BOOK':
					return {
						...state,
						books: [
						 ...state.books,
						 ...action.payload,
						]
					}
					break;
		case "DELETE_BOOK":
			let nonDeletedBooks = state.books.concat(state.books.filter(book => book.id !== action.payload[0].id));
			return {
				...state,
				books: [
				  ...nonDeletedBooks
				 ]
			}
			break;
		case "UPDATE_BOOK":
			let currentData = state.books.filter(book => book.id !== action.payload[0].id);
			let itemToBeUpdated = state.books.filter(book => book.id === action.payload[0].id);
			return {
				...currentData,
				books: [
					...itemToBeUpdated[0],
					title: "God takes the glory"
				  ]
			}
		default:
			return state;
			break;
	}
}
