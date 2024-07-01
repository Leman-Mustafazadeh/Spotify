import { createSlice } from "@reduxjs/toolkit";
import controller from "../../API";
import { endpoints } from "../../API/constants";
import { useEffect, useState } from "react";


const initialState = {
  current: false,
  controls: false,
  playing: false,
  sideBar: false,
  allDAta: [],
  playerData: [],
  playList: [],
  playFind: {},
  musicData: [],
  likeSongs: [],
  nextSongCount: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    hundleAllDAta: (state, action) => {
      state.allDAta = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.allDAta = state.allDAta.map((item) => {
        if (item._id === action.payload) {
          state.current = item;
          return {
            ...item,
            play: !item.play,
          };
        } else {
          return {
            ...item,
            play: false,
          };
        }
      });
      state.sideBar = true;
    },
    pausePlaying: (state, action) => {
      state.allDAta = state.allDAta.map((item) => {
        return {
          ...item,
          play: false,
        };
      });

      state.sideBar = false;
    },
    setSideBar: (state, action) => {
      state.sideBar = action.payload;
    },
    getPlayerData: (state, action) => {
      state.playerData.push(action.payload);
    },
    hundlePlayList: (state, action) => {
      state.playList.push(action.payload);
    },
    hundlePlayFind: (state, action) => {
      state.playFind = state.playList.find(
        (play) => play.id === action.payload
      );
    },
    editPlayerData: (state, action) => {
      state.playList = action.payload;
    },
    handleMusicData: (state, action) => {
      state.musicData = action.payload;
    },
    handleLikedData: (state, action) => {
      state.likeSongs = action.payload;
    },
    editPlayerData2: (state, action) => {
      state.playFind = action.payload;
    },
    handleLikeSongs: (state, action) => {
      state.allDAta.map((item) => {
        if (item._id === action.payload) {
          if (!state.likeSongs.some((likeSong) => likeSong._id === item._id)) {
            state.likeSongs.push({ ...item, playing: false });
          }
        }
      });
    },
    playLikeSong: (state, action) => {
      state.allDAta.map((item) => {
        if (item._id === action.payload) {
          state.current = item;
        }
      });

      state.likeSongs.map((likeSong) => {
        if (likeSong._id === action.payload) {
          likeSong.playing = !likeSong.playing;
        }

        return likeSong;
      });
    },
    handleNextSong: (state, action) => {
      state.nextSongCount++;
      state.current = state.allDAta[state.nextSongCount];
    },
    handlePrevSong: (state, action) => {
      if (state.nextSongCount < 2) state.nextSongCount = 1;
      state.nextSongCount--;
      state.current = state.allDAta[state.nextSongCount];
    },
  },
});

export const {
  setCurrent,
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
  editPlayerData2,
  hundleSearchDAta,
  handleLikeSongs,
  playLikeSong,
  handleLikedData,
  handleNextSong,
  handlePrevSong,
} = playerSlice.actions;

export default playerSlice.reducer;
