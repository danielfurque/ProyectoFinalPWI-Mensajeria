import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx';
import './App.css'
import ListaMensajes from './Components/Chat/ListaMensajes/ListaMensajes.jsx';
import ChatScreen from './Screens/ChatScreen/ChatScreen.jsx';
import InfoScreen from './Screens/InfoScreen/InfoScreen.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<ContactScreen />} />
      <Route path="/chat/:id" element={<ChatScreen />} />
      <Route path="/info/:id" element={< InfoScreen />} />
    </Routes>
  )
}

export default App
