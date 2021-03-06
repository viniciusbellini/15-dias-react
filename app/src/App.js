import React from 'react';

import BoardCollab from "./components/BoardCollab";
import NextPlayer from "./components/NextPlayer";
import GameWrapper from './components/GameWrapper';

const App = () => (
  <GameWrapper>
    <NextPlayer/>
    <BoardCollab qtde="9" />
  </GameWrapper>
)

export default App;
