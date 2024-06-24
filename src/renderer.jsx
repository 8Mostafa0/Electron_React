import './index.css';
import React from 'react';
import createRoot from 'react-dom';
const { ipcRenderer } = window.require('electron');




createRoot.render(
    <>
    <div>Teaasssssst.</div>
    <button onClick={()=>{ipcRenderer.send('close',[])}}>clossssss</button>
    <button id="close-window" type="button">Close</button>
    </>
, document.getElementById('root'));

