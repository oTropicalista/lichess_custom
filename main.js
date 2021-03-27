// Get pieces from storage

// Get storage
chrome.storage.sync.get('board', function(data) {
    if (data['board'] != 'none_board') {
        Boards.chooseStyleAndApply(data['board'])
    }    
})    
    var board_select = document.getElementById('board_select')
    
    chrome.storage.sync.get('board', function(data) {
        
        if (data['board'] == 'none_board') {
            Boards.greatReset()
        } else {
            Boards.chooseStyleAndApply(data['board']) 
        }
    })