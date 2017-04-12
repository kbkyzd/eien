<?php

namespace eien\Http\Controllers;

use Base32\Base32;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Google2FA;

class TFAController extends Controller
{
    /**
     * @param Request $request
     */
    public function enable(Request $request)
    {
        $secret = $this->generateSecret();
        $user = $request->user();

        $user->twofa_secret = $secret;
        $user->save();

        $qrUri = Google2FA::getQRCodeInline('Eien',$user->username, $secret);

        return view('TFA.enable', ['image' => $qrUri, 'secret' => $secret]);
    }

    /**
     * @param Request $request
     */
    public function disable(Request $request)
    {
        $user = $request->user();
        $user->twofa_secret = null;
        $user->save();

        return view('TFA.disabled');
    }

    /**
     * @return string
     */
    public function generateSecret()
    {
        $randomBytes = random_bytes(10);

        return Base32::encode($randomBytes);
    }
}
