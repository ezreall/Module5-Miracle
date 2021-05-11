<?php


namespace App\Http\Service;


use App\Http\Repositories\RequestRepository;

class RequestService
{
    protected $requestRepo;
    const STATUS_ID =1;
    public function __construct(RequestRepository $requestRepository)
    {
        $this->requestRepo = $requestRepository;
    }

    function getAll(){
        return $this->requestRepo->getAll();
    }


    function getMyRequest($id): \Illuminate\Support\Collection
    {
        return $this->requestRepo->getMyRequest($id);
    }

    function getMyOrder($id)
    {

        return $this->requestRepo->getMyOrder($id);
    }

    function store($data,$user_id)
    {
        $data['user_id'] = $user_id;
        $data['status_id']= self::STATUS_ID;
        return $this->requestRepo->store($data);
    }


    function update($data, $id)
    {
        $request = $this->requestRepo->findById($id);
        dd($request);
        $request->status_id = $data['status_id'];

        $this->requestRepo->update($request);
    }

    function delete($id)
    {
        $category = $this->requestRepo->findById($id);
        $this->requestRepo->delete($category);
    }

    function search($search)
    {
//        print_r($search['name']);
        return $this->requestRepo->search($search['name']);
    }

}
