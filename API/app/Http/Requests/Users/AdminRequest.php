<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class AdminRequest extends FormRequest
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
            'email' => 'required|string|unique:users',
            'password' => 'required|string||min:6|confirmed',
            'name' => 'required|string',
        ];
    }

    public function messages()
    {
        $messages = [
            'email.required' => 'กรุณากรอกอีเมล',
            'email.unique' => 'มีอีเมลนี้อยู่แล้ว',
            'password.required' => 'กรุณากรอกรหัสผ่าน',
            'password.min' => 'รหัสผ่านต้องมีความยาวอย่างน้อย :min ตัวอักษร',
            'password.confirmed' => 'รหัสผ่านไม่ตรงกัน',
            'name.required' => 'กรุณากรอกชื่อ นามสกุล',
            'name.string' => 'ชื่อ นามสกุลต้องเป็นตัวอักษรเท่านั้น',
        ];
        return $messages;
    }
}
