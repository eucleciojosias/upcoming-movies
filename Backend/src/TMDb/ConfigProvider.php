<?php

declare(strict_types=1);

namespace TMDb;

/**
 * @author Euclécio Josias Rodrigues <eucjosias@gmail.com>
 */
class ConfigProvider
{
    public function __invoke() : array
    {
        return [
            'dependencies' => $this->getDependencies()
        ];
    }

    public function getDependencies() : array
    {
        return [
            'invokables' => [
            ],
            'factories'  => [
                Handler\UpComing::class => [Handler\UpComing::class, 'factory'],
                Handler\Genre::class => [Handler\Genre::class, 'factory'],
                Handler\Details::class => [Handler\Details::class, 'factory'],
            ],
        ];
    }
}
