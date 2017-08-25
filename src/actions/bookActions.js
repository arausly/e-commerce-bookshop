"use-strict"

//POST BOOK
export function postBook(book) {
	return {
		type: "POST_BOOK",
		payload:book
	}
}
//DELETE BOOK
export function deleteBook(id){
	return{
		type:"DELETE_BOOK",
		payload:id,
	}
}

//UPDATE BOOK

export function updateBook(id){
	return{
		type:"UPDATE_BOOK",
		payload:id
	}
}

export function getBooks(){
	return{
		type:"GET_BOOK",
	}
}
