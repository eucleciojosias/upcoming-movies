<?php

declare(strict_types=1);

namespace App;

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
                TMDb\Getter::class => [TMDb\Getter::class, 'factory'],
            ],
        ];
    }
}
