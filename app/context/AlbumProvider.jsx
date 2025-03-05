"use client";
import React, { useState } from "react";
import { createContext } from "react";
import AlbumList from "../components/AlbumList";
export const AlbumContext = createContext();
const AlbumProvider = ({ children }) => {
  const [addedAlbumList, setAddedAlbumList] = useState([]);
  const addAlbum = (album) => {
    setAddedAlbumList([...addedAlbumList, album]);
    console.log(addedAlbumList);
  };
  const removeAlbumFromList = (slug) => {
    setAddedAlbumList(addedAlbumList.filter((album) => album.slug !== slug));
  };
  return (
    <AlbumContext.Provider
      value={{ addedAlbumList, addAlbum, removeAlbumFromList }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
