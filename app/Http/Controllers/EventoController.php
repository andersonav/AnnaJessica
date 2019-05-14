<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Evento;
class EventoController extends Controller {

    public function __construct() {
        $this->middleware('auth');
    }

    public function pageEvento() {
        $eventos = Evento::join('apoio', 'id_apoio', '=', 'apoio_id_apoio')
                ->join('patrocinio', 'id_patrocinio', '=', 'patrocinio_id_patrocinio')
                ->join('realizacao', 'id_realizacao', '=', 'realizacao_id_realizacao')
                ->get();
        return view('admin.evento', compact('eventos'));
    }

}