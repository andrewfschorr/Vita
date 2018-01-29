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

    public function home() {
        return view('dashboard', [
            config('constants.DATA_BS') => [
                'siteName' => \Auth::user()->site_name
            ]
        ]);
    }

    public function editPage($page_id) {
        $page = \App\Page::where([
            ['user_id', '=', \Auth::id()],
            ['page_id', '=', $page_id],
        ])->firstOrFail();
        return view('dashboard', [
            config('constants.DATA_BS') => [
                'page' => $page->name,
                'id' => $page_id,
            ]
        ]);
    }
}
