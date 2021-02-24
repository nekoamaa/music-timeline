
import artistData from "../data/artists"
import songData from "../data/songs"
import albumData from "../data/albums"
import Wrapper from "../components/wrapper"


function sidenav() {
    return (
        <div className="col-2 sidenav">
            <div>
                <h1 className="sidenav-text">Favorites</h1>
                <hr></hr>
                <div className="artists">
                    <h2 className="sidenav-text">Artists</h2>                 
                    {artistData.map((artist) => (
                        <div className="flex-container">
                            <img src={artist.image} className="sidenav-img-rounded" />
                            <Wrapper condition={artist.url} wrapper={(children) => (
                                <a className="sidenav-info" href={artist.url} target="no_blank">
                                    {children}
                                </a>
                                )}>
                                <p className="sidenav-name">{artist.name}</p>
                            </Wrapper>
                        </div>
                    ))}             
                </div>
                <hr></hr>
                
                <div className="songs">
                    <h2 className="sidenav-text">Songs</h2>
                    {songData.map((song) => (
                        <div className="flex-container">
                            <img src={song.image} className="sidenav-img" />
                            <Wrapper condition={song.url} wrapper={(children) => (
                                <a className="sidenav-info" href={song.url} target="no_blank">
                                    {children}
                                </a>
                                )}>
                                <p className="sidenav-name sidenav-name-hover">{song.name}</p>
                                <p className="hide">- {song.artist}</p>
                            </Wrapper>
                        </div>
                        
                    ))} 
                </div>
                <hr></hr>
                
                <div className="albums">
                    <h2 className="sidenav-text">Albums</h2>
                    {albumData.map((album) => (
                        <div className="flex-container">
                            <img src={album.image} width="35" className="sidenav-img" />
                            <Wrapper condition={album.url} wrapper={(children) => (
                                <a className="sidenav-info" href={album.url} target="no_blank">
                                    {children}
                                </a>
                                )}>
                                <p className="sidenav-name sidenav-name-hover">{album.name}</p>
                                <p className="hide">- {album.artist}</p>
                            </Wrapper>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default sidenav