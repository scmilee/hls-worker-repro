import "./App.css";
import Player from "@mux/mux-player-react";
function App() {
  return (
    <Player
      src={
        "https://stream.mux.com/01b2r4H6Pg8Q01NJZGppCu6X6tmfP6f6Jtp5oFZaETUwU.m3u8"
      }
      preload="metadata"
      debug={true}
      _hlsConfig={{ debug: true }}
    />
  );
}

export default App;
