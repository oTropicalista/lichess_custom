var board_select = document.getElementById('board_select')

//update options with values in storage
chrome.storage.sync.get('board', function(data) {

    board_select.value = data['board']

    
})

//update storage with new value
board_select.onchange = function(element) {
    let value = this.value

    chrome.storage.sync.set({'board': value}, function() {
        
    })


    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "board_init": value
        })
    })
}