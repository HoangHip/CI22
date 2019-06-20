const view = {}

// show components to screen
// showComponents('register')
view.showComponents = function (name) {
    // 1
    // switch(name) {
    //     case 'register' : {
    //         document.getElementById('app').innerHTML = components.register
    //         break
    //     }
    // }

    // 2
    if (name == 'register') {
        document.getElementById('app').innerHTML = components.register
    } else if (name == 'login') {
        document.getElementById('app').innerHTML = components.login
    }
}