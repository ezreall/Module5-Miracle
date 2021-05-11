<?php


namespace App\Http\Repositories;


use App\Models\Request;
use Illuminate\Support\Facades\DB;


class RequestRepository
{
    function getAll(){
        return Request::orderBy('id','DESC')->get();
    }

    function findById($id)
    {
        return Request::findOrFail($id);
    }

    function getMyRequest($id): \Illuminate\Support\Collection
    {
        return DB::table('requests')->where('user_id','=',$id)->get();
    }

    function getMyOrder($id)
    {
        return DB::table('requests')->join('request_statuses','requests.status_id','=','request_statuses.id')
            ->select('requests.*','request_statuses.name')
            ->where('provider_id', '=', $id)->get();
    }

    function getInstance()
    {
        return new Request();
    }

    function store($data)
    {
//        dd($data);
        return Request::create([
            'user_id'=>$data['user_id'],
            'provider_id'=>$data['provider_id'],
            'status_id'=>$data['status_id'],
            'message'=>$data['message'],
            'address'=>$data['address'],
            'start_time'=>$data['start_time'],
            'date'=>$data['date'],
            'time'=>$data['time'],
            'money_amount'=>$data['money_amount'],
        ]);
    }

    function update($data)
    {
        $data->update();

    }

    function delete($request)
    {
        $request->delete();
    }

    function search($search)
    {
        return Request::where('name','LIKE',"%$search%")->get();
    }
}

