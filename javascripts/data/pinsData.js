const loadPinsForBoard = (boardId) => {
    return new Promise((resolve, reject) =>{
        $.get('../db/pins.json')
        .done((data)=>{
            const pinsForBoards=
            data.pins.filter(pin=>pin.board_id == boardId)
            console.log(pinsForBoards);
        })
        .fail((error)=>{
            console.error(error);
        })
    })
}

export {loadPinsForBoard};