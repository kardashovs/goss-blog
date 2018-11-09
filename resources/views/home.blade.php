@extends('layouts.app')

@section('content')
<div class="container">
    @if (session('status'))
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">Уведомление</div>

                <div class="card-body">
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                </div>
            </div>
        </div>
    </div>
    @endif

    <div class="row justify-content-center ">
        <div class="col-md-12">
            <user-component></user-component>
        </div>
    </div>
    <div class="row justify-content-center py-4">
        <posts-component></posts-component>
    </div>
</div>
@endsection
