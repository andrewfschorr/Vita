<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        DB::table('users')->insert([
            'email' => 'a@aol.com',
            'password' => bcrypt('abcd1234'),
        ]);

        DB::table('pages')->insert([
            'id' => 1,
            'user_id' => 1,
            'page_id' => 1,
            'name' => 'home',
        ]);
    }
}
