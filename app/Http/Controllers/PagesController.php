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
        $user_id = \Auth::id();
        $page_name = request('pageName');

        $page_exists = \App\Page::where([
            ['user_id', '=', \Auth::id()],
            ['name', '=', $page_name],
        ])->first();

        if (isset($page_exists)) {
            return response()->json(['error' => 'Duplicate Entry'], 409);
        }
        $page = new Page;
        $page->name = request('pageName');
        $page->user_id = $user_id;


        $max_page_id = \App\Page::where('user_id', \Auth::id())->max('page_id');
        $page->page_id = $max_page_id + 1;
        $page->save();
        return [
            'page' => $page->page_id,
        ];
    }

    public function updatePage(Request $request) {
        $user_id = \Auth::id();
        $page_name = request('pageName');

        // TODO there has to be a better way than multiple ::where calls
        $page_exists = \App\Page::where([
            ['user_id', '=', $user_id],
            ['name', '=', $page_name],
        ])->first();
        if (isset($page_exists)) {
            return response()->json(['error' => 'Duplicate Entry'], 409);
        }

        $page = \App\Page::where([
            ['user_id', '=', \Auth::id()],
            ['page_id', '=', $request->id],
        ])->first();
        $page->name = $page_name;
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
        } catch (\Exception $e) {
            $errorCode = $e->errorInfo[1];
            if($errorCode == '1062'){
                return response()->json(['error' => 'Duplicate Entry'], 409);
            }
        }
        return response([
            'siteName' => $user->site_name,
        ]);
    }
}
