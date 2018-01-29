<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    // public $incrementing = false;

    // protected $primaryKey = ['id', 'user_id'];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function pages() {
        return $this->hasMany(Pages::class);
    }

    public function getUrlAttribute() {
        //Lower case everything
        $string = strtolower($this->name);
        //Make alphanumeric (removes all other characters)
        $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
        //Clean up multiple dashes or whitespaces
        $string = preg_replace("/[\s-]+/", " ", $string);
        //Convert whitespaces and underscore to dash
        $string = preg_replace("/[\s_]/", "-", $string);
        return $string;
    }

    public function getDisplayNameAttribute() {
        return ucwords(strtolower($this->name));
    }
}
