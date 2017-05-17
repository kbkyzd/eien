<?php

namespace eien\Http\Controllers;

use Illuminate\Http\Request;
use ParagonIE\ConstantTime\Base32;
use PragmaRX\Google2FA\Vendor\Laravel\Facade as Google2FA;

class TFAController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function enable(Request $request)
    {
        $secret = $this->generateSecret();
        $user = $request->user();

        $user->twofa_secret = $secret;
        $user->save();

        $qrUri = Google2FA::getQRCodeInline('永遠', $user->email, $secret, 666);

        return view('TFA.enable', ['image' => $qrUri, 'secret' => $secret]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\View\View
     */
    public function disable(Request $request)
    {
        $user = $request->user();
        $user->twofa_secret = null;
        $user->save();

        return view('TFA.disable');
    }

    /**
     * Generate a secure secret with the constant time library.
     *
     * @return string
     */
    public function generateSecret()
    {
        $randomBytes = random_bytes(10);

        return Base32::encode($randomBytes);
    }
}
