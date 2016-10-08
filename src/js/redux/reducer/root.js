const initialState = {
    menu: [
        {
            name: 'File'
            , sections: [
                {
                }
            ]
        }
    ]
    , finder: {
        21321: {
            zIndex: 5
            , position: {
                x: '10%'
                , y: '20%'
            }
            , type: 'background'
            , content: [
                {
                    name
                }
            ]
            , icon: 1231
        }
    }
    , desktop: {
        menuIsOpen: false
        , application: 'desktop|chrome'
        , activeWindow: 21321
        , activeIcon: 1231
        , background: 'test.jpg'
        , contextMenuOpen: false
    }
    , trash: [
        {
            name: {
            }
        }
    ]
    , icons: {
        1231: {
            type: 'folder'
            , position: {
                x: '100%'
                , y: '20%'
            }
        }
    }
};

export default function(state = initialState, action) {
    switch ( action.type ) {
        case 'TEST':
            return Object.assign({}, state, { test: !state.test });
        default:
            return state;
    }
}
