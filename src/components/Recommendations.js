import React from "react";
import ArtistComponent from "./Artist";

export default function RecommendationsComponent({ artists, username }) {
    return (
        <div>
            <h2>Recommendations for {username}</h2>
            <p>
                Thank you for using my service! If you have any suggestions,
                please contact me on{" "}
                <a className="link" href="https://twitter.com/dreamhopping">
                    Twitter
                </a>
                !
            </p>
            <div className="artistsContainer">
                {artists.map((artist) => (
                    <ArtistComponent artist={artist} key={artist.id} />
                ))}
            </div>
        </div>
    );
}