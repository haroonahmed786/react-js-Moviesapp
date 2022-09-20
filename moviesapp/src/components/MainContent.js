import React  from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
const MainContent = () => {
    return (
        <>
        <div class="content-area">
            <LeftSide />
            <RightSide />

        </div>
        </>
    )
}
export default MainContent;