import React, {FC} from 'react';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu'


const MainPage: FC =() => {
    return (
        <>
        <TopBar />
        <div>
            <LeftMenu />
            <div>content</div>

        </div>
        </>
    )
    
}

export default MainPage