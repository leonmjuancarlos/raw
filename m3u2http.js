const fs = require('fs');

INPUT = './test.m3u8'
IP = '192.168.1.11'
PORT = '6878'
OUTPUT = './test-http.m3u8'

fs.readFile(INPUT, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
// http://127.0.0.1:6878/ace/getstream?id=5c668adaf86ed6af2488e28d9f3a4e3b0e909664&hlc=1&transcode_audio=1&transcode_mp3=0&transcode_ac3=0&preferred_audio_language=eng
  const search = 'acestream://';
  const replaceWith = `http://${IP}:${PORT}/ace/getstream?id=`;
  const result = data.split(search).join(replaceWith);
  console.log(result);

  fs.writeFile(OUTPUT, result, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});