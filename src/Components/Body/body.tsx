import * as React from 'react';
import { Corrosal } from './BodyComponents/Corrosal';
import { CoursesCorrosal } from './BodyComponents/CoursesCorrosal';
import { ContactInfo } from './BodyComponents/ContactInfo';

export const Body:React.FC<{thisref:React.RefObject<HTMLDivElement>}> = ({thisref}) => {
    return <div ref={thisref}>
        <div>
            <Corrosal/>
        </div>
        <div>
            <CoursesCorrosal/>
        </div>
        <div>
            <ContactInfo/>
        </div>

    </div>
}