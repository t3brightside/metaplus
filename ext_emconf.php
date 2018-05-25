<?php
	$EM_CONF[$_EXTKEY] = array (
		'title' => 'Meta Plus',
		'description' => 'Control over page title prefix and suffix, OpenGraph image and Favicon.',
		'category' => 'fe',
		'version' => '0.0.6',
		'state' => 'stable',
		'uploadfolder' => false,
		'createDirs' => '',
		'clearcacheonload' => true,
		'author' => 'Tanel Põld',
		'author_email' => 'tanel@brightside.ee',
		'author_company' => 'Brightside OÜ / t3brightside.com',
		'constraints' =>
			array (
				'depends' =>
				array (
					'typo3' => '8.7.0 - 9.9.99',
				),
				'conflicts' =>
				array (
				),
				'suggests' =>
				array (
				),
			),
		);
