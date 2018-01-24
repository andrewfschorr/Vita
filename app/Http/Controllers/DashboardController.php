<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
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

    public function editPage($page = 'home') {
        $page_model = \App\Page::where('user_id', \Auth::id())->where('name', $page)->firstOrFail();
        return view('dashboard', [
            config('constants.DATA_BS') => [
                'name' => \Auth::user()->name ?? null,
                'page' => $page
            ]
        ]);
    }
}
