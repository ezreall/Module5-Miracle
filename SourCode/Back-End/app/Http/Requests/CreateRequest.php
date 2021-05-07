<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'start_time'=>'required',
            'time'=>'required',
            'date'=>'required',
            'address'=>'required',
        ];
    }

    function messages()
    {
        return [
            'start_time.required'=>'Thời gian bắt đầu không được để trống',
            'time.required'=>'Thời gian  không được để trống',
            'date.required'=>'Ngày bắt đầu không được để trống',
            'address.required'=>'Địa điểm  không được để trống',
        ];
    }
}
