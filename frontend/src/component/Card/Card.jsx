import React from 'react';

function Card({ photo }) {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-5 bg-transparent p-4 rounded-b-lg border-t border-gray-200 hover:bg-black transition-colors duration-300">
                <a href="#">
                    {/* Larger height and width for the image container */}
                    <div className="w-full h-80 overflow-hidden rounded-t-lg">
                        <img
                            className="w-full h-full object-cover"
                            src={photo}
                            alt="img here"
                        />
                    </div>
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-400 dark:text-white mt-5 bg-transparent p-4 rounded-b-lg border-t border-gray-200 transition-colors duration-300">
                            Noteworthy trips 2025
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                        Here are the best trips of 2025 so far, in chronological order.
                    </p>
                    <div className="mt-4 ">
                        <a 
                            href="#" 
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                        >
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
