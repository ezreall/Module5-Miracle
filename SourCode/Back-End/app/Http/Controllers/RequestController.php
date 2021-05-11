<?php


namespace App\Http\Controllers;


use App\Http\Requests\CreateRequest;
use App\Http\Service\RequestService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RequestController
{
    protected $requestSer;

    public function __construct(RequestService $requestService)
    {
        $this->requestSer = $requestService;
    }

    function index(): \Illuminate\Http\JsonResponse
    {
        $requests = $this->requestSer->getAll();
        return response()->json($requests, 201);
    }
    function getMyRequest(): \Illuminate\Http\JsonResponse
    {
        $user_id = auth()->user()['id'];
        $request = $this->requestSer->getMyRequest($user_id);
        return response()->json($request);
    }

    function getMyOrder(): \Illuminate\Http\JsonResponse
    {
        $user_id = auth()->user()['id'];
        $request = $this->requestSer->getMyOrder($user_id);
        return response()->json($request);
    }

    function findById($id): \Illuminate\Http\JsonResponse
    {
        $request = $this->requestSer->findById($id);
        return response()->json($request);
    }

    function store(CreateRequest $request): \Illuminate\Http\JsonResponse
    {
        $user_id = auth()->user()['id'];
        $request = $this->requestSer->store($request->all(), $user_id);
        if ($request) {
            return response()->json([
                'status' => 'success'
            ]);
        } else {
            return response()->json([
                'status' => 'error'
            ]);
        }
    }

    function updateStatus(Request $request,$id): \Illuminate\Http\JsonResponse
    {

        try {
//            $user_id = auth()->user()['id'];
            $this->requestSer->update($id, $request);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
        return response()->json([
            'status' => 'success',
            'request_id'=>$id,
//            'status_id'=>$request['status_id']
        ]);
    }

    function delete($id): \Illuminate\Http\JsonResponse
    {
        try {
            $this->requestSer->delete($id);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 404);
        }
        return response()->json([
            'status' => 'success'
        ], 200);
    }

    function search(Request $request): \Illuminate\Http\JsonResponse
    {

        $request = $this->requestSer->search($request->all());
        return response()->json($request, 200);
    }
}
