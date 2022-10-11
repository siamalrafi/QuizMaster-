import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-black dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-extrabold pb-10 sm:text-4xl text-center">Some Important Questions for you.</h2>

                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none text-2xl focus-visible:ring-violet-400"> what is the purpose of the react router?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                                <br />
                                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none  text-2xl focus-visible:ring-violet-400">How does context API works ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                Context APIs are used to set the global data and this data can now be accessed in any of the children's components without the need to pass it through every parent component.
                                <br />
                                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none  text-2xl focus-visible:ring-violet-400">What is the React useRef Hook ?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                                This hook is used to access any DOM element in a component and it returns a mutable ref object which will be persisted as long as the component is placed in the DOM.
                                <br />
                                If we pass a ref object to any DOM element, then the .current property to the corresponding DOM node elements will be added whenever the node changes.
                                <br />
                                <i className='text-xl text-white'>  <b>Syntax :</b> const refContainer = useRef(initialValue);
                                </i>

                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;