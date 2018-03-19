<?php
$tempColumns = array(
	'tx_metaplus_absolute' => array(		
		'exclude' => 1,		
		'label' => 'LLL:EXT:metaplus/Resources/Private/Language/locallang_db.xml:tx_metaplus_absolute.title',		
		'config' => array(
			'type' => 'input',	
			'size' => '30',
		)
	),
	'tx_metaplus_prefix' => array(		
		'exclude' => 1,
		'label' => 'LLL:EXT:metaplus/Resources/Private/Language/locallang_db.xml:tx_metaplus_prefix.title',		
		'config' => array(
			'type' => 'input',	
			'size' => '30',
		)
	),
	'tx_metaplus_sufix' => array(		
		'exclude' => 1,		
		'label' => 'LLL:EXT:metaplus/Resources/Private/Language/locallang_db.xml:tx_metaplus_sufix.title',		
		'config' => array(
			'type' => 'input',	
			'size' => '30',
		)
	),
	'tx_metaplus_ogimage' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:metaplus/Resources/Private/Language/locallang_db.xml:tx_metaplus_ogimage.title',
		'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
			'tx_metaplus_ogimage',
			array(
				'appearance' => array(
          'headerThumbnail' => array(
          	'width' => '45',
						'height' => '30',
          ),
          'createNewRelationLinkTitle' => 'LLL:EXT:your_extension/Resources/Private/Language/locallang_db.xlf:tx_yourextension_db_table.add-images'
      	),
				'foreign_types' => array(
	        \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => array(
	          'showitem' => '
              --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
              --palette--;;filePalette
            '
	        ),
        ),
			),
			'jpg,jpeg,png,gif,tiff,bmp'
		)
	),
	'tx_metaplus_favicon' => array(
		'exclude' => 1,
		'label' => 'Favicon (min: 310 × 310 px)',
		'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
			'favicon',
			array(
				'appearance' => array(
	        'headerThumbnail' => array(
	        	'width' => '20',
						'height' => '20',
	        ),
	        'createNewRelationLinkTitle' => 'LLL:EXT:your_extension/Resources/Private/Language/locallang_db.xlf:tx_yourextension_db_table.add-images'
	    	),
				'foreign_types' => array(
	        '0' => array(
              'showitem' => '
                  --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                  --palette--;;filePalette'
          ),
        ),
			),
			'png'
		)
	),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages', $tempColumns, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
  'pages',
  '--palette--;Meta Plus;metaplus,',
  '1,4,7,3',
  'after:lastUpdated'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('pages_language_overlay', $tempColumns, 1);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
  'pages_language_overlay',
  '--palette--;Meta Plus;metaplus,',
  '1,4,7,3',
  'after:lastUpdated'
);

$GLOBALS['TCA']['pages']['palettes']['metaplus']['showitem'] = '
	tx_metaplus_absolute,
	--linebreak--,
	tx_metaplus_sufix,
	--linebreak--,
	tx_metaplus_prefix,
	--linebreak--,
	tx_metaplus_ogimage,
	--linebreak--,
	tx_metaplus_favicon
';