export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export const addDeck = (deck) => (dispatch) => {
  dispatch({
    type: ADD_DECK,
    deck,
  });

  return Promise.resolve();
};

export function addCard(questionDetails) {
  return {
    type: ADD_CARD,
    questionDetails,
  };
}
