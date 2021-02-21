<?php

namespace App\Http\Controllers;

use App\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::all()->toArray();
        return array_reverse($transactions);      
    }

    public function store(Request $request)
    {
        
        $transaction = Transaction::create($request->all());

        return response()->json($transaction);
        
    }

    public function show($id)
    {
        $transaction = Transaction::find($id);
        return response()->json($transaction);
    }

    public function update($id, Request $request)
    {
        $transaction = Transaction::find($id);
        $transaction->update($request->all());

        return response()->json('Customer updated!');
    }

    public function destroy($id)
    {
        $transaction = Transaction::find($id);
        $transaction->delete();

        return response()->json('Customer deleted!');
    }
}
