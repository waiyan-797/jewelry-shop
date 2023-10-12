
const LeftNavbar = ()=>{

    let actives = document.querySelectorAll('.actives');
    console.log(actives)
    actives.forEach(active=>{
        actives.forEach(rmactive=>{
            rmactive.className ='text-gray-500 hover:text-gray-400 transition-all duration-75 pl-7 my-3 active';
        })
        active.addEventListener('click',function (e){
            e.preventDefault();
            active.className = 'text-gray-400 bg-blue-200 bg-opacity-5 border-l-4 border-l-blue-500 pl-7 py-3 my-3';
        })
    })

    return(
        <>
            <div>

                {/*START  LEFT NAV BAR*/}
                <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-screen bg-[#222e3c]'>
                    <div className="p-5">
                        <a href="/admin/dashboard" className="text-white hover:text-gray-400">
                            <h1>JEWELRY STORE</h1>
                        </a>
                    </div>
                    <div>
                        <p className='text-gray-400 text-sm pl-5'>page</p>
                        <div>
                            <ul>
                                <li className='text-gray-500 hover:text-gray-400 transition-all duration-75 pl-7 my-3 z'><a href="/admin/dashboard">Dashboard</a></li>
                                <li className="text-gray-400 bg-blue-200 bg-opacity-5 border-l-4 border-l-blue-500 pl-7 py-3 my-3"><a href="/profile">Profile</a></li>
                                <li className='text-gray-500 hover:text-gray-400 transition-all duration-75 pl-7 my-3 actives'><a href="#">Settings</a></li>
                                <li className='text-gray-500 hover:text-gray-400 transition-all duration-75 pl-7 my-3 actives'><a href="#">Role</a></li>
                                <li className='text-gray-500 hover:text-gray-400 transition-all duration-75 pl-7 my-3 actives'><a href="#">Product</a></li>


                            </ul>
                        </div>

                    </div>

                </div>
                {/*START  LEFT NAV BAR*/}
                {/*START BODY SECTION */}
                <div>

                </div>
                {/*END BODY SECTION */}
            </div>
            <div className="w-full overflow-x-hidden">
                <a className="dropdown-item" href=""
                   onClick={e=>{
                       e.preventDefault();
                       document.getElementById('logout-form').submit();
                   }}>
                    logout
                </a>
                <form id="logout-form" action="/logout" method="POST">
                  <h1><?php echo csrf_field() ?>git </h1>
                </form>
            </div>

        </>
    )

}

export default LeftNavbar;
