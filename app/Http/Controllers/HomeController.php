<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function editPage($page) {
        $page_model = \App\Page::where('user_id', \Auth::id())->where('name', $page)->firstOrFail();
        return view('home', [
            'bootstrap' => [
                // fuckkkkk need the name
            ]
        ]);
    }
}
