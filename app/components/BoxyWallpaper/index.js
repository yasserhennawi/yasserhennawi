import React from 'react';
import styled from 'styled-components';

const Wallpaper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`
const WallpaperBox = styled.div`
  position: absolute;
  width: 50vw;
  height: 50vh;
  background-color: ${props => props.backgroundColor};
  box-sizing: content-box;
  &:nth-child(1) {
    top:  0%;
    left:  0%;

  }
  &:nth-child(2) {
    top: 50%;
    left:  0%;
  }
  &:nth-child(3) {
    top:  0%;
    left: 50%;
  }
  &:nth-child(4) {
    top: 50%;
    left: 50%;
  }
`

export default function BoxyWallpaper({ ...props }){
  return (
    <Wallpaper>
      <WallpaperBox backgroundColor='#FFF'/>
      <WallpaperBox backgroundColor='#000'/>
      <WallpaperBox backgroundColor='#000'/>
      <WallpaperBox backgroundColor='#FFF'/>
    </Wallpaper>
  )
}
