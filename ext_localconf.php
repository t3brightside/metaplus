<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}
$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
if($rootlinefields != '');
{
    $rootlinefields .= ' , ';
}

$rootlinefields .= 'tx_metaplus_absolute,tx_metaplus_prefix,tx_metaplus_sufix,tx_metaplus_favicon';

$TYPO3_CONF_VARS['FE']['pageOverlayFields'] .= ',tx_metaplus_absolute,tx_metaplus_prefix,tx_metaplus_sufix,tx_metaplus_favicon';