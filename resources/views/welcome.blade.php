
<!DOCTYPE html>
<html>
<head>

    <title>Laravel</title>
    @viteReactRefresh
    @vite([
        'resources/css/app.scss',
        'resources/js/app.jsx'
    ])

</head>
<body>

<div class="fixed top-0 z-30 bg-white w-full h-20 flex items-center justify-between">
    <div class="w-2/3">
        <ul class=" w-full ml-10 hidden lg:flex ">
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">RINGS</a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">BRACELETS</a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">EARRINGS</a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600"><a href="">NECKLACES</a></li>

        </ul>
    </div>
    <div class="w-1/3">
        <h2 class="text-4xl font-light">BLINGG</h2>
        <p class="py-1 tracking-wide">JEWELRY STORE</p>
    </div>
    <div class="w-1/3 flex justify-between">
        <ul class=" w-fullitems-center mr-10 hidden lg:flex ">
            <li><a href=""></a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"><a href="/">HOME</a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"><a href="/abouts">ABOUT</a></li>
            <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"><a href="/contacts">CONTACT</a></li>

            <div class="flex ">

                    @auth
                        @role('admin')

                        <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"> <a href="{{route('admin_dashboard')}}">Admin Dashboard</a></li>

                        <div>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                                         document.getElementById('logout-form').submit();">
                                logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf

                            </form>
                        </div>
                    @else
                        <a href="{{route('home')}}">profile</a>

                        <div>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                                         document.getElementById('logout-form').submit();">
                                logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf

                            </form>
                        </div>

                        @endrole
                    @else
                        <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"> <a href="{{route('login')}}">Login</a></li>
                        <li class="text-xl font-light mx-3 transition-all duration-100 hover:border-y-2 hover:border-amber-600 actives"> <a href="{{route('register')}}">Register</a></li>



                    @endauth





            </div>

        </ul>
    </div>


    <div class="mx-10">

        <button class="lg:hidden text-2xl hover:bg-gray-300 rounded-xl py-2 px-4">button</button>
    </div>

</div>

<div id="root"></div>
</body>
</html>
