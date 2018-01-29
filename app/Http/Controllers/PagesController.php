<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;

class PagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function userPages()
    {
        $pages = [];
        foreach (\Auth::user()->pages as $page) {
            $pages[] = [
                'name'=> $page->name,
                'url'=> $page->url,
                'display_name'=> $page->display_name,
                'id' => $page->page_id,
            ];
        }

        return $pages;
    }

    public function addPage() {
        $page = new Page;
        $page->name = request('pageName');
        $page->user_id = \Auth::id();
        $max_page_id = \App\Page::where('user_id', \Auth::id())->max('page_id');
        $page->page_id = $max_page_id + 1;
        $page->save();
        return [
            'page' => $page->page_id,
        ];
    }

    public function updatePage(Request $request) {
        $page = \App\Page::where([
            ['user_id', '=', \Auth::id()],
            ['page_id', '=', $request->id],
        ])->first();
        $page->name = $request->pageName;
        $page->save();
        return [
            'pageName' => $page->name,
        ];
    }

    public function deletePage(Request $request, $page)
    {
        $page = \App\Page::where([
            ['user_id', '=', \Auth::id()],
            ['page_id', '=', $page],
        ])->first();
        $page->delete();
    }

    /*
    * TODO Figure out where the fuck to put this method
    */
    public function storeSiteName()
    {
        $user = \Auth::user();
        $user->site_name = request('siteName');
        try {
            $user->save();
        } catch (Illuminate\Database\QueryException $e) {
            $errorCode = $e->errorInfo[1];
            if($errorCode == '1062'){
                return response('Duplicate entry', 400);
            }
        }
        return response([
            'siteName' => $user->site_name,
        ]);
    }
}
