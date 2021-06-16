let initState = {
    name:'op',
    job:'front-end',
    isMarry:false,
}
//订阅发布
//所有订阅者
let subs = []

//订阅消息
function dep(listener){
    subs.push(listener);
}

//发布消息
function updateState(newState){
    initState = {...initState,...newState};
    subs.forEach(sub=>{
        sub();
    })
}


dep(()=>{console.log("订阅订阅····")})

updateState({isMarry:true});


//----------------------------------------------------------------

function createStore(initState){
    let state = initState;
    let listeners = [];

    //订阅
    function subscribe(listener){
        listeners.push(listener);
    }

    function changeState(newState){
        state = {...state,...newState};
        listeners.forEach(listener=> listener());
    }

    //获取新的状态
    function getState(){
        return state;
    }

    return {
        subscribe,
        changeState,
        getState
    }
}

let store = createStore(initState); 

store.subscribe(()=>{
    let state = store.getState();
    console.log('状态变更了',state);
})

store.changeState({
    isMarry:true,
    job:'other'
})