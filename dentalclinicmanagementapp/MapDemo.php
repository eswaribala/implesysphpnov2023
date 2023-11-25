<?php
require 'vendor/autoload.php';
use PhpCollection\Map;

$map = new Map(['foo' => 'bar', 'baz' => 'boo']);
$map->get('foo'); // Some('bar')
$map->get('foo')->get(); // string('bar')
var_dump($map->keys()); // ['foo', 'baz']
var_dump($map->values()); // ['bar', 'boo']
iterator_to_array($map); // ['foo' => 'bar', 'baz' => 'boo']

$map->first()->get(); // ['foo', 'bar']
$map->last()->get(); // ['baz', 'boo']

// Write Operations
$map = new Map();
$map->set('foo', 'bar');
$map->setAll(array('bar' => 'baz', 'baz' => 'boo'));
$map->remove('foo');

// Sort
$map->sortWith('strcmp');
