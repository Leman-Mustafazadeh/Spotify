import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    current: false,
    controls: false,
    playing: false,
    sideBar: false,
    allDAta: [],
    playerData: [],
    playList: [],
    playFind:{},
    musicData: [],
    likeSongs:[]
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        hundleAllDAta: (state, action) => {
            state.allDAta = action.payload;
        },
        setCurrent: (state, action) => {

            state.current = action.payload
        },
        setControls: (state, action) => {
            state.controls = action.payload
        },
        setPlaying: (state, action) => {
            state.allDAta = state.allDAta.map((item) => {

                if (item._id === action.payload) {
                    state.current = item
                    return {
                        ...item,
                        play: !item.play
                    }
                } else {
                    return {
                        ...item,
                        play: false
                    }
                }

            });
            state.sideBar = true;

        },
        pausePlaying: (state, action) => {
            state.allDAta = state.allDAta.map((item) => {
                return {
                    ...item,
                    play: false
                }
            });

            state.sideBar = false;
        },
        setSideBar: (state, action) => {
            state.sideBar = action.payload
        },
        getPlayerData: (state, action) => {
            state.playerData.push(action.payload);
        },
        hundlePlayList: (state, action) => {
            state.playList.push(action.payload)
        },
        hundlePlayFind: (state, action) => {
            state.playFind = state.playList.find(play => play.id === action.payload)
        },
        editPlayerData:(state,action)=>{
            state.playList = action.payload
        },
        handleMusicData: (state, action) => {
            state.musicData = action.payload;
        },
        handleLikedData:(state,action)=>{
            state.likeSongs=action.payload
        },
        editPlayerData2: (state, action) => {
            state.playFind = action.payload;
        }
    }
})

export const { setCurrent,
    setControls,
    setPlaying,
    setSideBar,
    hundleAllDAta,
    pausePlaying,
    getPlayerData,
    hundlePlayList,
    hundlePlayFind,
    handleMusicData,
    editPlayerData,
    editPlayerData2,hundleSearchDAta } = playerSlice.actions

export default playerSlice.reducer