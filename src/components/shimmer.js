import React from 'react';

const Shimmer = () => {
    return (
        <div className="flex">
            <h1></h1>
            <div className="my-24 space-y-4 flex flex-wrap  justify-evenly">
            {[...Array(10)].map((_, containerIndex) => (
                <div key={containerIndex} className="h-56 w-56 bg-gray-300  mx-4 my-5 ">
                    {[...Array(10)].map((_, barIndex) => (
                        <div key={barIndex} className="shimmer h-full w-1/8 bg-white animate-pulse"></div>
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Shimmer;