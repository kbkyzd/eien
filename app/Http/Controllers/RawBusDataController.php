<?php

namespace eien\Http\Controllers;

use eien\Helpers\Cached;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;

class RawBusDataController extends Controller
{
    /**
     *
     * @param \Illuminate\Http\Request $request
     * @param \eien\Helpers\Cached $cached
     * @return mixed
     */
    public function view(Request $request, Cached $cached)
    {
        try {
            $fileName = $request->file;

            if ($request->busNo) {
                $fileName .= '/' . $request->busNo;
            }

            $data = $cached->retrieveBusRaw($fileName);

            return response($data)->header('Content-Type', 'application/json');
        } catch (FileNotFoundException $ex) {
            abort(404, 'File not found.');
        }

    }
}
