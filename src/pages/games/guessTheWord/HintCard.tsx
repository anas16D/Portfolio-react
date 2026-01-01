import React, { useState } from 'react';
import { Hint } from './types';

interface HintCardProps {
    getHint?: (hint: Hint) => string;
    title?: string;
    hint: Hint;
}

const HintCard: React.FC<HintCardProps> = ({
    getHint,
    title = 'Show Hint',
    hint
}) => {
    const [showHint, setShowHint] = useState(false);

    return (
        <div
            onClick={() => {
                // if (!showHint) {
                //     getHint?.(hint);
                // }
                setShowHint(prev => !prev);
            }}
            className="
                w-full
                max-w-full sm:max-w-sm
                mx-2 sm:mx-auto
                my-3 sm:my-4

                rounded-lg
                border border-gray-200
                bg-white
                p-4 sm:p-5

                shadow-sm hover:shadow-md
                transition-shadow duration-200
                cursor-pointer
                active:scale-[0.98]
            "
        >
            {/* <div className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                {title}
            </div> */}

            {showHint ? (
                <div className="text-gray-700 mt-2 text-sm sm:text-base leading-relaxed">
                    {getHint ? getHint(hint) : hint.text}
                </div>
            ) : (
                <div className="text-gray-400 italic text-sm sm:text-base">
                    {hint.text}
                </div>
            )}
        </div>
    );
};

export default HintCard;
