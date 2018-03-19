
config.noPageTitle = 2
# paget title control for regular pages
	
	page.headerData.10 = COA
	page.headerData.10 {
		10 = TEXT
		10.value = <title>
		
		20=TEXT
		20.field = tx_metaplus_absolute
		20.stdWrap.noTrimWrap = |||
		
		30=TEXT
		30.data = levelfield:-1, tx_metaplus_prefix, slide
		30.stdWrap.noTrimWrap = || |
		30.stdWrap.if.isFalse.field = tx_metaplus_absolute
		
		40=TEXT
		40.field = title
		40.stdWrap.noTrimWrap = |||
		40.stdWrap.if.isFalse.field = tx_metaplus_absolute
	
		50=TEXT
		50.data = levelfield:-1, tx_metaplus_sufix, slide
		50.stdWrap.noTrimWrap = | ||
		50.stdWrap.if.isFalse.field = tx_metaplus_absolute
		
		60=TEXT
		60.value=</title>
	}
# open graph image meta
	page {
    meta {
      og:image {
        attribute = property
        stdWrap.cObject = FILES
        stdWrap.cObject {
          references {
            table = pages
            uid.data = uid
            fieldName = tx_metaplus_ogimage
					}
	        begin = 0
	        maxItems = 1
	        renderObj = TEXT
	        renderObj {
            stdWrap.typolink {
              parameter.stdWrap {
                cObject = IMG_RESOURCE
                cObject {
                  file {
                    crop.data = file:current:crop
                    import.data = file:current:uid
                    treatIdAsReference = 1
                    maxW = 1024
                    quality = 90
                  }
                }
              }
              returnLast = url
              forceAbsoluteUrl = 1
						}
						required = 1
					}
				}
			}
	    og:image:width {
        attribute = property
        stdWrap.cObject = TEXT
        stdWrap.cObject.data = TSFE:lastImgResourceInfo|0
        stdWrap.if.isTrue.field = tx_metaplus_ogimage
	    }
	    og:image:height {
        attribute = property
        stdWrap.cObject = TEXT
        stdWrap.cObject.data = TSFE:lastImgResourceInfo|1
        stdWrap.if.isTrue.field = tx_metaplus_ogimage
	    }
	    og:image:type {
        attribute = property
        stdWrap.cObject = TEXT
        stdWrap.cObject {
          data = TSFE:lastImgResourceInfo|2
          stdWrap.wrap = image/|
          required = 1
        }
        stdWrap.if.isTrue.field = tx_metaplus_ogimage
	    }
	  }
	}

page.headerData.88090909 = FILES
page.headerData.88090909 {
  references.data = levelfield:-1,tx_metaplus_favicon,slide
  maxItems = 1
  renderObj = COA
	renderObj {
# Generics
		10 = TEXT
    10 {
      stdWrap.typolink {
        parameter.stdWrap {
          cObject = IMG_RESOURCE
          cObject {
            file {
              crop.data = file:current:crop
              import.data = file:current:uid
              treatIdAsReference = 1
              maxW = 32
            }
          }
        }
        returnLast = url
        forceAbsoluteUrl = 1
			}
			wrap = <link rel="icon" href="|" sizes="32x32">
			required = 1
		}
		20 < .10
		20.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 57
		20.wrap = <link rel="icon" type="image/png" href="|" sizes="57x57">
		30 < .10
		30.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 76
		30.wrap = <link rel="icon" type="image/png" href="|" sizes="76x76">
		40 < .10
		40.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 96
		40.wrap = <link rel="icon" type="image/png" href="|" sizes="96x96">
		50 < .10
		50.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 128
		50.wrap = <link rel="icon" type="image/png" href="|" sizes="128x128">
		60 < .10
		60.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 228
		60.wrap = <link rel="icon" type="image/png" href="|" sizes="228x228">
# Android
		70 < .10
		70.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 196
		70.wrap = <link rel="shortcut icon" sizes="196x196" href="|">
# iOS
		80 < .10
		80.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 120
		80.wrap = <link rel="apple-touch-icon" sizes="196x196" href="|">
		90 < .10
		90.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 152
		90.wrap = <link rel="apple-touch-icon" sizes="152x152" href="|">
		100 < .10
		100.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 180
		100.wrap = <link rel="apple-touch-icon" sizes="180x180" href="|">
		110 < .10
		110.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 70
		110.wrap = <meta name="msapplication-square70x70logo" content="|" />
		120 < .10
		120.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 150
		120.wrap = <meta name="msapplication-square150x150logo" content="|" />
		130 < .10
		130.stdWrap.typolink.parameter.stdWrap.cObject.file.maxW = 310
		130.wrap = <meta name="msapplication-square310x310logo" content="|" />
	}
}

# paget title control for news extension BE AWARE of htmlSpecialChars
	[globalVar = GP:tx_news_pi1|news > 0]
		newsTitle = RECORDS
		newsTitle {
			stdWrap.if.isTrue.data = GP:tx_news_pi1|news
      dontCheckPid = 1
      tables = tx_news_domain_model_news
      source.data = GP:tx_news_pi1|news
      source.intval = 1
      conf.tx_news_domain_model_news = TEXT
      conf.tx_news_domain_model_news {
        field = title
        htmlSpecialChars = 1
      }
		}
		page.headerData.10.40 < newsTitle
	[global]