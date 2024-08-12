import React, { useState, useEffect } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import elonmusk from '../../public/images/elonmusk.png';
import { PiDotsThreeBold } from "react-icons/pi";
import { LuMessageCircle } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { IoMdBookmark } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

function RandomJokes() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random')
            .then(response => response.json())
            .then(data => {
                setData(data.data); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch user data');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const { content } = data;

    const commentsCount = Math.floor(Math.random() * 10000); 
    const retweetsCount = Math.floor(Math.random() * 10000);     
    const likesCount = Math.floor(Math.random() * 100000); 
    const bookmarksCount = Math.floor(Math.random() * 10000);

    return (
        <>
            <div className='bg-custom-image w-[100vw] h-[100vh] bg-no-repeat bg-cover flex justify-center items-center'>
                <div className='bg-black w-[524px] min-h-[274px] rounded-xl shadow-md p-4 pl-8'>
                    <div className='flex justify-between items-center text-white'>
                        <div className='flex justify-center items-center gap-5'>
                            <IoArrowBackOutline className='text-xl' />
                            <h2 className='font-bold'>Post</h2>
                        </div>
                        <PiDotsThreeBold />
                    </div>
                    <div className='flex mt-4 gap-4'>
                        <img src={elonmusk} alt="Elon Musk" />
                        <span>
                            <h2 className='text-white font-bold'>Elon Musk</h2>
                            <p className='text-gray-500'>@elonmusk</p>
                        </span>
                    </div>
                    <p className='text-white mt-5 font-sans'>{`${content}`}</p>
                    <div className='flex text-gray-600 gap-x-2 my-2'>
                        <p>11:18 PM</p>
                        <p>.</p>
                        <p>Jul 30, 2024</p>
                        <p>.</p>
                        <p className='text-white font-medium'>20.4M views</p>
                    </div>
                    <hr className='border-1 border-gray-400' />
                    <div className='text-gray-400 flex justify-around items-center py-2'>
                        <div className='flex justify-center items-center gap-2'>
                            <LuMessageCircle />
                            <p>{commentsCount.toLocaleString()}</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <FaRetweet />
                            <p>{retweetsCount.toLocaleString()}</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <IoMdHeart />
                            <p>{likesCount.toLocaleString()}</p>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <IoMdBookmark />
                            <p>{bookmarksCount.toLocaleString()}k</p>
                        </div>
                        <IoMdDownload />
                    </div>
                    <hr className='border-1 border-gray-400' />
                    <p className='text-center text-gray-600 mt-2'>@chai aur code</p>
                </div>
            </div>
        </>
    )
}

export default RandomJokes;
