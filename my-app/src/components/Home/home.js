import React from "react";
import {SearchBtn, SearchE, StartBackground, StartContainer, StartContent, StartVideo} from './StylComponents';
import Background from '../../Assets/Video.mp4'

function Home(){
    return(
        <>
            <StartContainer>
                <StartBackground>
                    <StartVideo src={Background} autoPlay loop muted />
                </StartBackground>
             </StartContainer>
             <StartContent>
                <SearchE/>
                <SearchBtn>Search</SearchBtn>
             </StartContent>
        </>
    )
}
export default Home;
