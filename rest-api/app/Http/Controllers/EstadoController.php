<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EstadoController extends Controller
{

    private $dataJson;

    public function __construct()
    {
        $rute = storage_path('app/National_Obesity_By_State.json');

        $content = file_get_contents($rute);
        $this->dataJson = json_decode($content, true);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $rute = storage_path('app/National_Obesity_By_State.json');

        // if (file_exists($rute)) {
        //     $content = file_get_contents($rute);
        //     $datas = json_decode($content, true);

        //     $estados = [];
        //     foreach ($datas['features'] as $estado) {
        //         $estados[] = [
        //             'nombre' => $estado['properties']['NAME'],
        //             'id' => $estado['properties']['FID'],
        //         ];
        //     }

        //     return $estados;
        // } else {
        //     return response('El archivo JSON no se encontró', 404);
        // }

        $estados = [];
        foreach ($this->dataJson['features'] as $estado) {
            $estados[] = [
                'nombre' => $estado['properties']['NAME'],
                'id' => $estado['properties']['FID'],
            ];
        }

        return $estados;
    }

    public function obtenerIndiceObesidad($name){

        // Obtener el índice de obesidad y área de un estado específico
        foreach ($this->dataJson['features'] as $estado) {
            if ($estado['properties']['NAME'] == $name) {
                $indiceObesidad = $estado['properties']['Obesity'];
                $area = $estado['properties']['SHAPE_Area'];
                return [
                    'indiceObesidad' => $indiceObesidad,
                    'area' => $area,
                ];
            }
        }

        return response('Estado no encontrado', 404);
    }

    public function resumenObesidad(){
        // Calcular el estado con mayor índice de obesidad
        $indiceMayorObesidad = collect($this->dataJson['features'])->max('properties.Obesity');
        $estadoMayorObesidad = collect($this->dataJson['features'])->firstWhere('properties.NAME', $indiceMayorObesidad);

        // Calcular el estado con menor índice de obesidad
        $indiceMenorObesidad = collect($this->dataJson['features'])->min('properties.Obesity');
        $estadoMenorObesidad = collect($this->dataJson['features'])->firstWhere('properties.NAME', $indiceMenorObesidad);

        // Calcular el índice de obesidad promedio del país
        $indicePromedio = collect($this->dataJson['features'])->avg('properties.Obesity');

        return [
            'estadoMayorObesidad' => ['estado' => $estadoMayorObesidad, 'indice' => $indiceMayorObesidad],
            'estadoMenorObesidad' => ['estado' => $estadoMenorObesidad, 'indice' => $indiceMenorObesidad],
            'indicePromedio' => $indicePromedio,
        ];
    }
}
