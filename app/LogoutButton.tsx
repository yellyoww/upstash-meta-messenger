"use client";

export default function LogoutButton() {
    return (
        <button onClick={() => console.log('Logout')}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
            Sign Out
        </button>
    );
}