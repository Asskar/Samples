export function selectBook(book){
    //SelectBook is an ActionCreator, it needs to return an ACTION, an object with type property.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}