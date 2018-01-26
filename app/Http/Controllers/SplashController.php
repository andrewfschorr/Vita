<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;

class SplashController extends Controller
{

    public function subscribe()
    {
        $splash_url = config('constants.MAILCHIMP_SPLASH_URL');
        $user_email = request('email');
        $client = new Client();

        try {
            $result = $client->post($splash_url, [
                'auth' => ['catpoop', env('MAILCHIMP_API_KEY')],
                'json' => [
                    'email_address' => $user_email,
                    'status' => 'subscribed'
                ]
            ]);
        } catch(RequestException $e) {
            if ($e->hasResponse() && $e->getCode() === 400) {
                return response('Duplicate subscriber email', 400);
            }
            return response('Something went wrong', 500);
        }
    }
}
