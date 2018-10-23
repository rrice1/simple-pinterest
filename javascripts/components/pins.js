import{loadPinsForBoard} from '../data/pinsData.js'

const initalPinView = (boardId) =>{
    loadPinsForBoard(boardId);
}

export{initalPinView};