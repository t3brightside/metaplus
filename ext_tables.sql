#
# Table structure for table 'pages'
#
CREATE TABLE pages (
	tx_metaplus_absolute tinytext,
	tx_metaplus_prefix tinytext,
	tx_metaplus_sufix tinytext,
	tx_metaplus_ogimage int(11) unsigned DEFAULT '0',
	tx_metaplus_favicon int(11) unsigned DEFAULT '0'
);

CREATE TABLE pages_language_overlay (
	tx_metaplus_absolute tinytext,
	tx_metaplus_prefix tinytext,
	tx_metaplus_sufix tinytext,
	tx_metaplus_ogimage int(11) unsigned DEFAULT '0',
	tx_metaplus_favicon int(11) unsigned DEFAULT '0'
);