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
                'id' => $page->id,
            ];
        }

        return $pages;
    }

    public function addPage() {
        $page = new Page;
        $page->name = request('pageName');
        $page->user_id = \Auth::id();
        $page->save();
        return [
            'page' => $page->id,
        ];
    }

    public function updatePage(Request $request) {
        $page = Page::find($request->id);
        $page->name = $request->pageName;
        $page->save();
        return [
            'pageName' => $page->name,
        ];
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
