function printSongs(input) {
    [_, ...songs] = input;
    const typeList = songs.pop();
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    // let songArr = [];
    // for (const song of songs) {
    //     [type, name, time] = song.split('_');
    //     let currentSong = new Song(type, name, time);
    //     songArr.push(currentSong);
    // }

    let songArr = songs.map((songInfo) =>{
        const [type, name, time] = songInfo.split('_');
        let song = new Song(type, name, time);
        return song;
    })

    if (typeList === "all") {
        songArr.forEach(s => {
            console.log(s.name);
        })
    }
    else{
        songArr.filter(s=> s.type === typeList).forEach(s => {
            console.log(s.name);
        })
    }
}

printSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

