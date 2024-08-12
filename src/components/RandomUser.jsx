import React, { useEffect, useState } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

function RandomUser() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')
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

    const { name, location, dob, picture, cell, login, registered, nat, phone } = data;

    return (
        <div  className='bg-black w-full min-h-[100vh] flex justify-center items-center gap-8'>
            <div className='flex flex-col gap-4 min-h-[610px] w-[360px] bg-[#B6B3F3] border-[8px] border-white rounded-xl p-4'>
                <div className='flex justify-between font-bold text-lg items-center'>
                    <IoArrowBackOutline />
                    <p>Profile Overview</p>
                    <IoIosRefresh className='cursor-pointer' onClick={() => window.location.reload()} />
                </div>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <div>
                        <p className='ml-20 bg-black text-white p-1 rounded-full'>{`${name.title}`}</p>
                        <img className='w-[100px] h-[100px] rounded-full shadow-md' src={picture.large} alt="Profile" />
                    </div>
                    <h2 className='font-normal text-2xl'>{`${name.title} ${name.first} ${name.last}`}</h2>
                    <p className='font-semibold'>@{login.username}</p>
                </div>
                <hr />
                <div className='flex justify-around items-center'>
                    <div className='flex gap-x-4 justify-center items-center'>
                        <FaLocationDot />
                        <a
                            className='transform-none cursor-pointer'
                            href={`https://www.google.com/maps?q=${location.coordinates.latitude},${location.coordinates.longitude}`}
                            target='_blank'
                        >Location</a>
                    </div>
                    <div className='flex gap-x-4 justify-center items-center'>
                        <IoMdCall />
                        <a href={`tel:${cell}`}>call me</a>
                    </div>
                </div>
                <hr />
                <div className='flex justify-start items-center w-full gap-2 font-DM-Sans text-[#000000] text-opacity-70'>
                    <div className='w-[60%]'>
                        <p>city</p>
                        <h2 className='text-base font-medium'>{`${location.city}`}</h2>
                        <p>date of birth</p>
                        <h2 className='text-base font-medium'>{`${new Date(dob.date).toLocaleDateString('en-GB',
                            {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                            }
                        )}`}</h2>
                        <p>Time zone</p>
                        <h2 className='text-base font-medium'>{`${location.timezone.offset}   (${location.timezone.description})`}</h2>
                    </div>
                    <div className='w-[40%]'>
                        <p>Nationality</p>
                        <h2 className='text-base font-medium'>{`${nat}`}</h2>
                        <p>Phone-no</p>
                        <h2 className='text-base font-medium'>{`${phone}`}</h2>
                        <p>Registered-since</p>
                        <h2 className='text-base font-medium'>{`${new Date(registered.date).toLocaleDateString('en-GB',
                            {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric',
                            }

                        )}`}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RandomUser;
