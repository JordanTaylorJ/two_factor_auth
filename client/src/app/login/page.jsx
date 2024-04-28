'use client'
import React, {useState} from 'react';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [hidden, setHidden] = useState(true);

    const handleChange = (e) => {
        const target = e.target
        setFormData({...formData, [target.id]: target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT")
        /*
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((r) => {
            r.json.then(r => console.log(r))
        })
        */
    }

    return( 
        <main className="min-h-screen content-center">
        <div className='w-full max-w-xs'>
                <form onSubmit={e => handleSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            value={formData.email}
                            type="text" 
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <div className='flex'>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="password" 
                                value={formData.password}
                                type={hidden ? 'password' : 'text'} 
                                placeholder="Password"
                                onChange={(e) => handleChange(e)}
                            />
                            <svg onClick={() => setHidden(!hidden)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 m-2">
                               {hidden == true ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                }
                            </svg>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-black hover:bg-teal-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;