<?php

namespace exceptions;

class DOBException extends \Exception
{
    function message()
    {
        $errorMsg='This file'. $this->getFile().'having error at line'.$this->getLine().'Message='.$this->message();
        return $errorMsg;
    }

}