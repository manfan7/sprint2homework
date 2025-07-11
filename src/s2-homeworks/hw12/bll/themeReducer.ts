const initState = {
    themeId: 1,
}
type changeThemeId = ReturnType<typeof changeThemeId>
export const themeReducer = (state:typeof initState= initState, action: changeThemeId): typeof initState=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
return {...state,themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
