import React from 'react';

const Blog = () => {
    
    return (
        <div className='sm:max-w-xl md:max-w-full lg:max-w-screen md:px-4 lg:px-8 lg:py-4 justify-center'>
            <div className='p-12  bg-slate-600  rounded'>
                <h1 className='text-3xl py-4'>Question: What Is The Purpose Of React Router?</h1>
                <p>ANS:React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
            </div>
            <div className='p-12  bg-slate-600 rounded'>
                <h1 className='text-3xl py-4'>Question: How Does ContextApi Works? </h1>
                <p>ANS:The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux</p>
            </div>
            <div className='p-12   bg-slate-600  rounded'>
                <h1 className='text-3xl py-4'>What Is useRef Hooks?</h1>
                <p>ANS:The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly</p>
            </div>
        </div>
    );
};

export default Blog;