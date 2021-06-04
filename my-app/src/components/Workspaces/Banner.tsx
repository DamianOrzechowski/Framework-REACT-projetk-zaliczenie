import {FC} from 'react';
import {WrapperBanner} from '../../styledHelpers/Workspaces'

export const Banner: FC =()=>{
    return(
        <WrapperBanner>
            <div className='TopBanner'>
                <p>Start working on corporate matters</p>
                <p>Hide</p>
            </div>
            <div className='BannerBox'>
                <div className='BannerOption'>
                    <img src="/media/entities.svg" />
                    <p className='BannerTopText'>Explore Your Entities</p>
                    <p className='BannerBottomText'>Take a few minutes to look at the most important elements and specificities of your entities</p>
                </div>
                <div className='BannerOption'>
                    <img src="/media/diagram.svg" />
                    <p className='BannerTopText'>Structure the ownership</p>
                    <p className='BannerBottomText'>Get a clear view of the ownership by looking at the relations between individuals and entities</p>
                </div>
                <div className='BannerOption'>
                    <img src="/media/calendar.svg" />
                    <p className='BannerTopText'>Define the calendar</p>
                    <p className='BannerBottomText'>Prepare future events by creating detailed plans around the life of your entity</p>
                </div>
            </div>

        </WrapperBanner>
        
    );
 };