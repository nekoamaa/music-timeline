
import artistData from "../data/artists"
import Wrapper from "../components/wrapper"

function sidenav() {
    return (
        <div className="col-2 sidenav flex-container">
            <div>
                <h1>Favorites</h1>
                <hr></hr>
                <div className="artists">
                    <h2>Artists</h2>                 
                    {artistData.map((artist) => (
                        <div className="">
                            <img src={artist.image} width="35" className="artist-img" />
                            <Wrapper condition={artist.url} wrapper={(children) => (
                                    <a className="cursor-pointer" href={artist.url} target="no_blank">
                                        {children}
                                    </a>
                                )}
                            >
                                <p className="artist-name">{artist.name}</p>
                            </Wrapper>
                        </div>
                    ))}
                
                </div>
                <hr></hr>
                
                <div className="songs">
                    <h2>Songs</h2>
                    
                </div>
                <hr></hr>
                
                <div className="albums">
                    <h2>Albums</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default sidenav