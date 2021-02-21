<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all()->toArray();
        return array_reverse($customers);      
    }

    public function store(Request $request)
    {
        // return $request->all();
        // $customer = new Customer([
        //     'name' => $request->input('name'),
        //     'phone' => $request->input('phone'),
        //     'join_date' => $request->input('join_date'),
        //     'currency' => $request->input('currency'),
        //     'amount_paid' => $request->input('amount_paid'),
        //     'group' => $request->input('group'),
        //     'status' => $request->input('status')
        // ]);
        $customer = Customer::create($request->all());

        return response()->json($customer);
        // $customer->save();

        // return response()->json('Customer created!');
    }

    public function show($id)
    {
        $customer = Customer::find($id);
        return response()->json($customer);
    }

    public function update($id, Request $request)
    {
        $customer = Customer::find($id);
        $customer->update($request->all());

        return response()->json('Customer updated!');
    }

    public function destroy($id)
    {
        $customer = Customer::find($id);
        $customer->delete();

        return response()->json('Customer deleted!');
    }
}
