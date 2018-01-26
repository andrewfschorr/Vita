<?php

namespace App\Http\Controllers;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class SplashController extends Controller
{

    public function subscribe()
    {
        $splash_url = config('constants.MAILCHIMP_SPLASH_URL');
        $user_email = request('email');
        $client = new Client();
        $result = $client->post($splash_url, [
            'auth' => ['apikey', 'f394004223ed358a7cde6f3ab72c7be1'],
            'json' => [
                'email_address' => $user_email,
                'status' => 'subscribed'
            ]
        ]);
    }
}
