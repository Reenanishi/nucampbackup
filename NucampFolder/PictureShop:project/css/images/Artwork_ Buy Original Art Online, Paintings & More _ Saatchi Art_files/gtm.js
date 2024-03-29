
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"861",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subpagetype"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.pathname+location.search})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",4],
      "vtp_name":"page"
    },{
      "function":"__c",
      "vtp_value":"994728279"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return location.protocol+\"\/\/\"+location.hostname+location.pathname+location.search})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",9],
      "vtp_name":"originalLocation"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"User-Continent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var cookie=\"",["escape",["macro",11],7],"\";if(cookie=\"EU\")return\"true\";else return\"false\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"style"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subject"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"artist name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"artist id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"artwork title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"artwork id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sku"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"product type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sub product type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"artist country"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"subsubpagetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"collection"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"query",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagination"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"price range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sort"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"badges"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sacs"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=window.optimizely,d=a.activeExperiments,m=a.data.variations,e,f=\"\",h=a.data.state.redirectExperiment,b=0;b\u003Cd.length;b++){var c=d[b],g=a.variationIdsMap[c],l=a.variationMap[c],k=1\u003Cg.length;e=a.data.experiments[c].name;e=(k?\"MVT\":\"AB\")+\" Test: \"+e;if(k)for(l=a.data.sections,k=a.data.experiments[c].section_ids,b=0;b\u003Ck.length;b++)f=0==b?l[k[b]].name.toString()+\": \"+m[g[b]].name:f+(\", \"+l[k[b]].name.toString()+\": \"+m[g[b]].name);else f=(0===l?\"Control\":\"V\")+l+\": \"+a.variationNamesMap[c];\nif(0!==e.length\u0026\u00260!==f.length\u0026\u0026a.allExperiments[c].universal_analytics\u0026\u002630==a.allExperiments[c].universal_analytics.slot)return e+\": \"+f}if(void 0!==h){d=h.experimentId;f=a.variationIdsMap[d];b=a.variationMap[d];g=1\u003Cf.length;c=a.data.experiments[d].name;h=\"\";c=(g?\"MVT Redirect\":\"AB Redirect\")+\" Test: \"+c;if(g)for(g=a.data.sections,e=a.data.experiments[d].section_ids,b=0;b\u003Ce.length;b++)rGaValueArray=g[e[b]].name.toString()+\"Redirect: \"+m[f[b]].name;else h=(0===b?\"Control\":\"V\")+b+\" Redirect: \"+a.variationNamesMap[d];\nif(0!==c.length\u0026\u00260!==h.length\u0026\u0026a.allExperiments[d].universal_analytics\u0026\u002630==a.allExperiments[d].universal_analytics.slot)return c+\": \"+h}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"rbuid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return\"undefined\"!=typeof a?a.includes(\",C0004,\")?\"yes\":\"no\":\"no\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"original availability"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"saatchi_abtests"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"bxid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mpweb",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"offer_price"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_content",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"saatchi_preferred_locale"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"User-Country"
    },{
      "function":"__j",
      "vtp_name":"navigator.language"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"undefined\"!==typeof ",["escape",["macro",53],8,16],"?",["escape",["macro",53],8,16],":\"undefined\"!==typeof ",["escape",["macro",54],8,16],"?\"en-\"+",["escape",["macro",54],8,16],":",["escape",["macro",55],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"print editions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"prints material"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"prints price range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"prints size range"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orientation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"material"
    },{
      "function":"__c",
      "vtp_value":"UA-15756294-1"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",5]],["map","fieldName","location","value",["macro",10]],["map","fieldName","anonymizeIp","value",["macro",12]],["map","fieldName","userId","value",["macro",13]],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","cookieFlags","value","samesite=none;secure"]],
      "vtp_metric":["list",["map","index","1","metric",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",15]],["map","index","2","dimension",["macro",16]],["map","index","3","dimension",["macro",17]],["map","index","4","dimension",["macro",18]],["map","index","5","dimension",["macro",2]],["map","index","6","dimension",["macro",19]],["map","index","7","dimension",["macro",20]],["map","index","8","dimension",["macro",21]],["map","index","9","dimension",["macro",22]],["map","index","10","dimension",["macro",23]],["map","index","11","dimension",["macro",14]],["map","index","12","dimension",["macro",24]],["map","index","13","dimension",["macro",25]],["map","index","14","dimension",["macro",26]],["map","index","15","dimension",["macro",13]],["map","index","16","dimension",["macro",27]],["map","index","17","dimension",["macro",28]],["map","index","18","dimension",["macro",29]],["map","index","19","dimension",["macro",3]],["map","index","20","dimension",["macro",30]],["map","index","21","dimension",["macro",31]],["map","index","22","dimension",["macro",32]],["map","index","23","dimension",["macro",33]],["map","index","24","dimension",["macro",34]],["map","index","25","dimension",["macro",35]],["map","index","26","dimension",["macro",36]],["map","index","27","dimension",["macro",37]],["map","index","28","dimension",["macro",38]],["map","index","29","dimension",["macro",39]],["map","index","30","dimension",["macro",40]],["map","index","31","dimension",["macro",41]],["map","index","32","dimension",["macro",11]],["map","index","33","dimension",["macro",42]],["map","index","34","dimension",["macro",43]],["map","index","35","dimension",["macro",44]],["map","index","36","dimension",["macro",45]],["map","index","37","dimension",["macro",46]],["map","index","38","dimension","web"],["map","index","39","dimension","standard"],["map","index","40","dimension",["macro",47]],["map","index","41","dimension",["macro",48]],["map","index","42","dimension",["macro",49]],["map","index","43","dimension",["macro",50]],["map","index","44","dimension",["macro",51]],["map","index","45","dimension",["macro",52]],["map","index","46","dimension",["macro",56]],["map","index","47","dimension",["macro",57]],["map","index","48","dimension",["macro",58]],["map","index","49","dimension",["macro",59]],["map","index","50","dimension",["macro",60]],["map","index","51","dimension",["macro",61]],["map","index","52","dimension",["macro",62]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"prompt"
    },{
      "function":"__v",
      "vtp_name":"action",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"label"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info"
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",76],8,16],";return a=a.getAttribute(\"data-gtm-event\")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"CUSTOMER_EMAIL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",79],
      "vtp_name":"user email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",76],8,16],";return a=a.getAttribute(\"href\")})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"AMOUNT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ORDER_ID"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"paymentMethod"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"skus"
    },{
      "function":"__r"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"tester"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",76],8,16],";return a=a.getAttribute(\"data-gtm-info\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"photo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"custom url"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"error"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"budget"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",76],8,16],";return a=a.getAttribute(\"title\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"USD",
      "vtp_name":"ecommerce.purchase.actionField.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",103],
      "vtp_name":"ecommerce.currencyCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];for(i=0;i\u003C",["escape",["macro",105],8,16],".length;i++)google_ads_items_dict={},google_ads_items_dict.id=",["escape",["macro",105],8,16],"[i].id,google_ads_items_dict.quantity=",["escape",["macro",105],8,16],"[i].quantity,google_ads_items_dict.price=",["escape",["macro",105],8,16],"[i].price,a.push(google_ads_items_dict);return a})();"]
    },{
      "function":"__c",
      "vtp_value":"120942723"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[],a=",["escape",["macro",108],8,16],";if(a\u0026\u0026\"object\"===typeof a\u0026\u0026a.constructor===Array)for(var c in a)\"id\"in a[c]\u0026\u0026b.push(a[c].id);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=0,a=",["escape",["macro",108],8,16],";if(a\u0026\u0026\"object\"===typeof a\u0026\u0026a.constructor===Array)for(var c in a)\"price\"in a[c]\u0026\u0026(b+=parseFloat(a[c].price));return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"message"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"creative_id.creativeId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",13],8,16],".toString()})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"pdp_ab_test"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",115],
      "vtp_name":"experiment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"giftCardAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.remove.products.0.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.id"
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"vitals"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"campaign"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cjevent"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__c",
      "vtp_value":"8710"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"user_type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];for(i=0;i\u003C",["escape",["macro",135],8,16],".length;i++){automl_ecom_products_dict={};var a=",["escape",["macro",135],8,16],"[i].id;a=a.split(\"-\")[2].substring(1);automl_ecom_products_dict.id=a;automl_ecom_products_dict.quantity=",["escape",["macro",135],8,16],"[i].quantity;automl_ecom_products_dict.originalPrice=",["escape",["macro",135],8,16],"[i].price;automl_ecom_products_dict.displayPrice=",["escape",["macro",135],8,16],"[i].price;automl_ecom_products_dict.currencyCode=\"USD\";b.push(automl_ecom_products_dict)}return b})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"birt",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];for(i=0;i\u003C",["escape",["macro",138],8,16],".length;i++){automl_ecom_products_dict={};var a=",["escape",["macro",138],8,16],"[i].id;a=a.split(\"-\")[2].substring(1);automl_ecom_products_dict.id=a;automl_ecom_products_dict.originalPrice=",["escape",["macro",138],8,16],"[i].price;automl_ecom_products_dict.displayPrice=",["escape",["macro",138],8,16],"[i].price;automl_ecom_products_dict.currencyCode=\"USD\";b.push(automl_ecom_products_dict)}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];for(i=0;i\u003C",["escape",["macro",105],8,16],".length;i++){automl_ecom_products_dict={};var a=",["escape",["macro",105],8,16],"[i].id;a=a.split(\"-\")[2].substring(1);automl_ecom_products_dict.id=a;automl_ecom_products_dict.quantity=",["escape",["macro",105],8,16],"[i].quantity;automl_ecom_products_dict.originalPrice=",["escape",["macro",105],8,16],"[i].price;automl_ecom_products_dict.displayPrice=",["escape",["macro",105],8,16],"[i].price;automl_ecom_products_dict.currencyCode=\"USD\";b.push(automl_ecom_products_dict)}return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];for(i=0;i\u003C",["escape",["macro",108],8,16],".length;i++){automl_ecom_products_dict={};var a=",["escape",["macro",108],8,16],"[i].id;a=a.split(\"-\")[2].substring(1);automl_ecom_products_dict.id=a;automl_ecom_products_dict.quantity=",["escape",["macro",108],8,16],"[i].quantity;automl_ecom_products_dict.originalPrice=",["escape",["macro",108],8,16],"[i].price;automl_ecom_products_dict.displayPrice=",["escape",["macro",108],8,16],"[i].price;automl_ecom_products_dict.currencyCode=\"USD\";b.push(automl_ecom_products_dict)}return b})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_stripWww":false,
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm_vars.page_cat1",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return tc_vars})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=parseInt(",["escape",["macro",145],8,16],".order_amount_ati_with_sf.replace(\",\",\"\"),10).toFixed(2);return a})();"]
    },{
      "function":"__v",
      "vtp_name":"google_tag_params",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"984447492"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return tc_vars.page_cat1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm_vars.page_cat2",
      "vtp_dataLayerVersion":2
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=document.getElementsByTagName(\"iframe\"),b=a.length;b--;)if(\/youtube.com\\\/embed\/.test(a[b].src))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.getElementById(\"artAdvisoryForm\")){for(var b=document.getElementsByTagName(\"input\"),a,d=0,c=0;c\u003Cb.length;c++)\"text\"==b[c].getAttribute(\"type\")\u0026\u0026(a=b[c].getAttribute(\"name\"),a=document.forms.artAdvisoryForm[a].value,a.length=null===a||\"\"==a)\u0026\u0026(d+=1),console.log(\"count: \"+d);b=0==d?!0:!1;dataLayer.push({event:\"isFormValid\"})}return b})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"commerce_cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",76],8,16],";return a=a.getAttribute(\"title\")})();"]
    },{
      "function":"__c",
      "vtp_value":"SAATCH"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"mao",
      "vtp_name":"GOAL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"products"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"checkin_date"
    },{
      "function":"__j",
      "vtp_name":"screen.height"
    },{
      "function":"__j",
      "vtp_name":"screen.width"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"v1st"
    },{
      "function":"__j",
      "vtp_name":"dataLayer"
    },{
      "function":"__j",
      "vtp_name":"localStorage.kxkuid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"web",
      "vtp_name":"platform"
    },{
      "function":"__j",
      "vtp_name":"document.referrer"
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"inEU"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"castle secure"
    },{
      "function":"__c",
      "vtp_value":"3JP5S9rUZzF"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_result_object_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_result_position"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_result_query_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"search_index_name"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"User-Device-OS"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"User-Region"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.add.products.0.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",98],8,16],";return a=\"P1-\"+a.split(\"-\")[1]+\"-\"+a.split(\"-\")[2]+\"-T1\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.shipping"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.tax"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.discount"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":100,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/easel_api\/promo\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":267
    },{
      "function":"__html",
      "priority":7,
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{content_ids:[\"",["escape",["macro",23],7],"\"],content_type:\"product\",value:",["escape",["macro",14],8,16],",currency:\"USD\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Ciframe width=\"1\" height=\"1\" frameborder=\"0\" style=\"display:none\" src=\"https:\/\/d.agkn.com\/iframe\/10262\/?che=[cachebuster]\u0026amp;type=TOAFLP\"\u003E\u003C\/iframe\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":948
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "vtp_useCacheBuster":false,
      "vtp_url":"\/\/flex.msn.com\/mstag\/tag\/0d7f2458-5458-475f-909c-9d68d53f6b8d\/analytics.html?dedup=1\u0026domainId=3056531\u0026type=1\u0026actionid=246360",
      "tag_id":3
    },{
      "function":"__awct",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":"0.00",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",6],
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"PSv4CM3_zlkQ17Kp2gM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":76
    },{
      "function":"__ua",
      "metadata":["map"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Make an Offer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["template",["macro",65]," ",["macro",66]],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",65],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",67],
      "vtp_eventLabel":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Make an Offer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"MAO Offer Review Page",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":115
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":"Facebook",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":127
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":"Twitter",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":128
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":"Email",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":129
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",6],
      "vtp_conversionLabel":"eHNNCKH18ggQ17Kp2gM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":138
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",64],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":140
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",73],
      "vtp_eventCategory":["macro",71],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",72],
      "vtp_eventLabel":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":147
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":148
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":149
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Advisory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":158
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",81],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"Click Prints",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":162
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",83],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",84],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":172
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",71],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",72],
      "vtp_eventLabel":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":175
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":"Pinterest",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":179
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",85],
      "vtp_eventCategory":"Make an Offer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"Offer Confirmed",
      "vtp_eventLabel":["macro",86],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":180
    },{
      "function":"__ua",
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Make an Offer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"MAO Offer Page",
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":182
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Homepage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":187
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"view fullscreen",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":190
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Artist Profile",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":192
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"favorite",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"unfavorite",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":197
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"view in a room",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":198
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Browse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"favorite",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":199
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Browse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"unfavorite",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":200
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Browse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":201
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collection",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":202
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collection",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":203
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"virtual pageview",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":205
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"Payment Method",
      "vtp_eventLabel":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":220
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","\/\/www.bluecore.com\/api\/track\/purchase_pixel?token=saatchi_art\u0026email=",["escape",["macro",80],12],"\u0026total=",["escape",["macro",83],12],"\u0026order_id=",["escape",["macro",84],12],"\u0026product_ids=",["escape",["macro",89],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",90],
      "tag_id":232
    },{
      "function":"__img",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/www.bluecore.com\/api\/track\/purchase_pixel?token=saatchi_art\u0026email=",["escape",["macro",80],12],"\u0026total=",["escape",["macro",85],12],"\u0026order_id=",["escape",["macro",86],12],"\u0026product_ids=",["escape",["macro",23],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",90],
      "tag_id":233
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableUrlPassthrough":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":239
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Browse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":246
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",13],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":247
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":248
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template","photo:",["macro",94]," | custom url:",["macro",95]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":249
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":250
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",66],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":251
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Browse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":252
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",64],
      "vtp_dimension":["list",["map","index","39","dimension","virtual"]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":254
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"social share",
      "vtp_eventLabel":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":261
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":264
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",96],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template",["macro",97]," | ",["macro",98]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":268
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OnTheRise",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template",["macro",19]," ",["macro",20]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":271
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OnTheRise",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template",["macro",21]," ",["macro",22]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":272
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",99],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":275
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",100],
      "vtp_eventCategory":"Art Advisory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":276
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Advisory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":277
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Artist Profile",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["template",["macro",93],["macro",101]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":278
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_productReportingDataSource":"JSON",
      "vtp_awFeedCountry":"us",
      "vtp_orderId":["macro",84],
      "vtp_enableProductReporting":true,
      "vtp_discount":["macro",102],
      "vtp_awFeedLanguage":"en",
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",83],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",6],
      "vtp_currencyCode":["macro",104],
      "vtp_items":["macro",106],
      "vtp_awMerchantId":["macro",107],
      "vtp_conversionLabel":"CdoNCM2V8qUBENeyqdoD",
      "vtp_rdp":false,
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":284
    },{
      "function":"__sp",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",2]],["map","key","ecomm_prodid","value",["macro",23]],["map","key","ecomm_totalvalue","value",["macro",14]]],
      "vtp_conversionId":["macro",6],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_rdp":false,
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":287
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",2]],["map","key","ecomm_prodid","value",["macro",109]],["map","key","ecomm_totalvalue","value",["macro",110]]],
      "vtp_conversionId":["macro",6],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":288
    },{
      "function":"__awct",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",14],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":["macro",6],
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"lvXLCMHLiggQ17Kp2gM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":true,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":289
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["template",["macro",65]," impression"],
      "vtp_eventLabel":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":291
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Attentive",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":292
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Attentive",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":293
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",2],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",77],
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":294
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Advisory",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"art advisory trade form submitted",
      "vtp_eventLabel":["macro",80],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":297
    },{
      "function":"__bzi",
      "priority":0,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_id":"496962",
      "tag_id":298
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Marketing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",111],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":301
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",113],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":927
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Art Detail Page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":928
    },{
      "function":"__automl",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_automlApiKey":"AIzaSyAqA6773eXe7mk6isbmihe_TiXzPAF5FBo",
      "vtp_userEventDataSource":"DATA_LAYER",
      "vtp_automlApiVersion":"V1BETA1",
      "vtp_userEventOverwrites":["list",["map","field","userInfo.visitorId","value",["macro",38]],["map","field","userInfo.userId","value",["macro",114]]],
      "vtp_automlEventStoreId":"default_event_store",
      "vtp_automlProjectId":"401329479535",
      "vtp_automlCatalogId":"default_catalog",
      "tag_id":940
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Featured Stories",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":983
    },{
      "function":"__csm",
      "priority":0,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_clientId":"6036385",
      "tag_id":996
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1017
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",117],
      "vtp_eventCategory":"Gift Card",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1021
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",118],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["template",["macro",119]," | ",["macro",120]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1023
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",121],
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["template",["macro",65]," ",["macro",66]],
      "vtp_eventLabel":["template",["macro",122]," | ",["macro",123]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1029
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Scroll Depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"Scroll %",
      "vtp_eventLabel":["macro",124],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1040
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Artist Studio",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1070
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",126],
      "vtp_eventCategory":"Web Vitals",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",127],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1073
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":"delete account",
      "vtp_eventLabel":["macro",13],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1082
    },{
      "function":"__ua",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"BlueCore",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",64],
      "vtp_eventAction":["macro",65],
      "vtp_eventLabel":["macro",128],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":1085
    },{
      "function":"__cl",
      "tag_id":1086
    },{
      "function":"__cl",
      "tag_id":1087
    },{
      "function":"__cl",
      "tag_id":1088
    },{
      "function":"__cl",
      "tag_id":1089
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_232",
      "tag_id":1090
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_259",
      "tag_id":1091
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_260",
      "tag_id":1092
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_264",
      "tag_id":1093
    },{
      "function":"__cl",
      "tag_id":1094
    },{
      "function":"__cl",
      "tag_id":1095
    },{
      "function":"__cl",
      "tag_id":1096
    },{
      "function":"__cl",
      "tag_id":1097
    },{
      "function":"__cl",
      "tag_id":1098
    },{
      "function":"__cl",
      "tag_id":1099
    },{
      "function":"__cl",
      "tag_id":1100
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_384",
      "tag_id":1101
    },{
      "function":"__cl",
      "tag_id":1102
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_391",
      "tag_id":1103
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_548",
      "tag_id":1104
    },{
      "function":"__cl",
      "tag_id":1105
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_561",
      "tag_id":1106
    },{
      "function":"__cl",
      "tag_id":1107
    },{
      "function":"__cl",
      "tag_id":1108
    },{
      "function":"__cl",
      "tag_id":1109
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_638",
      "tag_id":1110
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_639",
      "tag_id":1111
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_640",
      "tag_id":1112
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_641",
      "tag_id":1113
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_739",
      "tag_id":1114
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_740",
      "tag_id":1115
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_741",
      "tag_id":1116
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_742",
      "tag_id":1117
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_743",
      "tag_id":1118
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_744",
      "tag_id":1119
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_745",
      "tag_id":1120
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_746",
      "tag_id":1121
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_850",
      "tag_id":1122
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"613142_851",
      "tag_id":1123
    },{
      "function":"__cl",
      "tag_id":1124
    },{
      "function":"__cl",
      "tag_id":1125
    },{
      "function":"__cl",
      "tag_id":1126
    },{
      "function":"__cl",
      "tag_id":1127
    },{
      "function":"__cl",
      "tag_id":1128
    },{
      "function":"__cl",
      "tag_id":1129
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"20, 50, 80, 100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"613142_1039",
      "vtp_enableTriggerStartOption":true,
      "tag_id":1130
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var e=\"\",f=\"\",a=0,d=0;for(i=0;i\u003CdataLayer.length;i++)if(\"ecommerce\"in dataLayer[i]\u0026\u0026\"purchase\"in dataLayer[i].ecommerce\u0026\u0026\"products\"in dataLayer[i].ecommerce.purchase)for(j=0;j\u003CdataLayer[i].ecommerce.purchase.products.length;j++){var c=dataLayer[i].ecommerce.purchase.products[j],g=(parseFloat(c.price)-parseFloat(c.discount)).toFixed(2);\"limited\"===c.variant?(a++,e+=\"\\x26ITEM\"+a+\"\\x3d\"+c.id+\"\\x26AMT\"+a+\"\\x3d\"+g+\"\\x26QTY\"+a+\"\\x3d\"+c.quantity):(d++,f+=\"\\x26ITEM\"+d+\"\\x3d\"+\nc.id+\"\\x26AMT\"+d+\"\\x3d\"+g+\"\\x26QTY\"+d+\"\\x3d\"+c.quantity)}0!==e.length\u0026\u0026(a=document.createElement(\"iframe\"),a.id=\"tc_iframe_226_1\",a.height=\"1\",a.width=\"1\",a.frameBorder=\"0\",a.scrolling=\"no\",a.src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d27472\\x26CID\\x3d1528072\\x26OID\\x3d\"+",["escape",["macro",84],8,16],"+\"\\x26TYPE\\x3d405956\"+e+\"\\x26CURRENCY\\x3dUSD\",\"undefined\"!==typeof ",["escape",["macro",129],8,16],"\u0026\u0026(a.src=b.src+\"\\x26CJEVENT\\x3d\"+",["escape",["macro",129],8,16],"),a.name=\"Saatchi - Limited\",a.style.position=\"absolute\",a.style.top=\n\"-99999px\",document.body.appendChild(a));if(0!==f.length){var b=document.createElement(\"iframe\");b.id=\"tc_iframe_226_2\";b.height=\"1\";b.width=\"1\";b.frameBorder=\"0\";b.scrolling=\"no\";b.src=\"https:\/\/www.emjcd.com\/tags\/c?containerTagId\\x3d27473\\x26CID\\x3d1528072\\x26OID\\x3d\"+",["escape",["macro",84],8,16],"+\"\\x26TYPE\\x3d405957\"+f+\"\\x26CURRENCY\\x3dUSD\";\"undefined\"!==typeof ",["escape",["macro",129],8,16],"\u0026\u0026(b.src=b.src+\"\\x26CJEVENT\\x3d\"+",["escape",["macro",129],8,16],");b.name=\"Saatchi - Original\";b.style.position=\"absolute\";b.style.top=\n\"-99999px\";document.body.appendChild(b)}},3500);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" defer\u003Evar _prum=[[\"id\",\"53c99f74abe53d7046cfea48\"],[\"mark\",\"firstbyte\",(new Date).getTime()]];(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.async=\"async\";a.src=\"\/\/rum-static.pingdom.net\/prum.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"FacebookSignup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,f,g,e){c[e]=c[e]||[];var h=function(){var b={ti:\"4018182\"};b.q=c[e];c[e]=new UET(b);c[e].push(\"pageLoad\")};var a=d.createElement(f);a.src=g;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(h(),a.onload=a.onreadystatechange=null)};d=d.getElementsByTagName(f)[0];d.parentNode.insertBefore(a,d)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "setup_tags":["list",["tag",151,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"checkout\",{value:",["escape",["macro",83],8,16],",currencyCode:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){(function(c,d,f,g,e){c[e]=c[e]||[];var h=function(){var b={ti:\"4034921\"};b.q=c[e];c[e]=new UET(b);c[e].push(\"pageLoad\")};var a=d.createElement(f);a.src=g;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(h(),a.onload=a.onreadystatechange=null)};d=d.getElementsByTagName(f)[0];d.parentNode.insertBefore(a,d)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\")},3500);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){(function(a,c,e,f,d,b){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:59940,hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\")},4E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":116
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/widget.trustpilot.com\/bootstrap\/v5\/tp.widget.sync.bootstrap.min.js\";b.appendChild(a)},5E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"dataProcessingOptions\",[]);fbq(\"init\",\"417670635278015\");fbq(\"track\",\"PageView\");fbq(\"init\",\"414511458745112\");\nfbq(\"track\",\"PageView\")},3E3);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){fbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:[\"",["escape",["macro",23],7],"\"],value:",["escape",["macro",14],8,16],",currency:\"USD\"})},3E3);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",151,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript defer type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"AddToCart\",{value:",["escape",["macro",14],8,16],",order_quantity:1,currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Lead\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":173
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"MakeAnOffer\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003Evar _prum=[[\"id\",\"59d5588bfbb0e6cb16d45eea\"],[\"mark\",\"firstbyte\",(new Date).getTime()]];(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.async=\"async\";a.src=\"\/\/rum-static.pingdom.net\/prum.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({originalLocation:document.location.protocol+\"\/\/\"+document.location.hostname+document.location.pathname+document.location.search});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",179,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var a=\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\/iPad\/.test(navigator.userAgent)?\"t\":\"d\";window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",132],8,16],"]},{event:\"setSiteType\",type:a},{event:\"setEmail\",email:\"\"},{event:\"viewHome\"},{event:\"flushEvents\"})},4500);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",179,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Ewindow.setTimeout(function(){var a=\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\/iPad\/.test(navigator.userAgent)?\"t\":\"d\";window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",132],8,16],"]},{event:\"setSiteType\",type:a},{event:\"setEmail\",email:\"\"},{event:\"viewItem\",product:",["escape",["macro",23],8,16],"},{event:\"flushEvents\"})},4500);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":223
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",179,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cart_items=[];for(i=0;i\u003CdataLayer.length;i++)if(\"ecommerce\"in dataLayer[i]\u0026\u0026\"checkout\"in dataLayer[i].ecommerce\u0026\u0026\"products\"in dataLayer[i].ecommerce.checkout)for(j=0;j\u003CdataLayer[i].ecommerce.checkout.products.length;j++){var product=dataLayer[i].ecommerce.checkout.products[j];cart_items.push({id:product.id,price:product.price,quantity:product.quantity})}var deviceType=\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\/iPad\/.test(navigator.userAgent)?\"t\":\"d\";\nwindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",132],8,16],"]},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"viewBasket\",item:cart_items},{event:\"flushEvents\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":224
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",179,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cart_items=[];for(i=0;i\u003CdataLayer.length;i++)if(\"ecommerce\"in dataLayer[i]\u0026\u0026\"purchase\"in dataLayer[i].ecommerce\u0026\u0026\"products\"in dataLayer[i].ecommerce.purchase)for(j=0;j\u003CdataLayer[i].ecommerce.purchase.products.length;j++){var product=dataLayer[i].ecommerce.purchase.products[j];cart_items.push({id:product.id,price:product.price,quantity:product.quantity})}var deviceType=\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\/iPad\/.test(navigator.userAgent)?\"t\":\"d\";\nwindow.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:[",["escape",["macro",132],8,16],"]},{event:\"setSiteType\",type:deviceType},{event:\"setEmail\",email:\"\"},{event:\"trackTransaction\",id:",["escape",["macro",84],8,16],",item:cart_items},{event:\"flushEvents\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var a=a||[];a.load=function(b){var c=document.createElement(\"script\");c.type=\"text\/javascript\";c.async=!0;c.src=(\"https:\"===document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"triggeredmail.appspot.com\/triggermail.js\/\"+b+\".js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(c,b)};a.load(\"saatchi_art\");window.triggermail=a},3500);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":227
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Econsole.log(\"OnetrustActiveGroups\\x3d",["escape",["macro",1],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":237
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var a=\/[\\?\u0026]cjevent=([^\u0026#]*)\/;if(a=(a=a.exec(location.search))\u0026\u0026a[1]?decodeURIComponent(a[1].replace(\/\\+\/g,\" \")):null){var b=new Date,c=b.getTime();c+=31536E6;b.setTime(c);document.cookie=\"cjevent\\x3d\"+a+\"; expires\\x3d\"+b.toGMTString()+\"; domain\\x3dsaatchiart.com; path\\x3d\/\"}},4500);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":245
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efor(i=0;i\u003CdataLayer.length;i++)if(\"ecommerce\"in dataLayer[i]\u0026\u0026\"purchase\"in dataLayer[i].ecommerce\u0026\u0026\"products\"in dataLayer[i].ecommerce.purchase)for(j=0;j\u003CdataLayer[i].ecommerce.purchase.products.length;j++)\"price\"in dataLayer[i].ecommerce.purchase.products[j]\u0026\u0026(dataLayer[i].ecommerce.purchase.products[j].item_price=dataLayer[i].ecommerce.purchase.products[j].price);fbq(\"track\",\"Purchase\",{value:",["escape",["macro",83],8,16],",currency:\"USD\",contents:",["escape",["macro",105],8,16],",content_type:\"product\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":253
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",135,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"EmailCapture\",{prompt:\"",["escape",["macro",66],7],"\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":256
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){!function(b){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var a=window.pintrk;a.queue=[];a.version=\"3.0\";a=document.createElement(\"script\");a.async=!0;a.src=b;b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(\"https:\/\/s.pinimg.com\/ct\/core.js\");pintrk(\"load\",\"2621290065784\",{em:\"\\x3cuser_email_address\\x3e\"});pintrk(\"page\")},2E3);\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/ct.pinterest.com\/v3\/?event=init\u0026amp;tid=2621290065784\u0026amp;pd[em]=\u0026lt;hashed_email_address\u0026gt;\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":257
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript defer type=\"text\/gtmscript\"\u003Epintrk(\"track\",\"lead\",{lead_type:\"Newsletter\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":258
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Clink rel=\"preconnect\" href=\"https:\/\/i17e31c00-ds-aksb-a.akamaihd.net\/\"\u003E\n\u003Clink rel=\"preconnect\" href=\"https:\/\/ds-aksb-a.akamaihd.net\/\"\u003E\n\u003Clink rel=\"preconnect\" href=\"https:\/\/eum.instana.io\/\"\u003E\n\u003Clink rel=\"preconnect\" href=\"https:\/\/storage.googleapis.com\/\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":259
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction getCookie(a){var c=document.cookie.split(\";\");return(c.find(function(b){return-1\u003Cb.search(a+\"\\x3d\")})||\"\").split(\"\\x3d\")[1]}function setCookie(a,c,b){if(a\u0026\u0026c){var d=new Date;d.setTime(d.getTime()+864E5*(b||7));b=d.toUTCString();a=a+\"\\x3d\"+c+\";expires\\x3d\"+b+\";path\\x3d\/;\";return document.cookie=a}return\"\"}function sessionCookieConverter(a,c){var b=getCookie(a);b\u0026\u0026setCookie(a,b,c);return\"\"}sessionCookieConverter(\"pdp_ab_test\",30);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":260
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/cdn.visii.com\/saatchiart.com\/va.js\";b.appendChild(a)},3E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":265
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightboxjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026A()})()}();e[q].lv=\"1\";return e[q]}var u=\"lightboxjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightboxlib=lightboxjs.require(\"lightboxlib\",\"\/\/www.lightboxcdn.com\/vendor\/650d9f8b-4817-49e0-91a0-ae9eba2beaf4\/lightbox.js?mb\\x3d\"+(new Date).getTime());\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":282
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){dataLayer.push({event:\"Attentive tag impression\"});__attentive_domain=\"saatchiart.attn.tv\";(function(){window.__attentive={invoked:!1,show:function(){this.invoked=!0}};var c=!1,a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))return void setTimeout(a,10);if(!c)return c=!0,void setTimeout(a,50);var b=document.createElement(\"script\");b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=\"https:\/\/cdn.attn.tv\/loader.js\";((document.getElementsByTagName(\"head\")||\n[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)};document.readyState\u0026\u0026\/loaded|complete\/.test(document.readyState)?a():window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();window.__attentive.show()},3E3);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":283
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(c,d,a){if(c\u0026\u0026d){var b=new Date;a=a?a:1;b.setTime(b.getTime()+864E5*a);a=window.location.host;a=a.replace(\/^www\\d?\\.\/,\"\");a=\"domain\\x3d.\"+a+\"; path\\x3d\/;\";b=\" expires\\x3d\"+b.toUTCString();document.cookie=c+\"\\x3d\"+d+\"; \"+a+b}return\"\"}setCookie(\"wgdpr\",",["escape",["macro",42],8,16],",1);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":295
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"purchase\",ecommerce:{purchase:{actionField:{id:\"T12345\",affiliation:\"Online Store TEST\",revenue:\"35.43\",tax:\"4.90\",shipping:\"5.99\",coupon:\"SUMMER_SALE\"},products:[{name:\"Triblend Android T-Shirt TEST\",id:\"TPS9129434\",price:\"15.25\",brand:\"lindseykaynichols\",category:\"home-decor\/TEST\",variant:\"Gray\",quantity:1,coupon:\"\"},{name:\"Donut Friday Scented T-Shirt\",id:\"TPS1001771\",price:\"33.75\",brand:\"Google\",category:\"home-decor\/tapestries\",variant:\"Black\",quantity:2}]}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":296
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"364520487780914\");fbq(\"track\",\"PageView\")},3E3);\u003C\/script\u003E\n\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" src=\"https:\/\/www.facebook.com\/tr?id=364520487780914\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":946
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){RB.track(\"view\")},3E3);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":952
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){RB.track(\"conv.purchase\",{order_id:",["escape",["macro",84],8,16],",revenue:",["escape",["macro",83],8,16],",products:JSON.stringify(",["escape",["macro",105],8,16],"),email:",["escape",["macro",80],8,16],",coupon:",["escape",["macro",102],8,16],"})},3E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":953
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){RB.track(\"conv.initiate_checkout\",{products:JSON.stringify(",["escape",["macro",108],8,16],")})},3E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":954
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ERB.track(\"conv.add_to_cart\",{products:JSON.stringify(",["escape",["macro",135],8,16],")});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":955
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({automl:{eventType:\"add-to-cart\",userInfo:{visitorId:",["escape",["macro",38],8,16],",userId:",["escape",["macro",114],8,16],"},productEventDetail:{productDetails:",["escape",["macro",136],8,16],"},eventDetail:{recommendationToken:",["escape",["macro",137],8,16],"}}});dataLayer.push({event:\"Recommendations AI\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":957
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({automl:{eventType:\"detail-page-view\",userInfo:{visitorId:",["escape",["macro",38],8,16],",userId:",["escape",["macro",114],8,16],"},productEventDetail:{productDetails:",["escape",["macro",139],8,16],"},eventDetail:{recommendationToken:",["escape",["macro",137],8,16],"}}});dataLayer.push({event:\"Recommendations AI\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":960
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({automl:{eventType:\"purchase-complete\",userInfo:{visitorId:",["escape",["macro",38],8,16],",userId:",["escape",["macro",114],8,16],"},productEventDetail:{productDetails:",["escape",["macro",140],8,16],",purchaseTransaction:{id:",["escape",["macro",84],8,16],",revenue:",["escape",["macro",83],8,16],",currencyCode:\"USD\"}}}});dataLayer.push({event:\"Recommendations AI\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":968
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({automl:{eventType:\"checkout-start\",userInfo:{visitorId:",["escape",["macro",38],8,16],",userId:",["escape",["macro",114],8,16],"},productEventDetail:{productDetails:",["escape",["macro",141],8,16],"}}});dataLayer.push({event:\"Recommendations AI\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":969
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer=dataLayer||[];dataLayer.push({automl:{eventType:\"home-page-view\",userInfo:{visitorId:",["escape",["macro",38],8,16],",userId:",["escape",["macro",114],8,16],"}}});dataLayer.push({event:\"Recommendations AI\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":974
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003ERB.track(\"conv.art_advisor_sign_up\",{email:",["escape",["macro",80],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":976
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){RB.track(\"conv.bid_for_art\",{email:",["escape",["macro",80],8,16],"})},3E3);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":977
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){(function(c,a){if(!window.RB){window.RB=a;a.queue=a.queue||[];a.track=a.track||function(){a.queue.push(Array.prototype.slice.call(arguments))};a.initialize=function(d){a.source=d};var b=c.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/iedx0r.saatchiart.com\/assets\/wxyz.rb.js\";f=c.getElementsByTagName(\"script\")[0];f.parentNode.insertBefore(b,f)}})(document,window.RB||{});RB.disablePushState=!0;RB.initialize(\"c2FhdGNoaV9hcnR8dmlld3xwdXJjaGFzZXxzaWdudXB8bG9naW4\\x3d\")},\n3E3);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":979
    },{
      "function":"__html",
      "priority":0,
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript src=\"https:\/\/cdn.cookielaw.org\/scripttemplates\/otSDKStub.js\" type=\"text\/javascript\" charset=\"UTF-8\" data-domain-script=\"536cfea5-745c-440c-a827-78c7154652e1\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Efunction OptanonWrapper(){window.setTimeout(function(){window.dataLayer.push({event:\"OneTrustGroupsUpdated\"})},2E3)};\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":997
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003ERB.track(\"conv.create_account\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1015
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "setup_tags":["list",["tag",172,0]],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){RB.track(\"identify\",{email:",["escape",["macro",80],8,16],",external_id:",["escape",["macro",13],8,16],"})},3E3);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1027
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/js.b1js.com\/tagcontainer.js?id\\x3da24a1c986f2b43608ab146061153b340\\x26type\\x3d1\\x26onload\\x3dfalse\";b.appendChild(a)},4E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1032
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/js.b1js.com\/tagcontainer.js?id=a24a1c986f2b43608ab146061153b340\u0026amp;type=0\u0026amp;onload=false\u0026amp;order_id=",["escape",["macro",86],12],"\u0026amp;value=",["escape",["macro",85],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1033
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/js.b1js.com\/tagcontainer.js?id=a24a1c986f2b43608ab146061153b340\u0026amp;type=0\u0026amp;onload=false\u0026amp;order_id=",["escape",["macro",86],12],"\u0026amp;value=",["escape",["macro",85],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1034
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.setTimeout(function(){var b=document.getElementsByTagName(\"head\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/static.criteo.net\/js\/ld\/ld.js\";b.appendChild(a)},4E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":230
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"addToCart"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":",C0004,"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".+"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"offer"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"offerConfirmation"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"\/616611\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"MAO Start"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"MAO See Final Price"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"youtubeTracking"
    },{
      "function":"_sw",
      "arg0":["macro",69],
      "arg1":"\/art\/offer\/review"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"fa fa-facebook"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"fa fa-twitter"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"fa fa-envelope"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory brief submitted"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"^\\\/(ops\\\/|ops$|admin)"
    },{
      "function":"_re",
      "arg0":["macro",71],
      "arg1":"^(undefined|null|0|false|NaN|)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",72],
      "arg1":"^(undefined|null|0|false|NaN|)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"generic"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"artDetail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"favorite success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"add additional image success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"view in a room"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"view fullscreen"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"favorite"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"unfavorite"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"prints tab"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"add or edit images"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"make an offer"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"see more like this"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"multiple images - .*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"close fullscreen"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Web AR"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"Connect With Facebook"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_232($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory brief success"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"nav header"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_259($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"nav footer"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_260($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",82],
      "arg1":"tab-prints"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_264($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",72],
      "arg1":"artwork update"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"artwork update"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"fa fa-pinterest"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"\/art\/offer\/[0-9]+\/[0-9]+",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"hero cms"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"hero holiday"
    },{
      "function":"_css",
      "arg0":["macro",87],
      "arg1":"a[data-gtm-event=\"view fullscreen\"]\u003E*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"userProfile"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"follow success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"follow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"unfollow"
    },{
      "function":"_css",
      "arg0":["macro",87],
      "arg1":"a[data-gtm-event=\"favorite\"]\u003E*"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"unfavorite"
    },{
      "function":"_css",
      "arg0":["macro",87],
      "arg1":"a[data-gtm-event=\"view in a room\"]\u003E*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"browse"
    },{
      "function":"_css",
      "arg0":["macro",87],
      "arg1":"a[data-gtm-event=\"unfavorite\"]\u003E*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"collection"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"add to a collection"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_384($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"favorite"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_391($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pageview"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"selectPaymentMethod"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"dev.saatchiart.com"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"qa.saatchiart.com"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"xqa|xdev|local|qa"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"art\/offer\/confirmation\/"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"AL|AT|BE|BG|HR|CY|CZ|DK|EE|FI|FR|DE|GR|HU|IS|IE|IT|LV|LI|LT|LU|MT|NL|NO|PL|PT|RO|RS|SK|SI|ES|SE|UA|GB"
    },{
      "function":"_eq",
      "arg0":["macro",91],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":"(\\\/876391\\\/|test|\\\/lighthouse)"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"filter"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_548($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"facebook authentication success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registration success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"login success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"upload art success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registration type"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registration photo"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"facebook authentication"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"forgot password"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_561($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"registration start"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"login start"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"upload art"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"newsletter signup success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"filter"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"Facebook"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_638($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"Twitter"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_639($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"Pinterest"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_640($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"Email"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_641($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"badge"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"mao"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"mao resale"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"OnTheRise"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"profile"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"portfolio"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"unfollow success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"artwork"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"facebook authentication error"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"registration error"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"login error"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory orientations"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory start"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory categories"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory styles"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory artworks"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory sizes"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory budget success"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory budget fail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory skip"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory brief fail"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art advisory profile form"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"recent activity artwork"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_739($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"recent activity profile"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_740($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"artworks"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_741($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"collections"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_742($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"favorites"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_743($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"followers"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_744($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"following"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_745($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"social icon"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_746($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",69],
      "arg1":"\/checkout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"checkout"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Attentive tag impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp_tactic_cart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp tactic cart impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Attentive Impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Attentive Click"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"like"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_850($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",77],
      "arg1":"dislike"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_851($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"art-advisory-submitted"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"promobar_coupon"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp carousel more from"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp carousel related"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp carousel top mini"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"pdp carousel top mini impression"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Recommendations AI"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"tile [1,2,3,4,5]"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gift card purchase"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gift card applied"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"removeFromCart"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"PDP addToCart"
    },{
      "function":"_cn",
      "arg0":["macro",92],
      "arg1":"lighthouse"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",78],
      "arg1":"(^$|((^|,)613142_1039($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"start create artwork"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"complete create artwork"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"start create product"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"complete create product"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"start edit artwork"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"complete edit artwork"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"web vitals FID"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"web vitals CLS"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"web vitals LCP"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"web vitals FCP"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"web vitals TTFB"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"delete account"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"BlueCore.*"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"signupFaceBook"
    },{
      "function":"_cn",
      "arg0":["macro",92],
      "arg1":"offer"
    },{
      "function":"_cn",
      "arg0":["macro",130],
      "arg1":"submit"
    },{
      "function":"_sw",
      "arg0":["macro",69],
      "arg1":"\/artworkavailability"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"\/checkout\/confirmation"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"\/collections\/browse"
    },{
      "function":"_cn",
      "arg0":["macro",27],
      "arg1":"Artist"
    },{
      "function":"_sw",
      "arg0":["macro",69],
      "arg1":"\/print\/"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"artdetail",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",131],
      "arg1":"Error - Saatchi Art"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":"http(s)?:\\\/\\\/(www|limited).saatchiart.com(\\\/\\?.*|$|\\\/$)"
    },{
      "function":"_re",
      "arg0":["macro",122],
      "arg1":"^(undefined|null|0|false|NaN|)$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"artDetail"
    },{
      "function":"_cn",
      "arg0":["macro",116],
      "arg1":"new"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"\/aa-collection\/art-collection"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"^\\\/(lighthouse|admin|testpage|artadvisory|trade|whysell|upload|testimonials|loyalty|press|terms|privacy|copyright|\\?webview|authentication|art\\\/offer|theotherartfair|checkout\\\/confirmation|checkout\\\/review|checkout\\\/confirmation|checkout\\\/shipping|accounts|resale|art\\\/.+\\\/view|all|paintings|photography|sculpture|drawings|collage|new\\-media|installation|prints|printmaking|art\\-collection|account\\\/artworks|\\?|$)"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"\/artadvisory"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"\/authentication"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"\/resale\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",54],
      "arg1":"US"
    },{
      "function":"_cn",
      "arg0":["macro",133],
      "arg1":"artist"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"userLoaded"
    },{
      "function":"_re",
      "arg0":["macro",69],
      "arg1":"^\\\/(ops\\\/|ops$|admi)"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"test transaction"
    },{
      "function":"_re",
      "arg0":["macro",92],
      "arg1":"https\\:\\\/\\\/www\\.saatchiart\\.com\\\/theotherartfair(\\?|\\\/$|\\\/?|\\\/.+2020)|https\\:\\\/\\\/www\\.saatchiart\\.com\\\/studios\\\/theotherartfair(\\?|\\\/$|\\\/?|london|sydney|bombaysapphire)"
    },{
      "function":"_eq",
      "arg0":["macro",134],
      "arg1":"1"
    },{
      "function":"_eq",
      "arg0":["macro",121],
      "arg1":"0"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"AL|AT|BE|BG|HR|CY|CZ|DK|EE|FI|FR|DE|GR|HU|IS|IE|IT|LV|LI|LT|LU|MT|NL|NO|PL|PT|RO|RS|SK|SI|ES|SE|UA"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"xdev|local"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"get_gtm_vars"
    }],
  "rules":[
    [["if",0],["add",3,50,60,1,137,155,164]],
    [["if",3,4,6],["unless",5],["add",4,22,133,139,171]],
    [["if",7],["add",5]],
    [["if",8],["add",5]],
    [["if",9],["add",6]],
    [["if",6,10],["add",7]],
    [["if",11,12],["add",8]],
    [["if",12,13],["add",9]],
    [["if",12,14],["add",10]],
    [["if",15],["add",11,16,138,170]],
    [["if",16],["add",12,58,128,132,134,146,151,161,176]],
    [["if",20],["unless",18,19],["add",13]],
    [["if",21,22],["add",14]],
    [["if",23],["add",14]],
    [["if",21,24],["add",14]],
    [["if",21,25],["add",14]],
    [["if",21,26],["add",14,155]],
    [["if",21,27],["add",14]],
    [["if",21,28],["add",14]],
    [["if",21,29],["add",14]],
    [["if",21,30],["add",14,155]],
    [["if",21,31],["add",14,155]],
    [["if",21,32],["add",14]],
    [["if",21,33],["add",14],["block",142]],
    [["if",21,34],["add",14]],
    [["if",35,36,37],["add",15]],
    [["if",38],["add",16]],
    [["if",36,39,40],["add",17]],
    [["if",36,41,42],["add",17]],
    [["if",36,43,44],["add",18]],
    [["if",45],["add",19,162]],
    [["if",46,47],["add",20]],
    [["if",12,48],["add",21]],
    [["if",6,49],["add",23]],
    [["if",12,50],["add",24]],
    [["if",12,51],["add",24]],
    [["if",12,21,52],["add",25,155]],
    [["if",53,54],["add",26]],
    [["if",53,55],["add",26,155]],
    [["if",53,56],["add",26]],
    [["if",12,21,57],["add",27]],
    [["if",12,21,58],["add",28]],
    [["if",12,21,59],["add",29,155]],
    [["if",26,60],["add",30,155]],
    [["if",12,60,61],["add",31,155]],
    [["if",22,60],["add",32]],
    [["if",22,62],["add",33]],
    [["if",36,63,64],["add",34,155]],
    [["if",36,62,65,66],["add",34]],
    [["if",67],["add",35,47]],
    [["if",68],["add",36]],
    [["if",45],["unless",69,70],["add",37,57,127,131,145,149,155,167,177]],
    [["if",6,73],["add",38,178]],
    [["if",6],["add",39,140,141,148,153,0,172,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125]],
    [["if",36,77,78],["add",40]],
    [["if",79],["add",41]],
    [["if",80],["add",41,174]],
    [["if",81],["add",41]],
    [["if",82],["add",41]],
    [["if",83],["add",42]],
    [["if",84],["add",43]],
    [["if",12,85],["add",44]],
    [["if",36,86,87],["add",44]],
    [["if",12,88],["add",44]],
    [["if",12,89],["add",44]],
    [["if",12,90],["add",44]],
    [["if",91],["add",45,150,152]],
    [["if",92],["add",46]],
    [["if",36,93,94],["add",48]],
    [["if",36,95,96],["add",48]],
    [["if",36,97,98],["add",48]],
    [["if",36,99,100],["add",48]],
    [["if",21,101],["add",49]],
    [["if",21,102],["add",49]],
    [["if",21,103],["add",49]],
    [["if",104,105],["add",51]],
    [["if",104,106],["add",51]],
    [["if",55,104],["add",51]],
    [["if",54,104],["add",51]],
    [["if",56,104],["add",51]],
    [["if",104,107],["add",51]],
    [["if",104,108],["add",52]],
    [["if",109],["add",53]],
    [["if",110],["add",53]],
    [["if",111],["add",53]],
    [["if",112],["add",54]],
    [["if",113],["add",54]],
    [["if",114],["add",54]],
    [["if",115],["add",54]],
    [["if",116],["add",54]],
    [["if",117],["add",54]],
    [["if",118],["add",54]],
    [["if",119],["add",54]],
    [["if",120],["add",54]],
    [["if",121],["add",54]],
    [["if",122],["add",55]],
    [["if",36,53,123,124],["add",56]],
    [["if",36,53,125,126],["add",56]],
    [["if",36,53,127,128],["add",56]],
    [["if",36,53,129,130],["add",56]],
    [["if",36,53,131,132],["add",56]],
    [["if",36,53,133,134],["add",56]],
    [["if",36,53,135,136],["add",56]],
    [["if",36,53,137,138],["add",56]],
    [["if",140],["add",59,155]],
    [["if",141],["add",61]],
    [["if",142],["add",61]],
    [["if",143],["add",61]],
    [["if",144],["add",62]],
    [["if",145],["add",63]],
    [["if",36,146,147],["add",64]],
    [["if",36,148,149],["add",64]],
    [["if",150],["add",65,170]],
    [["if",151],["unless",17],["add",66,72]],
    [["if",152],["add",67]],
    [["if",153],["add",68]],
    [["if",154],["add",68]],
    [["if",155],["add",68]],
    [["if",156],["add",69]],
    [["if",157],["add",70]],
    [["if",158],["add",71]],
    [["if",159],["add",73,147,158]],
    [["if",160],["add",74]],
    [["if",161],["add",74]],
    [["if",162],["add",75]],
    [["if",163],["add",76,165]],
    [["if",165,166],["unless",164],["add",77]],
    [["if",167],["add",78]],
    [["if",168],["add",78]],
    [["if",169],["add",78]],
    [["if",170],["add",78]],
    [["if",171],["add",78]],
    [["if",172],["add",78]],
    [["if",173],["add",79]],
    [["if",174],["add",79]],
    [["if",175],["add",79]],
    [["if",176],["add",79]],
    [["if",177],["add",79]],
    [["if",178],["add",80]],
    [["if",179],["add",81]],
    [["if",151],["add",126]],
    [["if",180],["add",129]],
    [["if",12,181,182],["add",130,155]],
    [["if",6,184],["add",133]],
    [["if",6,185],["add",133]],
    [["if",1,159],["add",135]],
    [["if",16,187],["add",136]],
    [["if",16,188],["add",136]],
    [["if",16,190],["add",142,160,2]],
    [["if",16],["unless",191],["add",143]],
    [["if",16,139],["add",144],["block",156,58,156]],
    [["if",6,188],["add",154,155]],
    [["if",6,60],["add",155]],
    [["if",16,74],["add",156]],
    [["if",199,201],["unless",200],["add",157]],
    [["if",72,199],["unless",200],["add",157]],
    [["if",203],["add",159]],
    [["if",16,204],["add",160,2]],
    [["if",140,205],["add",163,168]],
    [["if",188,201],["unless",206],["add",166]],
    [["if",190,201],["add",169]],
    [["if",6,207],["add",173]],
    [["if",209],["unless",208],["add",175]],
    [["if",2],["unless",1],["block",3,16,37,59,65,127,129,1,131,137,138,145,149,150,152,155]],
    [["if",16,17],["block",12,58,132,134,146,151,156,161,176]],
    [["if",71,72],["block",37,38,127,138,155,157]],
    [["if",6,74],["unless",1],["block",38,133,139,140,148,178]],
    [["if",6,75],["block",39]],
    [["if",6,76],["block",39,133,140,141,148,153,172,173]],
    [["if",16,74],["unless",1],["block",58,128,132,134,136,142,143,144,146,151,160,2,176,177]],
    [["if",16,76],["block",58,128,132,134,136,142,143,146,151,2,161,176]],
    [["if",72,76],["block",73,79,135,157,175]],
    [["if",16,183],["block",132,134]],
    [["if",6,186],["block",133]],
    [["if",16,189],["block",136]],
    [["if",16,192,193],["block",143]],
    [["if",16,75],["block",146,156]],
    [["if",16,194],["block",146]],
    [["if",6,17],["block",148,173]],
    [["if",6,195],["block",0]],
    [["if",16,49],["block",156]],
    [["if",16,196],["block",156]],
    [["if",16,197],["block",156]],
    [["if",16,198],["block",156]],
    [["if",151,183],["block",157]],
    [["if",72,202],["block",157,175]],
    [["if",16,73],["block",176]],
    [["if",16,184],["block",176]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ja,oa=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.pj=b.prototype},pa=this||self,ua=function(a){if(a&&a!=pa)return qa(a.document);null===ta&&(ta=qa(pa.document));return ta},wa=/^[\w+/_-]+[=]{0,2}$/,ta=null,qa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&wa.test(c))return c}return""},ya=function(a){return a};var za=function(a,b){this.g=a;this.o=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.D={};this.o=!1;this.N={}};Ba.prototype.get=function(a){return this.D["dust."+a]};Ba.prototype.set=function(a,b){this.o||(a="dust."+a,this.N.hasOwnProperty(a)||(this.D[a]=b))};Ba.prototype.has=function(a){return this.D.hasOwnProperty("dust."+a)};
var Ca=function(a){var b=[],c;for(c in a.D)a.D.hasOwnProperty(c)&&b.push(c.substr(5));return b},Da=function(a,b){b="dust."+b;a.o||a.N.hasOwnProperty(b)||delete a.D[b]};var k=function(a){this.o=new Ba;this.g=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.g[Number(b)]=a[Number(b)]:this.o.set(b,a[b]))};ba=k.prototype;ba.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
ba.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else Aa(a)?this.g[Number(a)]=b:this.o.set(a,b)};ba.get=function(a){return"length"===a?this.length():Aa(a)?this.g[Number(a)]:this.o.get(a)};ba.length=function(){return this.g.length};ba.Sb=function(){for(var a=Ca(this.o),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var Ea=function(a,b){Aa(b)?delete a.g[Number(b)]:Da(a.o,b)};ba=k.prototype;ba.pop=function(){return this.g.pop()};
ba.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};ba.shift=function(){return this.g.shift()};ba.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};ba.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};ba.has=function(a){return Aa(a)&&this.g.hasOwnProperty(a)||this.o.has(a)};var Fa=function(){function a(f,g){if(b[f]){if(b[f].Fc+g>b[f].max)throw Error("Quota exceeded");b[f].Fc+=g}}var b={},c=void 0,d=void 0,e={mi:function(f){c=f},Hf:function(){c&&a(c,1)},oi:function(f){d=f},Sa:function(f){d&&a(d,f)},Ii:function(f,g){b[f]=b[f]||{Fc:0};b[f].max=g},Qh:function(f){return b[f]&&b[f].Fc||0},reset:function(){b={}},Ch:a};e.onFnConsume=e.mi;e.consumeFn=e.Hf;e.onStorageConsume=e.oi;e.consumeStorage=e.Sa;e.setMax=e.Ii;e.getConsumed=e.Qh;e.reset=e.reset;e.consume=e.Ch;return e};var Ha=function(a,b){this.s=a;this.O=function(c,d,e){return c.apply(d,e)};this.D=b;this.o=new Ba;this.g=this.N=void 0};Ha.prototype.add=function(a,b){Ia(this,a,b,!1)};var Ia=function(a,b,c,d){if(!a.o.o)if(a.s.Sa(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.o;e.set(b,c);e.N["dust."+b]=!0}else a.o.set(b,c)};
Ha.prototype.set=function(a,b){this.o.o||(!this.o.has(a)&&this.D&&this.D.has(a)?this.D.set(a,b):(this.s.Sa(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.o.set(a,b)))};Ha.prototype.get=function(a){return this.o.has(a)?this.o.get(a):this.D?this.D.get(a):void 0};Ha.prototype.has=function(a){return!!this.o.has(a)||!(!this.D||!this.D.has(a))};var Ka=function(a){var b=new Ha(a.s,a);a.N&&(b.N=a.N);b.O=a.O;b.g=a.g;return b};var Ma=function(){},Na=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Oa=function(a){return"number"==typeof a&&!isNaN(a)},Ra=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Sa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ta=function(a,b){if(a&&Ra(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ua=function(a,b){if(!Oa(a)||
!Oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Xa=function(a,b){for(var c=new Wa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ya=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Za=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},ab=function(a){return Math.round(Number(a))||0},bb=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},cb=function(a){var b=[];if(Ra(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},eb=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},fb=function(){return(new Date).getTime()},Wa=function(){this.prefix="gtm.";this.values={}};Wa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Wa.prototype.get=function(a){return this.values[this.prefix+a]};
var gb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},hb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},ib=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},jb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},mb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},nb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Sa(b,d))return}return d},ob=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},sb=function(a){var b=[];Ya(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var tb=function(a,b){Ba.call(this);this.O=a;this.na=b};oa(tb,Ba);tb.prototype.toString=function(){return this.O};tb.prototype.Sb=function(){return new k(Ca(this))};tb.prototype.g=function(a,b){a.s.Hf();return this.na.apply(new ub(this,a),Array.prototype.slice.call(arguments,1))};tb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var wb=function(a,b){for(var c,d=0;d<b.length&&!(c=vb(a,b[d]),c instanceof za);d++);return c},vb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof tb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.N;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},ub=function(a,b){this.o=a;this.g=b},F=function(a,b){var c=a.g;return Ra(b)?vb(c,b):b},G=function(a){return a.o.O};var yb=function(){Ba.call(this)};oa(yb,Ba);yb.prototype.Sb=function(){return new k(Ca(this))};var Ab={control:function(a,b){return new za(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.s.Sa(a.length+f.length);return new tb(a,function(){return function(g){var h=Ka(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof za)return l[m];for(var n=e.get("length"),q=
0;q<n;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=wb(h,f);if(t instanceof za)return"return"===t.g?t.o:t}}())},list:function(a){var b=this.g.s;b.Sa(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.Sa(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.s,c=new yb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Sa(g);c.set(e,f)}return c},undefined:function(){}};var Bb=function(){this.s=Fa();this.g=new Ha(this.s)},Cb=function(a,b,c){var d=new tb(b,c);d.o=!0;a.g.set(b,d)};Bb.prototype.Kc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.o(c)};Bb.prototype.o=function(a){for(var b,c=0;c<arguments.length;c++)b=vb(this.g,arguments[c]);return b};Bb.prototype.D=function(a,b){var c=Ka(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=vb(c,arguments[e]);return d};var Db=function(a){if(a instanceof Db)return a;this.sa=a};Db.prototype.toString=function(){return String(this.sa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Eb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Fb=function(a){if(null==a)return String(a);var b=Eb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Gb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Hb=function(a){if(!a||"object"!=Fb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Gb(a,"constructor")&&!Gb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Gb(a,b)},H=function(a,b){var c=b||("array"==Fb(a)?[]:{}),d;for(d in a)if(Gb(a,d)){var e=a[d];"array"==Fb(e)?("array"!=Fb(c[d])&&(c[d]=[]),c[d]=H(e,c[d])):Hb(e)?(Hb(c[d])||(c[d]={}),c[d]=H(e,c[d])):c[d]=e}return c};var Jb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ca(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=Sa(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var n=h.Sb(),q=0;q<n.length();q++)m[n.get(q)]=g(h.get(n.get(q)));return m}if(h instanceof yb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof tb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Ib(u[v],b,!!c);var w=b?b.s:Fa(),y=new Ha(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Ib=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Sa(d,
h);if(-1<l)return e[l];if(Ra(h)||Za(h)){var m=new k([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(Hb(h)){var q=new yb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new tb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Jb(F(this,v[w]),b,!!c);return g((0,this.g.O)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Kb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Mb=function(a){if(void 0===a||Ra(a)||Hb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Nb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Kb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ea(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Kb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ea(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Ob="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Pb=new za("break"),Sb=new za("continue"),Tb=function(a,b){return F(this,a)+F(this,b)},Ub=function(a,b){return F(this,a)&&F(this,b)},Vb=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Sa(Ob,b)){var d=Kb(c);return Ib(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof
tb){var f=Kb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Sa(Nb.supportedMethods,b)){var g=Kb(c);g.unshift(this.g);return Nb[b].apply(a,g)}}if(a instanceof tb||a instanceof yb){if(a.has(b)){var h=a.get(b);if(h instanceof tb){var l=Kb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof tb?a.O:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Kb(c))}if(a instanceof
Db&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Wb=function(a,b){a=F(this,a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},Yb=function(a){var b=Ka(this.g),c=wb(b,Array.prototype.slice.apply(arguments));if(c instanceof za)return c},Zb=function(){return Pb},$b=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=
F(this,b[c]);if(d instanceof za)return d}},ac=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=F(this,arguments[c+1]);Ia(b,d,e,!0)}}},bc=function(){return Sb},cc=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},dc=function(a,b){return F(this,a)/F(this,b)},ec=function(a,b){a=F(this,a);b=F(this,b);var c=
a instanceof Db,d=b instanceof Db;return c||d?c&&d?a.sa==b.sa:!1:a==b},fc=function(a){for(var b,c=0;c<arguments.length;c++)b=F(this,arguments[c]);return b};function gc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=wb(f,d);if(g instanceof za){if("break"===g.g)break;if("return"===g.g)return g}}}
function hc(a,b,c){if("string"===typeof b)return gc(a,function(){return b.length},function(f){return f},c);if(b instanceof yb||b instanceof k||b instanceof tb){var d=b.Sb(),e=d.length();return gc(a,function(){return e},function(f){return d.get(f)},c)}}
var ic=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return hc(function(e){d.set(a,e);return d},b,c)},jc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return hc(function(e){var f=Ka(d);Ia(f,a,e,!0);return f},b,c)},kc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return hc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)},nc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return lc(function(e){d.set(a,e);return d},b,c)},oc=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return lc(function(e){var f=Ka(d);Ia(f,a,e,!0);return f},b,c)},pc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return lc(function(e){var f=Ka(d);f.add(a,e);return f},b,c)};
function lc(a,b,c){if("string"===typeof b)return gc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return gc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var qc=function(a,b,c,d){function e(n,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,n.get(r))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Ka(g);for(e(g,h);vb(h,b);){var l=wb(h,d);if(l instanceof za){if("break"===l.g)break;if("return"===l.g)return l}var m=Ka(g);e(h,m);vb(m,c);h=m}},rc=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},sc=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof yb||a instanceof k||a instanceof tb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof Db)return;return c},tc=function(a,b){return F(this,a)>F(this,
b)},uc=function(a,b){return F(this,a)>=F(this,b)},vc=function(a,b){a=F(this,a);b=F(this,b);a instanceof Db&&(a=a.sa);b instanceof Db&&(b=b.sa);return a===b},wc=function(a,b){return!vc.call(this,a,b)},xc=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=wb(this.g,d);if(e instanceof za)return e},yc=function(a,b){return F(this,a)<F(this,b)},zc=function(a,b){return F(this,a)<=F(this,b)},Ac=function(a,b){return F(this,a)%F(this,b)},Bc=function(a,b){return F(this,a)*F(this,b)},Cc=function(a){return-F(this,
a)},Dc=function(a){return!F(this,a)},Ec=function(a,b){return!ec.call(this,a,b)},Fc=function(){return null},Jc=function(a,b){return F(this,a)||F(this,b)},Kc=function(a,b){var c=F(this,a);F(this,b);return c},Lc=function(a){return F(this,a)},Mc=function(a){return Array.prototype.slice.apply(arguments)},Nc=function(a){return new za("return",F(this,a))},Oc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
tb||a instanceof k||a instanceof yb)&&a.set(b,c);return c},Pc=function(a,b){return F(this,a)-F(this,b)},Qc=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!Ra(d)||!Ra(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof za){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof za&&("return"===f.g||"continue"===
f.g)))return f},Rc=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Sc=function(a){a=F(this,a);return a instanceof tb?"function":typeof a},Tc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Uc=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=wb(this.g,e);if(f instanceof za){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=wb(this.g,e);if(g instanceof za){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Vc=function(a){return~Number(F(this,a))},Wc=function(a,b){return Number(F(this,a))<<Number(F(this,b))},Xc=function(a,b){return Number(F(this,a))>>Number(F(this,b))},Yc=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},Zc=function(a,b){return Number(F(this,a))&Number(F(this,b))},$c=function(a,b){return Number(F(this,a))^Number(F(this,b))},ad=function(a,b){return Number(F(this,a))|Number(F(this,b))};var cd=function(){this.g=new Bb;bd(this)};cd.prototype.Kc=function(a){return dd(this.g.o(a))};
var fd=function(a,b){return dd(ed.g.D(a,b))},bd=function(a){var b=function(d,e){var f=a.g,g=String(e);Ab.hasOwnProperty(d)&&Cb(f,g||d,Ab[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){Cb(a.g,String(d),e)};c(0,Tb);c(1,Ub);c(2,Vb);c(3,Wb);c(53,Yb);c(4,Zb);c(5,$b);c(52,ac);c(6,bc);c(9,$b);c(50,cc);c(10,dc);c(12,ec);c(13,fc);c(47,ic);c(54,jc);c(55,kc);c(63,qc);c(64,nc);c(65,oc);c(66,pc);c(15,rc);c(16,sc);c(17,sc);c(18,tc);c(19,uc);c(20,vc);c(21,wc);c(22,xc);
c(23,yc);c(24,zc);c(25,Ac);c(26,Bc);c(27,Cc);c(28,Dc);c(29,Ec);c(45,Fc);c(30,Jc);c(32,Kc);c(33,Kc);c(34,Lc);c(35,Lc);c(46,Mc);c(36,Nc);c(43,Oc);c(37,Pc);c(38,Qc);c(39,Rc);c(40,Sc);c(41,Tc);c(42,Uc);c(58,Vc);c(57,Wc);c(60,Xc);c(61,Yc);c(56,Zc);c(62,$c);c(59,ad)},kd=function(){var a=ed,b=gd();Cb(a.g,"require",b)},ld=function(a,b){a.g.g.O=b};
function dd(a){if(a instanceof za||a instanceof tb||a instanceof k||a instanceof yb||a instanceof Db||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var md=function(){var a=function(b){return{toString:function(){return b}}};return{jg:a("consent"),dd:a("consent_always_fire"),Ae:a("convert_case_to"),Be:a("convert_false_to"),Ce:a("convert_null_to"),De:a("convert_true_to"),Ee:a("convert_undefined_to"),Ui:a("debug_mode_metadata"),Qa:a("function"),Yg:a("instance_name"),$g:a("live_only"),ah:a("malware_disabled"),bh:a("metadata"),Xi:a("original_activity_id"),Yi:a("original_vendor_template_id"),eh:a("once_per_event"),uf:a("once_per_load"),yf:a("setup_tags"),
zf:a("tag_id"),Af:a("teardown_tags")}}();
var nd=[],od={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pd=function(a){return od[a]},qd=/[\x00\x22\x26\x27\x3c\x3e]/g;var ud=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,vd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},wd=function(a){return vd[a]};nd[7]=function(a){return String(a).replace(ud,wd)};
nd[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ud,wd)+"'"}};var Cd=/['()]/g,Dd=function(a){return"%"+a.charCodeAt(0).toString(16)};nd[12]=function(a){var b=
encodeURIComponent(String(a));Cd.lastIndex=0;return Cd.test(b)?b.replace(Cd,Dd):b};var Ed=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Gd=function(a){return Fd[a]};nd[16]=function(a){return a};var Id;
var Jd=[],Pd=[],Qd=[],Rd=[],Sd=[],Td={},Ud,Vd,Wd,Xd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Yd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Td[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Ef&&b.Ef(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===md.dd.toString()&&a[f]){}return void 0!==d?d(e):Id(c,e,b)},$d=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Zd(a[e],b,c));return d},Zd=function(a,b,c){if(Ra(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Zd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=Jd[f];if(!g||b.Vd(g))return;c[f]=!0;try{var h=$d(g,b,c);h.vtp_gtmEventId=b.id;d=Yd(h,b);Wd&&(d=Wd.Eh(d,
h))}catch(y){b.Uf&&b.Uf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Zd(a[l],b,c)]=Zd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Zd(a[n],b,c);Vd&&(m=m||q===Vd.xc);d.push(q)}return Vd&&m?Vd.Hh(d):d.join("");case "escape":d=Zd(a[1],b,c);if(Vd&&Ra(a[1])&&"macro"===a[1][0]&&Vd.ai(a))return Vd.wi(d);d=String(d);for(var t=2;t<a.length;t++)nd[a[t]]&&(d=nd[a[t]](d));return d;case "tag":var r=a[1];if(!Rd[r])throw Error("Unable to resolve tag reference "+
r+".");return d={Lf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=ae(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ae=function(a,b,c){try{return Ud($d(a,b,c))}catch(d){JSON.stringify(a)}return 2};var be=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.o=a;this.g=c};oa(be,Error);function ce(a,b){if(Ra(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ce(a[c],b[c])}};var de=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.s=a;this.o=b;this.g=[]};oa(de,Error);var fe=function(){return function(a,b){a instanceof de||(a=new de(a,ee));b&&a.g.push(b);throw a;}};function ee(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Oa(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ge=null,je=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];ge=he(a);for(var e=0;e<Pd.length;e++){var f=Pd[e],g=ie(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<Rd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},ie=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ge(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=ge(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},he=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ae(Qd[c],a));return b[c]}};var ke={Eh:function(a,b){b[md.Ae]&&"string"===typeof a&&(a=1==b[md.Ae]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(md.Ce)&&null===a&&(a=b[md.Ce]);b.hasOwnProperty(md.Ee)&&void 0===a&&(a=b[md.Ee]);b.hasOwnProperty(md.De)&&!0===a&&(a=b[md.De]);b.hasOwnProperty(md.Be)&&!1===a&&(a=b[md.Be]);return a}};var le=function(){this.g={}};function me(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new be(c,d,g);}}function ne(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));me(e,b,d,g);me(f,b,d,g)}}}};var re=function(a){var b=oe.F,c=this;this.o=new le;this.g={};var d={},e=ne(this.o,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ya(a,function(f,g){var h={};Ya(g,function(l,m){var n=pe(l,m);h[l]=n.assert;d[l]||(d[l]=n.M)});c.g[f]=function(l,m){var n=h[l];if(!n)throw qe(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);n.apply(void 0,q);e.apply(void 0,q)}})},te=function(a){return se.g[a]||
function(){}};function pe(a,b){var c=Xd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=qe;try{return Yd(c)}catch(d){return{assert:function(e){throw new be(e,{},"Permission "+e+" is unknown.");},M:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function qe(a,b,c){return new be(a,b,c)};var ue=!1;var ve={};ve.Pi=bb('');ve.Kh=bb('');var we=ue,xe=ve.Kh,ye=ve.Pi;
var Me=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Ne=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Me(b,"/*")&&(b=b.slice(0,-2));Me(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Oe=/^[a-z0-9-]+$/i,Pe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Re=function(a,b){var c;if(!(c=!Qe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Oe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Pe.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),q=n.slice(0,n.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var w=n.slice(n.indexOf("/"));h=Ne(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Qe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Se,Te=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.uh&&(l["fix_"+m]=!0),l.Nf=l.Nf||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,ba:r.ba,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,w,y,x,z){var A=y||x||z||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=A;u[w]=C.textContent||C.innerText||A});return{tagName:r[1],ba:u,bd:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in n)if(n[r].test(h)){var u=q[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.Nf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Tf=function(){return this[this.length-1]};v.Xd=function(C){var D=this.Tf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.Dh=
function(C){for(var D=0,E;E=this[D];D++)if(E.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.bd=r.test(C.tagName)||C.bd);return C},y=t,x=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Xd("TABLE")?(h="<TBODY>"+h,A()):l.ij&&u.test(D)&&v.Dh(D)?v.Xd(D)?x():(h="</"+C.tagName+">"+h,A()):C.bd||v.push(C)},endTag:function(C){v.Tf()?l.Mh&&!v.Xd(C.tagName)?x():v.pop():l.Mh&&(y(),A())}},A=function(){var C=h,D=w(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return w(y())}}();return{append:function(r){h+=r},zi:t,mj:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},nj:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.qj="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.oj=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Se=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,r){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(r,q[u],u)}function d(q,t,r){for(var u in q)q.hasOwnProperty(u)&&t.call(r,u,q[u])}function e(q,t){d(t,
function(r,u){q[r]=u});return q}function f(q,t){q=q||{};d(t,function(r,u){b(q[r])||(q[r]=u)});return q}function g(q){try{return m.call(q)}catch(r){var t=[];c(q,function(u){t.push(u)});return t}}var h={lh:a,mh:a,nh:a,oh:a,vh:a,wh:function(q){return q},done:a,error:function(q){throw q;},Ci:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(r,u,v){var w="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(w,v):
r.removeAttribute(w)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,hc:v.defaultView||v.parentWindow,lb:v,Sc:Se("",{uh:!0}),Ed:[r],ke:"",me:v.createElement(r.nodeName),ac:[],Va:[]});q(this.me,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Va,arguments);for(var r;!this.Ic&&this.Va.length;)r=this.Va.shift(),"function"===typeof r?this.Bh(r):this.we(r)};t.prototype.Bh=function(r){var u={type:"function",value:r.name||r.toString()};this.ce(u);r.call(this.hc,this.lb);this.Vf(u)};
t.prototype.we=function(r){this.Sc.append(r);for(var u,v=[],w,y;(u=this.Sc.zi())&&!(w=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Si(v);w&&this.Vh(u);y&&this.Wh(u)};t.prototype.Si=function(r){var u=this.yh(r);u.Cf&&(u.Td=this.ke+u.Cf,this.ke+=u.xi,this.me.innerHTML=u.Td,this.Qi())};t.prototype.yh=function(r){var u=this.Ed.length,v=[],w=[],y=[];c(r,function(x){v.push(x.text);if(x.ba){if(!/^noscript$/i.test(x.tagName)){var z=
u++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.ba.id&&"ps-style"!==x.ba.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.bd?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{rj:r,raw:v.join(""),Cf:w.join(""),xi:y.join("")}};t.prototype.Qi=function(){for(var r,u=[this.me];b(r=u.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.Ed[q(r,"id")]=r,q(r,"id",null));var w=r.parentNode&&q(r.parentNode,"proxyof");
w&&this.Ed[w].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.Vh=function(r){var u=this.Sc.clear();u&&this.Va.unshift(u);r.src=r.ba.src||r.ba.$i;r.src&&this.ac.length?this.Ic=r:this.ce(r);var v=this;this.Ri(r,function(){v.Vf(r)})};t.prototype.Wh=function(r){var u=this.Sc.clear();u&&this.Va.unshift(u);r.type=r.ba.type||r.ba.TYPE||"text/css";this.Ti(r);u&&this.write()};t.prototype.Ti=function(r){var u=this.Ah(r);this.Zh(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.lb.createTextNode(r.content)))};t.prototype.Ah=function(r){var u=this.lb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.ba,function(v,w){u.setAttribute(v,w)});return u};t.prototype.Zh=function(r){this.we('<span id="ps-style"/>');var u=this.lb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.ce=function(r){r.ri=this.Va;this.Va=[];this.ac.unshift(r)};t.prototype.Vf=function(r){r!==this.ac[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ac.shift(),this.write.apply(this,r.ri),!this.ac.length&&this.Ic&&(this.ce(this.Ic),this.Ic=null))};t.prototype.Ri=function(r,u){var v=this.zh(r),w=this.Ki(v),y=this.options.lh;r.src&&(v.src=r.src,this.Fi(v,w?y:function(){u();y()}));try{this.Yh(v),r.src&&!w||u()}catch(x){this.options.error(x),u()}};t.prototype.zh=function(r){var u=this.lb.createElement(r.tagName);d(r.ba,function(v,w){u.setAttribute(v,w)});r.content&&(u.text=r.content);return u};t.prototype.Yh=function(r){this.we('<span id="ps-script"/>');
var u=this.lb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.Fi=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var w=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();w(y);u()}})};t.prototype.Ki=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.Ci&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var w=u.shift(),y;w&&(y=w[w.length-1],y.mh(),w.stream=t.apply(null,w),y.nh())}function t(w,y,x){function z(E){E=x.wh(E);v.write(E);x.oh(E)}v=new n(w,x);v.id=r++;v.name=x.name||v.id;var A=w.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.hc.onerror||a;v.hc.onerror=function(E,I,P){x.error({msg:E+
" - "+I+":"+P});D.apply(v.hc,arguments)};v.write(y,function(){e(A,C);v.hc.onerror=D;x.done();v=null;q()});return v}var r=0,u=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.kj?w[0]:w;var z=[w,y,x];w.vi={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.vh(z);u.push(z);v||q();return w.vi},{streams:{},lj:u,bj:n})}();Te=l.postscribe}})();var Ue=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Ve={Fn:"function",DustMap:"Object",List:"Array"},J=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ue.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof tb?n="Fn":l instanceof k?n="List":l instanceof yb?n="DustMap":
l instanceof Db&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(Ve[h]||h)+".");}}};function We(a){return""+a}
function Xe(a,b){var c=[];return c};var Ye=function(a,b){var c=new tb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);return b.apply(this,d)});c.o=!0;return c},Ze=function(a,b){var c=new yb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Na(e)?c.set(d,Ye(a+"_"+d,e)):(Oa(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.o=!0;return c};var $e=function(a,b){J(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new yb;return d=Ze("AssertApiSubject",c)};var af=function(a,b){J(G(this),["actual:?*","message:?string"],arguments);var c={},d=new yb;
return d=Ze("AssertThatSubject",c)};function bf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Jb(arguments[d],c));return Ib(a.apply(null,b))}}var df=function(){for(var a=Math,b=cf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=bf(a[e].bind(a)))}return c};var ef=function(a){var b;return b};var ff=function(a){var b;return b};var gf=function(a){J(G(this),["uri:!string"],arguments);return encodeURI(a)};var hf=function(a){J(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var jf=function(a){J(G(this),["message:?string"],arguments);};var kf=function(a,b){J(G(this),["min:!number","max:!number"],arguments);return Ua(a,b)};var lf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.th.apply(null,Array.prototype.slice.call(arguments,1))};var mf=function(){lf(this,"read_container_data");var a=new yb;a.set("containerId",'GTM-P6ZNR6');a.set("version",'861');a.set("environmentName",'');a.set("debugMode",we);a.set("previewMode",ye);a.set("environmentMode",xe);a.o=!0;return a};var nf=function(){return(new Date).getTime()};var of=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof tb)return"function";if(a instanceof Db){a=a.sa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var pf=function(a){function b(c){return function(d){try{return c(d)}catch(e){(we||ye)&&a.call(this,e.message)}}}return{parse:b(function(c){return Ib(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Jb(c))})}};var qf=function(a){return ab(Jb(a,this.g))};var rf=function(a){return Number(Jb(a,this.g))};var sf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var tf=function(a,b,c){var d=null,e=!1;return e?d:null};var cf="floor ceil round max min abs pow sqrt".split(" ");var uf=function(){var a={};return{Rh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ji:function(b,c){a[b]=c},reset:function(){a={}}}},vf=function(a,b){J(G(this),["apiName:!string","mock:?*"],arguments);};var wf=function(){this.g={};this.o={};};wf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
wf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.o.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Na(b)?Ye(a,b):Ze(a,b)};
var xf=function(a,b,c){if(a.o.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.o[b]=Na(c)?Ye(b,c):Ze(b,c)};function yf(){var a={};return a};var K={Fb:"_ee",Dd:"_syn",aj:"_uei",xd:"_eu",Zi:"_pci",ld:"event_callback",qc:"event_timeout",ja:"gtag.config",Ma:"gtag.get",oa:"purchase",ab:"refund",La:"begin_checkout",Za:"add_to_cart",$a:"remove_from_cart",sg:"view_cart",Ie:"add_to_wishlist",Ba:"view_item",He:"view_promotion",Ge:"select_promotion",fd:"select_item",mc:"view_item_list",Fe:"add_payment_info",rg:"add_shipping_info",Ea:"value_key",Da:"value_callback",ka:"allow_ad_personalization_signals",td:"restricted_data_processing",vb:"allow_google_signals",
la:"cookie_expires",yb:"cookie_update",Cb:"session_duration",ra:"user_properties",Pa:"transport_url",P:"ads_data_redaction",C:"ad_storage",J:"analytics_storage",ze:"region",kg:"wait_for_update"};K.jf=[K.oa,K.ab,K.La,K.Za,K.$a,K.sg,K.Ie,K.Ba,K.He,K.Ge,K.mc,K.fd,K.Fe,K.rg];K.hf=[K.ka,K.vb,K.yb];K.kf=[K.la,K.qc,K.Cb];var zf={},Af=function(a,b){zf[a]=zf[a]||[];zf[a][b]=!0},Bf=function(a){for(var b=[],c=zf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Cf=function(a){Af("GTM",a)};var Df=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ef=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Ff,Gf=function(){if(void 0===Ff){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ya,createScript:ya,createScriptURL:ya})}catch(c){pa.console&&pa.console.error(c.message)}Ff=a}else Ff=a}return Ff};var If=function(a,b){this.g=b===Hf?a:""};If.prototype.toString=function(){return this.g+""};var Hf={};var Jf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Kf;a:{var Lf=pa.navigator;if(Lf){var Mf=Lf.userAgent;if(Mf){Kf=Mf;break a}}Kf=""}var Nf=function(a){return-1!=Kf.indexOf(a)};var Pf=function(a,b,c){this.g=c===Of?a:""};Pf.prototype.toString=function(){return this.g.toString()};var Qf=function(a){return a instanceof Pf&&a.constructor===Pf?a.g:"type_error:SafeHtml"},Of={},Rf=new Pf(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Of);var Sf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Qf(Rf);return!c.parentElement}),Tf=function(a,b){if(Sf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Qf(b)};var Uf=function(a){var b=Gf(),c=b?b.createHTML(a):a;return new Pf(c,null,Of)};var B=window,M=document,Vf=navigator,Wf=M.currentScript&&M.currentScript.src,Xf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Yf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Zf=function(a,b,c){var d=M.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Gf(),g=f?f.createScriptURL(a):a;e=new If(g,Hf);d.src=e instanceof If&&e.constructor===If?e.g:"type_error:TrustedResourceUrl";
var h=ua(d.ownerDocument&&d.ownerDocument.defaultView);h&&d.setAttribute("nonce",h);Yf(d,b);c&&(d.onerror=c);var l=ua();l&&d.setAttribute("nonce",l);var m=M.getElementsByTagName("script")[0]||M.body||M.head;m.parentNode.insertBefore(d,m);return d},$f=function(){if(Wf){var a=Wf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ag=function(a,b){var c=M.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=M.body&&M.body.lastChild||M.body||M.head;d.parentNode.insertBefore(c,d);Yf(c,b);void 0!==a&&(c.src=a);return c},bg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},cg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},dg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,
0)},eg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},fg=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},gg=function(a){var b=M.createElement("div"),c=Uf("A<div>"+a+"</div>");Tf(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},ig=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},jg=function(a){Vf.sendBeacon&&Vf.sendBeacon(a)||bg(a)},kg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var lg={},mg=function(){return void 0==lg.gtag_cs_api?!1:lg.gtag_cs_api};var ng=[];function og(){var a=Xf("google_tag_data",{});a.ics||(a.ics={entries:{},set:pg,update:qg,addListener:rg,notifyListeners:sg,active:!1,usedDefault:!1});return a.ics}
function pg(a,b,c,d,e,f){var g=og();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var q=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,tg(a),sg(),Af("TAGGING",2))},f)}}}
function qg(a,b){var c=og();c.active=!0;if(void 0!=b){var d=ug(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ug(a);f.quiet?(f.quiet=!1,tg(a)):g!==d&&tg(a)}}function rg(a,b){ng.push({Gf:a,Nh:b})}function tg(a){for(var b=0;b<ng.length;++b){var c=ng[b];Ra(c.Gf)&&-1!==c.Gf.indexOf(a)&&(c.Xf=!0)}}function sg(a){for(var b=0;b<ng.length;++b){var c=ng[b];if(c.Xf){c.Xf=!1;try{c.Nh({Ff:a})}catch(d){}}}}
var ug=function(a){var b=og().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},vg=function(a){return(og().entries[a]||{}).initial},wg=function(a){return!(og().entries[a]||{}).quiet},xg=function(){return mg()?og().active:!1},yg=function(){return og().usedDefault},zg=function(a,b){og().addListener(a,b)},Ag=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!wg(b[e]))return!0;return!1}if(c()){var d=!1;zg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Bg=function(a,
b){if(!1===ug(b)){var c=!1;zg([b],function(d){!c&&ug(b)&&(a(d),c=!0)})}};function Cg(a){for(var b=[],c=0;c<Dg.length;c++){var d=a(Dg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Dg=[K.C,K.J],Eg=function(a){var b=a[K.ze];b&&Cf(40);var c=a[K.kg];c&&Cf(41);for(var d=Ra(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Dg.length;f++){var g=Dg[f],h=a[Dg[f]],l=d[e];og().set(g,h,l,"US","US-CA",c)}},Fg=function(a,b){for(var c=0;c<Dg.length;c++){var d=Dg[c],e=a[Dg[c]];og().update(d,e)}og().notifyListeners(b)},Gg=function(a){var b=ug(a);return void 0!=b?b:!0},Hg=function(){return"G1"+Cg(ug)},Ig=function(a,b){Ag(a,b)};var Kg=function(a){return Jg?M.querySelectorAll(a):null},Lg=function(a,b){if(!Jg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!M.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Mg=!1;if(M.querySelectorAll)try{var Ng=M.querySelectorAll(":root");Ng&&1==Ng.length&&Ng[0]==M.documentElement&&(Mg=!0)}catch(a){}var Jg=Mg;var Og=function(a){if(M.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};
var Pg=function(){var a=M.body,b=M.documentElement||a&&a.parentElement,c,d;if(M.compatMode&&"BackCompat"!==M.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Cf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Qg=function(a){var b=Pg(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var Xg=/:[0-9]+$/,Yg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},ah=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Zg(a.protocol)||Zg(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(Xg,"").toLowerCase());return $g(a,b,c,d,e)},$g=function(a,b,c,d,e){var f,g=Zg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=bh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Xg,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Af("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Sa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Yg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Zg=function(a){return a?a.replace(":",
"").toLowerCase():""},bh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ch=function(a){var b=M.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Af("TAGGING",1),c="/"+c);var d=b.hostname.replace(Xg,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},dh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=ch(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var eh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),fh=new RegExp(/support|noreply/i),gh=["SCRIPT","IMG","SVG","PATH","BR"],hh=["BR"];function ih(a){var b;if(a===M.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=ih(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var lh=function(){var a=!0;var b=a,c;var d=[],e=M.body;if(e){for(var f=e.querySelectorAll("*"),g=0;g<f.length&&1E4>g;g++){var h=f[g];if(!(0<=gh.indexOf(h.tagName.toUpperCase()))){for(var l=!1,m=0;m<h.childElementCount&&1E4>m;m++)if(!(0<=hh.indexOf(h.children[m].tagName.toUpperCase()))){l=!0;break}l||d.push(h)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var n=c,q=n.elements,t=[],r=0;r<q.length;r++){var u=q[r],v=u.textContent;u.value&&(v=u.value);if(v){var w=v.match(eh);if(w){var y=w[0],x;if(B.location){var z=$g(B.location,"host",!0);x=0<=y.toLowerCase().indexOf(z)}else x=!1;x||t.push({element:u,cd:y})}}}var A;for(var C=[],D=10<t.length?"3":n.status,E=0;E<t.length&&
10>E;E++){var I=t[E].element,P=t[E].cd,S=!1;C.push({cd:P,querySelector:ih(I),tagName:I.tagName,isVisible:!Og(I),type:1,Qc:!!S})}return{elements:C,status:D}};var oe={},O=null,zh=Math.random();oe.F="GTM-P6ZNR6";oe.Bc="230";oe.Wi="";oe.lg="ChEIgOuYgQYQi9b4mPCjvYPXARIjAB2E488yDDfiwglEVSAjNTHSk3tOSt+riIKts7aQdPBEW2MaAvgo";var Ah={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Bh={__paused:!0,__tg:!0},Ch;for(Ch in Ah)Ah.hasOwnProperty(Ch)&&(Bh[Ch]=!0);var Dh="www.googletagmanager.com/gtm.js";
var Eh=Dh,Fh=bb(""),Gh=null,Hh=null,Ih="//www.googletagmanager.com/a?id="+oe.F+"&cv=861",Jh={},Kh={},Lh=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Mh={},Nh=new Wa,Oh={},Ph={},Sh={name:"dataLayer",set:function(a,b){H(ob(a,b),Oh);Qh()},get:function(a){return Rh(a,2)},reset:function(){Nh=new Wa;Oh={};Qh()}},Rh=function(a,b){return 2!=b?Nh.get(a):Th(a)},Th=function(a,b){var c=a.split(".");b=b||[];for(var d=Oh,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Sa(b,d))return}return d},Uh=function(a,b){Ph.hasOwnProperty(a)||(Nh.set(a,b),H(ob(a,b),Oh),Qh())},Qh=function(a){Ya(Ph,function(b,c){Nh.set(b,c);H(ob(b,
void 0),Oh);H(ob(b,c),Oh);a&&delete Ph[b]})},Vh=function(a,b,c){Mh[a]=Mh[a]||{};var d=1!==c?Th(b):Nh.get(b);"array"===Fb(d)||"object"===Fb(d)?Mh[a][b]=H(d):Mh[a][b]=d},Wh=function(a,b){if(Mh[a])return Mh[a][b]},Xh=function(a,b){Mh[a]&&delete Mh[a][b]};var $h={},ai=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===$h[a]&&($h[a]=Math.floor(Math.random()*b));return $h[a]};var bi=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function ci(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var ei=function(a,b,c,d){return di(d)?ci(a,String(b||document.cookie),c):[]},hi=function(a,b,c,d,e){if(di(e)){var f=fi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=gi(f,function(g){return g.Jc},b);if(1===f.length)return f[0].id;f=gi(f,function(g){return g.Yb},c);return f[0]?f[0].id:void 0}}};function ii(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=ei(b,f,!1,d).indexOf(c)}
var mi=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!di(c.za))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=ji(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.ki);g=e(g,"samesite",
c.Di);c.Gi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=ki(),q=void 0,t=!1,r=0;r<n.length;++r){var u="none"!==n[r]?n[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}t=!0;if(!li(u,c.path)&&ii(v,a,b,c.za))return 0}if(q&&!t)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return li(m,c.path)?1:ii(g,a,b,c.za)?0:1},ni=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return mi(a,b,c)};
function gi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function fi(a,b,c){for(var d=[],e=ei(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Jc:1*l[0]||1,Yb:1*l[1]||1}))}}return d}
var ji=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},oi=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pi=/(^|\.)doubleclick\.net$/i,li=function(a,b){return pi.test(document.location.hostname)||"/"===b&&oi.test(a)},ki=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;pi.test(e)||oi.test(e)||a.push("none");
return a},di=function(a){if(!mg()||!a||!xg())return!0;if(!wg(a))return!1;var b=ug(a);return null==b?!0:!!b};var qi=function(){for(var a=Vf.userAgent+(M.cookie||"")+(M.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^bi(a)&2147483647,Math.round(fb()/1E3)].join(".")},ti=function(a,b,c,d,e){var f=ri(b);return hi(a,f,si(c),d,e)},ui=function(a,b,c,d){var e=""+ri(c),f=si(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ri=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},si=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function vi(a,b,c){var d,e=a.Xb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||fb())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var wi=["1"],xi={},Ai=function(a){var b=yi(a.prefix),c=xi[b];c&&zi(b,c,a)},Ci=function(a){var b=yi(a.prefix);if(!xi[b]&&!Bi(b,a.path,a.domain)){var c=qi();if(0===zi(b,c,a)){var d=Xf("google_tag_data",{});d._gcl_au?Af("GTM",57):d._gcl_au=c}Bi(b,a.path,a.domain)}};function zi(a,b,c){var d=ui(b,"1",c.domain,c.path),e=vi(c);e.za="ad_storage";return ni(a,d,e)}function Bi(a,b,c){var d=ti(a,b,c,wi,"ad_storage");d&&(xi[a]=d);return d}function yi(a){return(a||"_gcl")+"_au"};function Di(){for(var a=Ei,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Fi(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Ei,Gi;
function Hi(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Gi[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Ei=Ei||Fi();Gi=Gi||Di();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Ii;var Mi=function(){var a=Ji,b=Ki,c=Li(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){cg(M,"mousedown",d);cg(M,"keyup",d);cg(M,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Ni=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Li().decorators.push(f)},Oi=function(a,b,c){for(var d=Li().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==M.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||n&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&ib(e,g.callback())}}return e},Li=function(){var a=Xf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Pi=/(.*?)\*(.*?)\*(.*)/,Qi=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ri=/^(?:www\.|m\.|amp\.)+/,Si=/([^?#]+)(\?[^#]*)?(#.*)?/;function Xi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Zi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Ei=Ei||Fi();Gi=Gi||Di();for(var l=[],m=0;m<h.length;m+=3){var n=m+1<h.length,q=m+2<h.length,t=h.charCodeAt(m),r=n?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=t>>2,w=(t&3)<<4|r>>4,y=(r&15)<<2|u>>6,x=u&63;q||(x=64,n||(y=64));l.push(Ei[v],Ei[w],Ei[y],Ei[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Yi(z),
z].join("*")},Yi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Ii)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Ii=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Ii[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},aj=function(){return function(a){var b=ch(B.location.href),
c=b.search.replace("?",""),d=Yg(c,"_gl",!1,!0)||"";a.query=$i(d)||{};var e=ah(b,"fragment").match(Xi("_gl"));a.fragment=$i(e&&e[3]||"")||{}}},bj=function(a){var b=aj(),c=Li();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(ib(d,e.query),a&&ib(d,e.fragment));return d},$i=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Pi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=
0;n<b;++n)if(m===Yi(h,n)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=Hi(t[r+1]);return q}}}}catch(u){}};function cj(a,b,c,d){function e(n){var q=n,t=Xi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}n=r;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Si.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function dj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Oi(b,1,c),e=Oi(b,2,c),f=Oi(b,3,c);if(jb(d)){var g=Zi(d);c?ej("_gl",g,a):fj("_gl",g,a,!1)}if(!c&&jb(e)){var h=Zi(e);fj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){fj(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ej(m,n,q);break a}}"string"==typeof q&&cj(m,n,q,void 0)}}
function fj(a,b,c,d){if(c.href){var e=cj(a,b,c.href,void 0===d?!1:d);Jf.test(e)&&(c.href=e)}}
function ej(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=M.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=cj(a,b,c.action);Jf.test(m)&&(c.action=m)}}}
var Ji=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||dj(e,e.hostname)}}catch(g){}},Ki=function(a){try{if(a.action){var b=ah(ch(a.action),"host");dj(a,b)}}catch(c){}},gj=function(a,b,c,d){Mi();Ni(a,b,"fragment"===c?2:1,!!d,!1)},hj=function(a,b){Mi();Ni(a,[$g(B.location,"host",!0)],b,!0,!0)},ij=function(){var a=M.location.hostname,b=Qi.exec(M.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Ri,""),l=e.replace(Ri,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},jj=function(a,b){return!1===a?!1:a||b||ij()};var kj=/^\w+$/,lj=/^[\w-]+$/,mj=/^~?[\w-]+$/,nj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},oj=function(){if(!mg()||!xg())return!0;var a=ug("ad_storage");return null==a?!0:!!a},pj=function(a,b){wg("ad_storage")?oj()?a():Bg(a,"ad_storage"):b?Af("TAGGING",3):Ag(function(){pj(a,!0)},["ad_storage"])},sj=function(a){var b=[];if(!M.cookie)return b;var c=ei(a,M.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=qj(c[d]);e&&-1===Sa(b,e)&&b.push(e)}return rj(b)};
function tj(a){return a&&"string"==typeof a&&a.match(kj)?a:"_gcl"}
var vj=function(){var a=ch(B.location.href),b=ah(a,"query",!1,void 0,"gclid"),c=ah(a,"query",!1,void 0,"gclsrc"),d=ah(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Yg(e,"gclid",!1,void 0);c=c||Yg(e,"gclsrc",!1,void 0)}return uj(b,c,d)},uj=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(lj))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},wj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},yj=function(a){var b=vj();pj(function(){xj(b,a)})};
function xj(a,b,c){function d(l,m){var n=zj(l,e);n&&ni(n,m,f)}b=b||{};var e=tj(b.prefix);c=c||fb();var f=vi(b,c,!0);f.za="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.sj?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Bj=function(a,b){var c=bj(!0);pj(function(){for(var d=tj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==nj[f]){var g=zj(f,d),h=c[g];if(h){var l=Math.min(Aj(h),fb()),m;b:{for(var n=l,q=ei(g,M.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Aj(q[t])>n){m=!0;break b}m=!1}if(!m){var r=vi(b,l,!0);r.za="ad_storage";ni(g,h,r)}}}}xj(uj(c.gclid,c.gclsrc),b)})},zj=function(a,b){var c=nj[a];if(void 0!==c)return b+c},Aj=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function qj(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Cj=function(a,b,c,d,e){if(Ra(b)){var f=tj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=zj(a[l],f);if(m){var n=ei(m,M.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};pj(function(){gj(g,b,c,d)})}},rj=function(a){return a.filter(function(b){return mj.test(b)})},Dj=function(a,b){for(var c=tj(b.prefix),d={},e=0;e<a.length;e++)nj[a[e]]&&(d[a[e]]=nj[a[e]]);pj(function(){Ya(d,function(f,g){var h=ei(c+g,M.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Aj(l),
n={};n[f]=[qj(l)];xj(n,b,m)}})})};function Ej(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Fj=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(xg()){var c=vj();if(Ej(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);hj(function(){return d},3);hj(function(){var e={};return e._up="1",e},1)}}},Gj=function(){var a;if(oj()){for(var b=[],c=M.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({te:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].te]||(g[b[h].te]=[]),g[b[h].te].push({timestamp:l[1],Mc:l[2]}))}a=g}else a={};return a};var Hj=/^\d+\.fls\.doubleclick\.net$/,Ij=!1;function Jj(a,b){wg(K.C)?Gg(K.C)?a():Bg(a,K.C):b?Cf(42):Ig(function(){Jj(a,!0)},[K.C])}function Kj(a){var b=ch(B.location.href),c=ah(b,"host",!1);if(c&&c.match(Hj)){var d=ah(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Lj(a,b,c){if("aw"==a||"dc"==a){var d=Kj("gcl"+a);if(d)return d.split(".")}var e=tj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Gg(K.C)&&c,g;g=vj()[a]||[];if(0<g.length)return f?["0"]:g}var h=zj(a,e);return h?sj(h):[]}
var Mj=function(a){var b=Kj("gac");if(b)return!Gg(K.C)&&a?"0":decodeURIComponent(b);var c=Gj(),d=[];Ya(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Mc);g=rj(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Oj=function(a,b){if(Ij)Nj(a,b,"dc");else{var c=vj().dc||[];Jj(function(){Ci(b);var d=xi[yi(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+
d;jg(l);e=f[g]=!0}}null==a&&(a=e);a&&d&&Ai(b)})}},Nj=function(a,b,c){var d=vj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!wj(h,c)||e.push({Mc:f,Pf:h});!g||c&&"dc"!==c||e.push({Mc:g,Pf:"ds"});Jj(function(){Ci(b);var l=xi[yi(b.prefix)],m=!1;if(l&&0<e.length)for(var n=O.joined_auid=O.joined_auid||{},q=0;q<e.length;q++){var t=e[q],r=t.Mc,u=t.Pf,v=(b.prefix||"_gcl")+"."+u+"."+r;if(!n[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+r+"&auid="+l+"&gclsrc="+u;jg(w);
m=n[v]=!0}}null==a&&(a=m);a&&l&&Ai(b)})};var Pj=/[A-Z]+/,Qj=/\s/,Rj=function(a){if(p(a)&&(a=eb(a),!Qj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],H:d}}}}},Tj=function(a){for(var b={},c=0;c<a.length;++c){var d=Rj(a[c]);d&&(b[d.id]=d)}Sj(b);var e=[];Ya(b,function(f,g){e.push(g)});return e};
function Sj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.H[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uj=function(){var a=!1;return a};var Wj=function(a,b,c,d){return(2===Vj()||d||"http:"!=B.location.protocol?a:b)+c},Vj=function(){var a=$f(),b;if(1===a)a:{var c=Eh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=M.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var kk=function(a){return Gg(K.C)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=dh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},lk=function(){var a;if(!(a=Fh)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Vf&&Vf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=ab("1");return ai(1,100)<d?ai(2,2):-1},mk=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var nk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ok={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},pk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},qk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var sk=function(a){var b=Rh("gtm.allowlist")||Rh("gtm.whitelist");b&&Cf(9);var c=b&&mb(cb(b),ok),d=Rh("gtm.blocklist")||Rh("gtm.blacklist");d||(d=Rh("tagTypeBlacklist"))&&
Cf(3);d?Cf(8):d=[];rk()&&(d=cb(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Sa(cb(d),"google")&&Cf(2);var e=d&&mb(cb(d),pk),f={};return function(g){var h=g&&g[md.Qa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Kh[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>Sa(c,h))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>Sa(c,l[q])){Cf(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var r=0<=Sa(e,h);if(r)t=r;else{var u=Xa(e,l||[]);u&&Cf(10);t=u}}var v=!m||t;v||!(0<=Sa(l,"sandboxedScripts"))||c&&-1!==Sa(c,"sandboxedScripts")||(v=Xa(e,qk));return f[h]=v}},rk=function(){return nk.test(B.location&&B.location.hostname)};var tk={active:!0,isAllowed:function(){return!0}},uk=function(a){var b=O.zones;return b?b.checkState(oe.F,a):tk},vk=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var wk=function(){},xk=function(){};var yk=!1,zk=0,Ak=[];function Bk(a){if(!yk){var b=M.createEventObject,c="complete"==M.readyState,d="interactive"==M.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){yk=!0;for(var e=0;e<Ak.length;e++)N(Ak[e])}Ak.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Ck(){if(!yk&&140>zk){zk++;try{M.documentElement.doScroll("left"),Bk()}catch(a){B.setTimeout(Ck,50)}}}var Dk=function(a){yk?a():Ak.push(a)};var Fk=function(a,b){this.g=!1;this.o=[];this.s={tags:[]};this.D=Ek(this,a,b)},Gk=function(a,b,c,d){if(Bh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Hb(d)&&(e=H(d,e));e.id=c;e.status="timeout";return a.s.tags.push(e)-1},Hk=function(a,b,c,d){var e=a.s.tags[b];e&&(e.status=c,e.executionTime=d)},Ik=function(a){if(!a.g){for(var b=a.o,c=0;c<b.length;c++)b[c]();a.g=!0;a.o.length=0}},Ek=function(a,b,c){Na(b)&&a.Lb(b);c&&B.setTimeout(function(){return Ik(a)},Number(c));return Jk(a)};
Fk.prototype.Lb=function(a){var b=this,c=hb(function(){return N(function(){a(oe.F,b.s)})});this.g?c():this.o.push(c)};var Jk=function(a){var b=0,c=0,d=!1;return{add:function(){c++;return hb(function(){b++;d&&b>=c&&Ik(a)})},sh:function(){d=!0;b>=c&&Ik(a)}}};var Kk=function(){function a(d){return!Oa(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Oa(Sh.get("gtm.start"))?Sh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Hh-b)}}};var Ok={},Pk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},Qk=!1;
var Rk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||Cf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Kk();return B[b]},Sk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Pk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Tk=function(a){};
var Vk=function(a){},Uk=function(){return B.GoogleAnalyticsObject||"ga"},Wk=function(a,b){return function(){var c=Pk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var al=function(){return"&tc="+Rd.filter(function(a){return a}).length},dl=function(){2022<=bl().length&&cl()},fl=function(){el||(el=B.setTimeout(cl,500))},cl=function(){el&&(B.clearTimeout(el),el=void 0);void 0===gl||hl[gl]&&!il&&!jl||(kl[gl]||ll.bi()||0>=ml--?(Cf(1),kl[gl]=!0):(ll.Ai(),bg(bl()),hl[gl]=!0,nl=ol=pl=jl=il=""))},bl=function(){var a=gl;if(void 0===a)return"";var b=Bf("GTM"),c=Bf("TAGGING");return[ql,hl[a]?"":"&es=1",rl[a],b?"&u="+b:"",c?"&ut="+c:"",al(),il,jl,pl?pl:"",ol,nl,"&z=0"].join("")},
sl=function(){return[Ih,"&v=3&t=t","&pid="+Ua(),"&rv="+oe.Bc].join("")},tl="0.005000">Math.random(),ql=sl(),ul=function(){ql=sl()},hl={},il="",jl="",nl="",ol="",pl="",gl=void 0,rl={},kl={},el=void 0,ll=function(a,b){var c=0,d=0;return{bi:function(){if(c<a)return!1;fb()-d>=b&&(c=0);return c>=a},Ai:function(){fb()-d>=b&&(c=0);c++;d=fb()}}}(2,1E3),ml=1E3,vl=function(a,b,c){if(tl&&!kl[a]&&b){a!==gl&&(cl(),gl=a);var d,e=String(b[md.Qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;il=il?il+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(Td[g]?"1":"2")+d;nl=nl?nl+"."+h:"&ti="+h;fl();dl()}},wl=function(a,b,c){if(tl&&!kl[a]){a!==gl&&(cl(),gl=a);var d=c+b;jl=jl?jl+"."+d:"&epr="+d;fl();dl()}},xl=function(a,b,c){};
var yl=function(){return!1},zl=function(){var a={};return function(b,c,d){}};function Al(a,b,c,d){var e=Rd[a],f=Bl(a,b,c,d);if(!f)return null;var g=Zd(e[md.yf],c,[]);if(g&&g.length){var h=g[0];f=Al(h.index,{onSuccess:f,onFailure:1===h.Lf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Bl(a,b,c,d){function e(){if(f[md.ah])h();else{var w=$d(f,c,[]);var z=Gk(c.Ra,String(f[md.Qa]),Number(f[md.zf]),w[md.bh]),A=!1;w.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=fb()-D;vl(c.id,Rd[a],"5");Hk(c.Ra,z,"success",
E);g()}};w.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=fb()-D;vl(c.id,Rd[a],"6");Hk(c.Ra,z,"failure",E);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;vl(c.id,f,"1");var C=function(){var E=fb()-D;vl(c.id,f,"7");Hk(c.Ra,z,"exception",E);A||(A=!0,h())};var D=fb();try{Yd(w,c)}catch(E){C(E)}}}var f=Rd[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Vd(f))return null;var m=Zd(f[md.Af],c,[]);if(m&&m.length){var n=m[0],q=Al(n.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===n.Lf?l:q}if(f[md.uf]||f[md.eh]){var t=f[md.uf]?Sd:
c.Li,r=g,u=h;if(!t[a]){e=hb(e);var v=Cl(a,t,e);g=v.onSuccess;h=v.onFailure}return function(){t[a](r,u)}}return e}function Cl(a,b,c){var d=[],e=[];b[a]=Dl(d,e,c);return{onSuccess:function(){b[a]=El;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Fl;for(var f=0;f<e.length;f++)e[f]()}}}function Dl(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function El(a){a()}function Fl(a,b){b()};var Il=function(a,b,c){for(var d=[],e=0;e<Rd.length;e++)if(a[e]){var f=Rd[e];var g=c.add();try{var h=Al(e,{onSuccess:g,onFailure:g,terminate:g},b,e);if(h){var l=d,m=l.push,n=e,q=f["function"];if(!q)throw"Error: No function name given for function call.";var t=Td[q];m.call(l,{eg:n,Yf:t?t.priorityOverride||0:0,Kc:h})}else Gl(e,b),g()}catch(u){g()}}c.sh();d.sort(Hl);for(var r=0;r<d.length;r++)d[r].Kc();return 0<
d.length};function Hl(a,b){var c,d=b.Yf,e=a.Yf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.eg,h=b.eg;f=g>h?1:g<h?-1:0}return f}function Gl(a,b){if(!tl)return;var c=function(d){var e=b.Vd(Rd[d])?"3":"4",f=Zd(Rd[d][md.yf],b,[]);f&&f.length&&c(f[0].index);vl(b.id,Rd[d],e);var g=Zd(Rd[d][md.Af],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Jl=!1,Ol=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Jl)return!1;Jl=!0}var d=uk(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=uk(Number.MAX_SAFE_INTEGER)}tl&&!kl[b]&&gl!==b&&(cl(),gl=b,nl=il="",rl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,fl());var f=a.eventCallback,g=a.eventTimeout,h={id:b,name:c,Vd:sk(d.isAllowed),Li:[],Uf:function(){Cf(6)},Ef:Kl(b),Ra:new Fk(f,
g)},l=h.Ra.D;Ll(b,h.Ra);var m=je(h);e&&(m=Ml(m));var n=Il(m,h,l);"gtm.js"!==c&&"gtm.sync"!==c||Vk(oe.F);switch(c){case "gtm.init":Cf(19),n&&Cf(20)}return Nl(m,n)};function Kl(a){return function(b){tl&&(Mb(b)||xl(a,"input",b))}}
function Ll(a,b){Vh(a,"event",1);Vh(a,"ecommerce",1);Vh(a,"gtm");Vh(a,"eventModel");}function Ml(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Ah[String(Rd[c][md.Qa])]&&(b[c]=!0);return b}function Nl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Rd[c]&&!Bh[String(Rd[c][md.Qa])])return!0;return!1}function Pl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ch(""+c+b).href}}function Ql(a,b){return Rl()?Pl(a,b):void 0}function Rl(){var a=!1;return a};var Sl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},Tl=function(a){var b=new Sl;b.eventModel=a;return b},Ul=function(a,b){a.targetConfig=b;return a},Vl=function(a,b){a.containerConfig=b;return a},Wl=function(a,b){a.remoteConfig=b;return a},Xl=function(a,b){a.globalConfig=
b;return a},Yl=function(a,b){a.onSuccess=b;return a},Zl=function(a,b){a.setContainerTypeLoaded=b;return a},$l=function(a,b){a.getContainerTypeLoaded=b;return a},am=function(a,b){a.onFailure=b;return a};Sl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var bm=function(a){function b(e){Ya(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ya(c,function(e){d.push(e)});return d};var cm;if(3===oe.Bc.length)cm="g";else{var dm="G";cm=dm}
var em={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:cm,OPT:"o"},fm=function(a){var b=oe.F.split("-"),c=b[0].toUpperCase(),d=em[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===oe.Bc.length){var g="w";f="2"+g}else f="";return f+d+oe.Bc+e};var gm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var hm=function(){return Nf("iPhone")&&!Nf("iPod")&&!Nf("iPad")};Nf("Opera");Nf("Trident")||Nf("MSIE");Nf("Edge");!Nf("Gecko")||-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")||Nf("Trident")||Nf("MSIE")||Nf("Edge");-1!=Kf.toLowerCase().indexOf("webkit")&&!Nf("Edge")&&Nf("Mobile");Nf("Macintosh");Nf("Windows");Nf("Linux")||Nf("CrOS");var im=pa.navigator||null;im&&(im.appVersion||"").indexOf("X11");Nf("Android");hm();Nf("iPad");Nf("iPod");hm()||Nf("iPad")||Nf("iPod");Kf.toLowerCase().indexOf("kaios");var jm=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var km=function(){};var lm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},mm=function(a,b){this.o=a;this.g=null;this.D={};this.O=0;this.N=void 0===b?500:b;this.s=null};oa(mm,km);
var om=function(a){return"function"===typeof a.o.__tcfapi||null!=nm(a)};
mm.prototype.addEventListener=function(a){var b={},c=Ef(function(){return a(b)}),d=0;-1!==this.N&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.N));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=lm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{pm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};mm.prototype.removeEventListener=function(a){a&&a.listenerId&&pm(this,"removeEventListener",null,a.listenerId)};
var rm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=qm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&qm(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?qm(a.purpose.legitimateInterests,
b)&&qm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},qm=function(a,b){return!(!a||!a[b])},pm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(nm(a)){sm(a);var f=++a.O;a.D[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},nm=function(a){if(a.g)return a.g;a.g=jm(a.o,"__tcfapiLocator");return a.g},sm=function(a){a.s||(a.s=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.D[c.callId](c.returnValue,c.success)}catch(d){}},gm(a.o,a.s))};var tm=!0;var um={1:0,3:0,4:0,7:3,9:3,10:3};function vm(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var wm=vm("",550),xm=vm("",500);function ym(){var a=O.tcf||{};return O.tcf=a}
var zm=function(a,b){this.s=a;this.g=b;this.o=fb();},Am=function(a){},Bm=function(a){},Hm=function(){var a=ym(),b=new mm(B,tm?3E3:-1),c=new zm(b,a);if((Cm()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||om(b))){a.active=!0;a.$b={};Dm();var d=null;tm?d=B.setTimeout(function(){Em(a);Fm(a);d=null},xm):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Em(a),Fm(a),Am(c);
else{var f;if(!1===e.gdprApplies)f=Gm(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in um)if(um.hasOwnProperty(h))if("1"===h){var l=e,m=!0;m=void 0===m?!1:m;var n;var q=l;!1===q.gdprApplies?n=!0:(void 0===q.internalErrorState&&(q.internalErrorState=lm(q)),n="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:
!1);g["1"]=n?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!m||"string"!==typeof l.tcString||!l.tcString.length?!0:rm(l,"1",0):!1}else g[h]=rm(e,h,um[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.$b=f,Fm(a),Am(c))}}),Bm(c)}catch(e){d&&(clearTimeout(d),d=null),Em(a),Fm(a)}}};function Em(a){a.type="e";a.tcString="tcunavailable";tm&&(a.$b=Gm())}function Dm(){var a={};Eg((a.ad_storage="denied",a.wait_for_update=wm,a))}
var Cm=function(){var a=!1;a=!0;return a};function Gm(){var a={},b;for(b in um)um.hasOwnProperty(b)&&(a[b]=!0);return a}function Fm(a){var b={};Fg((b.ad_storage=a.$b["1"]?"granted":"denied",b))}
var Im=function(){var a=ym();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Jm=function(){var a=ym();return a.active?a.tcString||"":""},Km=function(a){if(!um.hasOwnProperty(String(a)))return!0;var b=ym();return b.active&&b.$b?!!b.$b[String(a)]:!0};var Lm=!1;function Mm(a){var b=String(B.location).split(/[?#]/)[0],c=oe.lg||B._CONSENT_MODE_SALT;return a?c?String(bi(b+a+c)):"0":""}
function Nm(a){function b(r){var u;O.reported_gclid||(O.reported_gclid={});u=O.reported_gclid;var v;v=Lm&&g&&(!xg()||Gg(K.C))?l+"."+(f.prefix||"_gcl")+(r?"gcu":"gcs"):l+(r?"gcu":"gcs");if(!u[v]){u[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(xg()){var z=Gg(K.C);y("gcs",Hg());r&&y("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=
""+qi());y("rnd",O.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Gg(K.C)){var A=sj("_gcl_aw");y("gclaw",A.join("."))}y("url",String(B.location).split(/[?#]/)[0]);y("dclid",Om(d,n));!z&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Jm());"1"===bj(!1)._up&&y("gtm_up","1");y("gclid",Om(d,l));y("gclsrc",
m);y("gtm",fm(!e));Lm&&g&&Gg(K.C)&&(Ci(f||{}),y("auid",xi[yi(f.prefix)]||""));var C=x+"/pagead/landing?"+w.join("&");jg(C)}}var c=!!a.Jd,d=!!a.xa,e=a.U,f=void 0===a.Gc?{}:a.Gc,g=void 0===a.Pc?!0:a.Pc,h=vj(),l=h.gclid||"",m=h.gclsrc,n=h.dclid||"",q=!c&&(!l||m&&"aw.ds"!==m?!1:!0),t=xg();if(q||t)t?Ig(function(){b();Gg(K.C)||Bg(function(r){return b(!0,r.Ff)},K.C)},[K.C]):b()}
function Om(a,b){var c=a&&!Gg(K.C);return b&&c?"0":b}var yn=function(){var a=!0;Km(7)&&Km(9)&&Km(10)||(a=!1);var b=!0;b=!1;b&&!xn()&&(a=!1);return a},xn=function(){var a=!0;Km(3)&&Km(4)||(a=!1);return a};var Wn=!1;function Xn(){var a=O;return a.gcq=a.gcq||new Yn}
var Zn=function(a,b,c){Xn().register(a,b,c)},$n=function(a,b,c,d){Xn().push("event",[b,a],c,d)},ao=function(a,b){Xn().push("config",[a],b)},bo=function(a,b,c,d){Xn().push("get",[a,b],c,d)},co=function(a){return Xn().getRemoteConfig(a)},eo={},fo=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.g=!1},go=function(a,b,c,d,e){this.type=a;this.s=b;this.U=c||"";this.g=d;this.o=e},Yn=function(){this.D={};this.o={};this.g=[];this.s={AW:!1,UA:!1}},
ho=function(a,b){var c=Rj(b);return a.D[c.containerId]=a.D[c.containerId]||new fo},io=function(a,b,c){if(b){var d=Rj(b);if(d&&1===ho(a,b).status){ho(a,b).status=2;var e={};tl&&(e.timeoutId=B.setTimeout(function(){Cf(38);fl()},3E3));a.push("require",[e],d.containerId);eo[d.containerId]=fb();if(Uj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ql(c,g)||h;Zf(l)}}}},jo=function(a,b,c,d){if(d.U){var e=ho(a,d.U),f=e.o;if(f){var g=H(c),h=H(e.targetConfig[d.U]),l=H(e.containerConfig),m=H(e.remoteConfig),n=H(a.o),q=Rh("gtm.uniqueEventId"),t=Rj(d.U).prefix,r=$l(Zl(am(Yl(Xl(Wl(Vl(Ul(Tl(g),h),l),m),n),function(){
wl(q,t,"2");}),function(){wl(q,t,"3");}),function(u,v){a.s[u]=v}),function(u){return a.s[u]});try{wl(q,t,"1");f(d.U,b,d.s,r)}catch(u){wl(q,t,"4");}}}};ba=Yn.prototype;
ba.register=function(a,b,c){var d=ho(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){H(d.remoteConfig,c);d.remoteConfig=c}var e=Rj(a),f=eo[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=Rh("gtm.uniqueEventId"),m=h,n=fb()-g;if(tl&&!kl[l]){l!==gl&&(cl(),gl=l);var q=m+"."+Math.floor(g-f)+
"."+Math.floor(n);ol=ol?ol+","+q:"&cl="+q}delete eo[e.containerId]}this.flush()}};ba.push=function(a,b,c,d){var e=Math.floor(fb()/1E3);io(this,c,b[0][K.Pa]||this.o[K.Pa]);Wn&&c&&ho(this,c).g&&(d=!1);this.g.push(new go(a,e,c,b,d));d||this.flush()};ba.insert=function(a,b,c){var d=Math.floor(fb()/1E3);0<this.g.length?this.g.splice(1,0,new go(a,d,c,b,!1)):this.g.push(new go(a,d,c,b,!1))};
ba.flush=function(a){for(var b=this,c=[],d=!1;this.g.length;){var e=this.g[0];if(e.o)Wn?!e.U||ho(this,e.U).g?(e.o=!1,this.g.push(e)):c.push(e):(e.o=!1,this.g.push(e));else switch(e.type){case "require":if(3!==ho(this,e.U).status&&!a){Wn&&this.g.push.apply(this.g,c);return}tl&&B.clearTimeout(e.g[0].timeoutId);break;case "set":Ya(e.g[0],function(t,r){H(ob(t,r),b.o)});break;case "config":var f=e.g[0],g=!!f[K.wc];delete f[K.wc];var h=ho(this,e.U),l=Rj(e.U),m=l.containerId===l.id;g||(m?h.containerConfig=
{}:h.targetConfig[e.U]={});h.g&&g||jo(this,K.ja,f,e);h.g=!0;delete f[K.Fb];m?H(f,h.containerConfig):H(f,h.targetConfig[e.U]);Wn&&(d=!0);break;case "event":jo(this,e.g[1],e.g[0],e);break;case "get":var n={},q=(n[K.Ea]=e.g[0],n[K.Da]=e.g[1],n);jo(this,K.Ma,q,e)}this.g.shift()}Wn&&(this.g.push.apply(this.g,c),d&&this.flush())};ba.getRemoteConfig=function(a){return ho(this,a).remoteConfig};function ko(a,b,c){};function lo(a,b,c,d){};function mo(a){};var no=function(a,b,c){function d(f,g){var h=f[g];h=kg(f,g);return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||eg(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},oo=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},po=function(a,b,c){oo(a)[b]=c},qo=function(a,b,c,d){var e=oo(a),f=gb(e,b,d);e[b]=c(f)},ro=function(a,b,c){var d=oo(a);return gb(d,b,c)};var so={},to=[];
var Ao=function(a,b){};

function Do(a,b){};var Eo=/^\s*$/,Fo,Go=!1;
function Ro(a,b){}function So(a,b,c){};var To=!!B.MutationObserver,Uo=void 0,Vo=function(a){if(!Uo){var b=function(){var c=M.body;if(c)if(To)(new MutationObserver(function(){for(var e=0;e<Uo.length;e++)N(Uo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;cg(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Uo.length;e++)N(Uo[e])}))})}};Uo=[];M.body?b():N(b)}Uo.push(a)};var Xo=["www.youtube.com","www.youtube-nocookie.com"],Yo,Zo=!1,$o=0;
function jp(a,b){}function kp(a,b){
return!0};function lp(a,b,c){};function mp(a,b){var c;return c};function np(a){};function op(a){};var pp=!1,qp=[];function rp(){if(!pp){pp=!0;for(var a=0;a<qp.length;a++)N(qp[a])}}var sp=function(a){pp?N(a):qp.push(a)};function tp(a){J(G(this),["listener:!Fn"],arguments);lf(this,"process_dom_events","window","load");sp(Jb(a))};function up(a,b){var c;var e=!1;var f=Ib(c,this.g,e);void 0===f&&void 0!==c&&Cf(45);return f};function vp(a){var b;var f=!1;var g=Ib(b,this.g,f);void 0===g&&void 0!==b&&Cf(45);return g};function wp(a,b){var c=null,d=!1;
return Ib(c,this.g,d)};function xp(a){var b;var h=!1;return Ib(b,this.g,h)};var yp=function(a){var b;return b};function zp(a,b){b=void 0===b?!0:b;var c;return c};function Ap(a){var b=null;return b};function Bp(a,b){var c;return c};function Cp(a,b){var c;return c};function Dp(a){var b="";return b};function Ep(a,b){var c;return c};function Fp(a){var b="";return b};function Gp(){lf(this,"get_user_agent");return B.navigator.userAgent};function Hp(a,b){};var Ip={};
function Jp(a,b,c,d){J(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);lf(this,"inject_script",a);var e=this.g,f=function(){b instanceof tb&&b.s(e)},g=function(){c instanceof tb&&c.s(e)};if(!d){Zf(a,f,g);return}var h=d;Ip[h]?(Ip[h].onSuccess.push(f),Ip[h].onFailure.push(g)):(Ip[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Ip[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);return 0}},
g=function(){for(var l=Ip[h].onFailure,m=0;m<l.length;m++)N(l[m]);Ip[h]=null},Zf(a,f,g));};function Kp(a){var b=!0;return b};var Lp=function(){return!1},Mp={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Np(){};function Op(a){var b=void 0;return b};function Pp(a,b){var c=!1;return c};function Qp(){var a="";return a};function Rp(){var a="";return a};function Sp(a,b,c,d){d=void 0===d?!1:d;};function Tp(a,b,c){};function Up(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Vp(a){J(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.Sb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==K.ze&&lf(this,"access_consent",e,"write")}Eg(Jb(a))};function Wp(a,b,c){J(G(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);lf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=B,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Jb(b,this.g,d),!0;return!1};function Xp(a,b,c){}
;var Yp=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function Zp(a,b,c,d){var e=this;};function $p(a,b,c){}
;var aq={},bq={};aq.getItem=function(a){var b=null;return b};
aq.setItem=function(a,b){};
aq.removeItem=function(a){};aq.clear=function(){};var cq=function(a){var b;return b};function dq(a){J(G(this),["consentSettings:!DustMap"],arguments);var b=Jb(a),c;for(c in b)b.hasOwnProperty(c)&&lf(this,"access_consent",c,"write");Fg(b)};var gd=function(){var a=new wf;Uj()?(a.add("injectHiddenIframe",Ma),a.add("injectScript",Ma)):(a.add("injectHiddenIframe",Hp),a.add("injectScript",Jp));var b=Tp;a.add("Math",df());a.add("TestHelper",yf());a.add("addEventCallback",mo);a.add("aliasInWindow",kp);a.add("assertApi",$e);a.add("assertThat",af);a.add("callInWindow",
mp);a.add("callLater",np);a.add("copyFromDataLayer",up);a.add("copyFromWindow",vp);a.add("createArgumentsQueue",wp);a.add("createQueue",xp);a.add("decodeUri",ef);a.add("decodeUriComponent",ff);a.add("encodeUri",gf);a.add("encodeUriComponent",hf);a.add("fail",jf);a.add("fromBase64",yp,!("atob"in B));a.add("generateRandom",kf);a.add("getContainerVersion",mf);a.add("getCookieValues",zp);a.add("getQueryParameters",Bp);a.add("getReferrerQueryParameters",Cp);a.add("getReferrerUrl",Dp);a.add("getTimestamp",
nf);a.add("getTimestampMillis",nf);a.add("getType",of);a.add("getUrl",Fp);a.add("localStorage",Mp,!Lp());a.add("logToConsole",Np);a.add("makeInteger",qf);a.add("makeNumber",rf);a.add("makeString",sf);a.add("makeTableMap",tf);a.add("mock",vf);a.add("queryPermission",Pp);a.add("readCharacterSet",Qp);a.add("readTitle",Rp);a.add("sendPixel",b);a.add("setCookie",Up);a.add("setInWindow",Wp);a.add("sha256",Zp);a.add("templateStorage",aq);a.add("toBase64",cq,!("btoa"in B));a.add("JSON",pf(function(c){var d=this.g.g;d&&d.log.call(this,"error",c)}));a.add("parseUrl",Op);
return function(c){var d;
if(a.g.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.o.hasOwnProperty(c)){var f=!1,g=this.g.g;if(g){var h=g.Rb();if(h){0!==h.indexOf("__cvt_")&&(f=!0);}}e=f}if(e)d=a.o.hasOwnProperty(c)?a.o[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var ed,se;
function eq(){var a=data.runtime||[],b=data.runtime_lines;ed=new cd;fq();Id=function(e,f,g){gq(f);var h=new yb;Ya(f,function(r,u){var v=Ib(u);void 0===v&&void 0!==u&&Cf(44);h.set(r,v)});ed.g.g.N=fe();var l={th:te(e),eventId:void 0!==g?g.id:void 0,Lb:void 0!==g?function(r){return g.Ra.Lb(r)}:void 0,Rb:function(){return e},log:function(){}};if(yl()){var m=
zl(),n=void 0,q=void 0;l.ia={Mb:{},mb:function(r,u,v){1===u&&(n=r);7===u&&(q=v);m(r,u,v)},Zd:uf()};l.log=function(r,u){if(n){var v=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:q,message:v})}}}var t=fd(l,[e,h]);ed.g.g.N=void 0;t instanceof za&&"return"===t.g&&(t=t.o);return Jb(t)};kd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ra(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ce(d,b[c]);ed.Kc(d)}}
function gq(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Na(b)&&(a.gtmOnSuccess=function(){N(b)});Na(c)&&(a.gtmOnFailure=function(){N(c)})}function fq(){var a=ed;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;ld(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function hq(a){void 0!==a&&Ya(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Kh[e]=Kh[e]||[];Kh[e].push(b)}})};var iq="HA GF G UA AW DC".split(" "),jq=!1,kq={},lq=!1;function mq(a,b){var c={event:a};b&&(c.eventModel=H(b),b[K.ld]&&(c.eventCallback=b[K.ld]),b[K.qc]&&(c.eventTimeout=b[K.qc]));return c}function nq(){return jq}
var qq={config:function(a){var b;return b},consent:function(a){function b(){nq()&&
H(a[2],{subcommand:a[1]})}if(3===a.length){Cf(39);var c=Lh(),d=a[1];"default"===d?(b(),Eg(a[2])):"update"===d&&(b(),Fg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&p(b)){var c;if(2<a.length){if(!Hb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=mq(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return lq=!0,nq(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=se.o;d.g[b]?d.g[b].push(c):d.g[b]=[c]}},set:function(a){var b;2==a.length&&Hb(a[1])?b=H(a[1]):3==a.length&&p(a[1])&&(b={},Hb(a[2])||Ra(a[2])?b[a[1]]=
H(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},rq={policy:!0};var sq=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},uq=function(a){var b=tq(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Lq=function(a){if(Kq(a))return a;this.g=a};Lq.prototype.Uh=function(){return this.g};var Kq=function(a){return!a||"object"!==Fb(a)||Hb(a)?!1:"getUntrustedUpdateValue"in a};Lq.prototype.getUntrustedUpdateValue=Lq.prototype.Uh;var Mq=[];var Pq=!1,Qq=function(a){return B["dataLayer"].push(a)},Rq=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Sq(a){var b=a._clear;Ya(a,function(d,e){"_clear"!==d&&(b&&Uh(d,void 0),Uh(d,e))});Gh||(Gh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Lh(),a["gtm.uniqueEventId"]=c,Uh("gtm.uniqueEventId",c));return Ol(a)}function Tq(){var a=Mq[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Za(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Uq(){for(var a=!1;!Pq&&0<Mq.length;){
Pq=!0;delete Oh.eventModel;Qh();var d=Mq.shift();if(null!=d){var e=Kq(d);if(e){var f=d;d=Kq(f)?f.getUntrustedUpdateValue():void 0;for(var g=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],h=0;h<g.length;h++){var l=g[h],m=Rh(l,1);if(Ra(m)||Hb(m))m=H(m);Ph[l]=m}}try{if(Na(d))try{d.call(Sh)}catch(y){}else if(Ra(d)){var n=d;if(p(n[0])){var q=n[0].split("."),t=q.pop(),r=n.slice(1),u=Rh(q.join("."),2);if(void 0!==u&&null!==u)try{u[t].apply(u,r)}catch(y){}}}else{if(Za(d)){a:{var v=
d;if(v.length&&p(v[0])){var w=qq[v[0]];if(w&&(!e||!rq[v[0]])){d=w(v);break a}}d=void 0}if(!d){Pq=!1;continue}}a=Sq(d)||a}}finally{e&&Qh(!0)}}Pq=!1}return!a}function Vq(){var a=Uq();try{sq(B["dataLayer"],oe.F)}catch(b){}return a}
var Xq=function(){var a=Xf("dataLayer",[]),b=Xf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Dk(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});sp(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Lq(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Mq.push.apply(Mq,e);if(300<
this.length)for(Cf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Uq()&&h};var d=a.slice(0);Mq.push.apply(Mq,d);Wq()&&N(Vq)},Wq=function(){var a=!0;return a};var Yq={};Yq.xc=new String("undefined");
var Zq=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Yq.xc?b:a[d]);return c.join("")}};Zq.prototype.toString=function(){return this.g("undefined")};Zq.prototype.valueOf=Zq.prototype.toString;Yq.hh=Zq;Yq.Bd={};Yq.Hh=function(a){return new Zq(a)};var $q={};Yq.Bi=function(a,b){var c=Lh();$q[c]=[a,b];return c};Yq.If=function(a){var b=a?0:1;return function(c){var d=$q[c];if(d&&"function"===typeof d[b])d[b]();$q[c]=void 0}};Yq.ai=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Yq.wi=function(a){if(a===Yq.xc)return a;var b=Lh();Yq.Bd[b]=a;return'google_tag_manager["'+oe.F+'"].macro('+b+")"};Yq.li=function(a,b,c){a instanceof Yq.hh&&(a=a.g(Yq.Bi(b,c)),b=Ma);return{Td:a,onSuccess:b}};var ar=["input","select","textarea"],br=["button","hidden","image","reset","submit"],cr=function(a){var b=a.tagName.toLowerCase();return!Ta(ar,function(c){return c===b})||"input"===b&&Ta(br,function(c){return c===a.type.toLowerCase()})?!1:!0},dr=function(a){return a.form?a.form.tagName?a.form:M.getElementById(a.form):ig(a,["form"],100)},er=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(cr(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var pr=B.clearTimeout,qr=B.setTimeout,T=function(a,b,c){if(Uj()){b&&N(b)}else return Zf(a,b,c)},rr=function(){return new Date},sr=function(){return B.location.href},tr=function(a){return ah(ch(a),"fragment")},ur=function(a){return bh(ch(a))},vr=function(a,b){return Rh(a,b||2)},wr=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Qq(a)):d=Qq(a);return d},xr=function(a,b){B[a]=b},V=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},yr=function(a,b,c){return ei(a,b,void 0===c?!0:!!c)},zr=function(a,b,c){return 0===ni(a,b,c)},Ar=function(a,b){if(Uj()){b&&N(b)}else ag(a,b)},Br=function(a){return!!ro(a,"init",!1)},Cr=function(a){po(a,"init",!0)},Dr=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Eh;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(Wj("https://","http://",c))},Er=function(a,
b){var c=a[b];c=kg(a,b);return c},Fr=function(a,b,c){tl&&(Mb(a)||xl(c,b,a))};
var Gr=Yq.li;function cs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var ds=new Wa;function es(a,b){function c(g){var h=ch(g),l=ah(h,"protocol"),m=ah(h,"host",!0),n=ah(h,"port"),q=ah(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function fs(a){return gs(a)?1:0}
function gs(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ra(c)){for(var d=0;d<c.length;d++){var e=H(a,{});H({arg1:c[d],any_of:void 0},e);if(fs(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return cs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Sa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var q=String(c)+n,t=ds.get(q);t||(t=new RegExp(c,n),ds.set(q,t));m=t.test(b)}catch(r){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return es(b,c)}return!1};var hs=encodeURI,Y=encodeURIComponent,is=bg;var js=function(a,b){if(!a)return!1;var c=ah(ch(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ks=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Qt(){return B.gaGlobal=B.gaGlobal||{}}var Rt=function(){var a=Qt();a.hid=a.hid||Ua();return a.hid},St=function(a,b){var c=Qt();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Au=window,Bu=document,Cu=function(a){var b=Au._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Au["ga-disable-"+a])return!0;try{var c=Au.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=ci("AMP_TOKEN",String(Bu.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Bu.getElementById("__gaOptOutExtension")?!0:!1};var Du={};function Fu(a){delete a.eventModel[K.Fb];Hu(a.eventModel)}var Hu=function(a){Ya(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[K.ra]||{};Ya(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Ku=function(a,b,c){$n(b,c,a)},Lu=function(a,b,c){$n(b,c,a,!0)},Su=function(a,b){};
function Mu(a,b){}var Z={h:{}};
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],A=x.split(","),C=0;C<A.length;C++){var D=Number(A[C]);if(isNaN(D))return[];n.test(A[C])||z.push(D)}return z}function c(){var x=0,z=0;return function(){var A=Pg(),C=A.height;x=Math.max(v.scrollLeft+A.width,x);z=Math.max(v.scrollTop+C,z);return{Ld:x,Md:z}}}function d(){r=V("self");
u=r.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,A,C){var D=l(z),E={},I;for(I in D){E.Xa=I;if(D.hasOwnProperty(E.Xa)){var P=Number(E.Xa);x<P||(wr({event:"gtm.scrollDepth","gtm.scrollThreshold":P,"gtm.scrollUnits":A.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":D[E.Xa].join(",")}),qo("sdl",z,function(S){return function(aa){delete aa[S.Xa];return aa}}(E),{}))}E={Xa:E.Xa}}}function f(){var x=y(),z=x.Ld,A=x.Md,C=z/v.scrollWidth*100,D=A/v.scrollHeight*100;e(z,"horiz.pix",
q.zc,t.lf);e(C,"horiz.pct",q.yc,t.lf);e(A,"vert.pix",q.zc,t.Bf);e(D,"vert.pct",q.yc,t.Bf);po("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&r.addEventListener&&(x=50,z=!0);var A=0,C=!1,D=function(){C?A=qr(D,x):(A=0,f(),Br("sdl")&&!a()&&(dg(r,"scroll",E),dg(r,"resize",E),po("sdl","init",!1)));C=!1},E=function(){z&&y();A?C=!0:(A=qr(D,x),po("sdl","pending",!0))};return E}function h(x,z,A){if(z){var C=b(String(x));qo("sdl",A,function(D){for(var E=0;E<C.length;E++){var I=
String(C[E]);D.hasOwnProperty(I)||(D[I]=[]);D[I].push(z)}return D},{})}}function l(x){return ro("sdl",x,{})}function m(x){N(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,A=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,D=x.vtp_verticalThresholdUnits,E=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.zc:h(A,z,"horiz.pix");break;case q.yc:h(C,z,"horiz.pct")}switch(D){case q.zc:h(E,z,"vert.pix");break;case q.yc:h(I,
z,"vert.pct")}Br("sdl")?ro("sdl","pending")||(w||(d(),w=!0),N(function(){return f()})):(d(),w=!0,v&&(Cr("sdl"),po("sdl","pending",!0),N(function(){f();if(a()){var P=g();cg(r,"scroll",P);cg(r,"resize",P)}else po("sdl","init",!1)})))}var n=/^\s*$/,q={yc:"PERCENT",zc:"PIXELS"},t={Bf:"vertical",lf:"horizontal"},r,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.i="sdl";Z.__sdl.m=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):sp(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.i="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Fr(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.h.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.i="sp";Z.__sp.m=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=V("google_trackConversion");if(Na(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=ks(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:fm()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Jm();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){T(b,d,c)};xg()?Ig(function(){Gg(K.C)?e():Bg(e,K.C)},[K.C]):(Kk(),e())})}();Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.i="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){Fr(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.i="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){return String(Wh(a.vtp_gtmEventId,"event"))})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.i="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=vr("gtm.referrer",1)||M.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ah(ch(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):ur(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=no(c,"gtm.click");wr(d)}}(function(b){Z.__cl=b;Z.__cl.i="cl";Z.__cl.m=!0;Z.__cl.priorityOverride=0})(function(b){if(!Br("cl")){var c=V("document");cg(c,"click",a,!0);Cr("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.i="j";Z.__j.m=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Fr(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.i="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return yr(a.vtp_name,vr("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.i="access_globals";Z.__access_globals.m=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,q,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===q){if(-1<Sa(e,t))return}else if("write"===q){if(-1<Sa(f,t))return}else if("readwrite"===q){if(-1<Sa(f,t)&&-1<Sa(e,t))return}else if("execute"===q){if(-1<Sa(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(n,{},"Prohibited "+q+" on global variable: "+
t+".");},M:a}})}();Z.h.r=["google"],function(){(function(a){Z.__r=a;Z.__r.i="r";Z.__r.m=!0;Z.__r.priorityOverride=0})(function(a){return Ua(a.vtp_min,a.vtp_max)})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.i="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vr("gtm.url",1))||sr();var d=b[a("vtp_component")];if(!d||"URL"==d)return ur(String(c));var e=ch(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ra(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var q=ah(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=ah(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.i="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vr(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Fr(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(q){return Gg(q)}function b(q,t){if(xg()&&!e[q]){var r=function(){var u=Pk(),v="gtm"+Lh(),w=m(t),y={name:v};l(w,y,!0);u("create",q,y);u(function(){u.remove(v)})};Bg(r,K.J);Bg(r,K.C);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var w=g[v]?bb(q[v]):q[v];"anonymizeIp"!=v||w||
(w=void 0);t[v]=w;u++}return u},m=function(q){var t={};q.vtp_gaSettings&&H(ks(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);H(ks(q.vtp_fieldsToSet,"fieldName","value"),t);Gg(K.J)||(t.storage="none");Gg(K.C)||(t.allowAdFeatures=!1,t.storeGac=!1);yn()||(t.allowAdFeatures=!1);xn()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},n=function(q){function t(ia,W){void 0!==W&&E("set",ia,W)}var r={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;H(ks(y.vtp_contentGroup,"index","group"),u);H(ks(y.vtp_dimension,"index","dimension"),v);H(ks(y.vtp_metric,"index","metric"),w);var x=H(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=
void 0;x.vtp_metric=void 0;q=H(q,x)}H(ks(q.vtp_contentGroup,"index","group"),u);H(ks(q.vtp_dimension,"index","dimension"),v);H(ks(q.vtp_metric,"index","metric"),w);var z=m(q),A=Rk(q.vtp_functionName);if(Na(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Lh(),C=D+".");var E=function(ia){var W=[].slice.call(arguments,0);W[0]=C+W[0];A.apply(window,W)},I=function(ia,W){return void 0===W?W:ia(W)},P=function(ia,W){if(W)for(var Va in W)W.hasOwnProperty(Va)&&
E("set",ia+Va,W[Va])},S=function(){var ia={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},W={},Va=(W[K.fd]="click",W[K.Ba]="detail",W[K.Za]="add",W[K.$a]="remove",W[K.La]="checkout",W[K.oa]="purchase",W[K.ab]="refund",W),xb={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_category:"category",item_variant:"variant",index:"position",
promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Qb=function(Qa,kb){for(var lb in Qa)ia.hasOwnProperty(lb)&&(Qa[kb]=Qa[kb]||{},Qa[kb].actionField=Qa[kb].actionField||{},Qa[kb].actionField[ia[lb]]=Qa[lb])},pb=function(Qa){for(var kb=[],lb={},rb=0;rb<Qa.length;lb={tb:lb.tb},rb++)lb.tb={},Ya(Qa[rb],function(Rb){return function(Hc,jd){xb.hasOwnProperty(Hc)?Rb.tb[xb[Hc]]=jd:Rb.tb[Hc]=jd}}(lb)),kb.push(lb.tb);return kb},qb=function(Qa,kb,lb){if(!Hb(kb))return!1;
for(var rb=gb(Object(kb),lb,[]),Rb=0;rb&&Rb<rb.length;Rb++)E(Qa,rb[Rb]);return!!rb&&0<rb.length},U;if(q.vtp_useEcommerceDataLayer){var $a=!1;q.vtp_useGA4SchemaForEcommerce&&(U=Wh(q.vtp_gtmEventId,"eventModel"),$a=!!U);$a||(U=vr("ecommerce",1))}else q.vtp_ecommerceMacroData&&(U=q.vtp_ecommerceMacroData.ecommerce,!U&&q.vtp_useGA4SchemaForEcommerce&&
(U=q.vtp_ecommerceMacroData));if(!Hb(U))return;U=Object(U);if(q.vtp_useGA4SchemaForEcommerce){U=H(U);U.currencyCode=U.currencyCode||U.currency;var zb=String(Wh(q.vtp_gtmEventId,"event"));if("view_item_list"===zb&&!U.impressions&&U.items)U.impressions=pb(U.items);else if("view_promotion"===zb&&!U.promoView&&U.items)U.promoView={},U.promoView.promotions=pb(U.items);else if("select_promotion"===zb&&!U.promoClick)U.items&&(U.promoClick={},U.promoClick.promotions=pb(U.items)),Qb(U,"promoClick");else if(Va.hasOwnProperty(zb)){var hd=
Va[zb];U[hd]||(U.items&&(U[hd]={},U[hd].products=pb(U.items)),Qb(U,hd))}}var id=gb(z,"currencyCode",U.currencyCode);void 0!==id&&E("set","&cu",id);qb("ec:addImpression",U,"impressions");if(qb("ec:addPromo",U[U.promoClick?"promoClick":"promoView"],"promotions")&&U.promoClick){E("ec:setAction","promo_click",U.promoClick.actionField);return}for(var Kd="detail checkout checkout_option click add remove purchase refund".split(" "),Ld="refund purchase remove checkout checkout_option add click detail".split(" "),
Md=0;Md<Kd.length;Md++){var Gc=U[Kd[Md]];if(Gc){qb("ec:addProduct",Gc,"products");E("ec:setAction",Kd[Md],Gc.actionField);if(tl)for(var Nd=0;Nd<Ld.length;Nd++){var Od=U[Ld[Nd]];if(Od){Od!==Gc&&Cf(13);break}}break}}},aa={name:D};l(z,aa,!0);var sa=q.vtp_trackingId||r.trackingId;A("create",sa,aa);E("set","&gtm",fm(!0));
xg()&&(E("set","&gcs",Hg()),b(sa,q));z._x_19&&(null==Wf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(Wk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(ia,W){void 0!==q[W]&&E("set",ia,q[W])})("nonInteraction","vtp_nonInteraction");P("contentGroup",u);P("dimension",v);P("metric",w);var R={};l(z,R,!1)&&E("set",R);var L;
q.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var ia=z&&z.hitCallback;Na(ia)&&ia();q.vtp_gtmOnSuccess()});var X=function(ia,W){return void 0===q[ia]?r[W]:q[ia]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(E("require","ec","ec.js"),S());var fa={hitType:"event",eventCategory:String(X("vtp_eventCategory","category")),eventAction:String(X("vtp_eventAction","action")),eventLabel:I(String,
X("vtp_eventLabel","label")),eventValue:I(ab,X("vtp_eventValue","value"))};l(L,fa,!1);E("send",fa);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(E("require","ec","ec.js"),S());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var La="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:La})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Pa="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:Pa})}L?E("send","pageview",L):E("send","pageview");bb(z.urlPassthrough)&&Tk(C)}if(!c){var db=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(db="internal/"+db);c=!0;var Lb=Ql(z._x_19,"/analytics.js"),Xb=Wj("https:","http:","//www.google-analytics.com/"+db,z&&!!z.forceSSL);T("analytics.js"===db&&Lb?Lb:Xb,function(){var ia=
Pk();ia&&ia.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.i="ua";Z.__ua.m=!0;Z.__ua.priorityOverride=0})(function(q){Ig(function(){n(q)},[K.J,K.C])})}();


Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.i="inject_script";Z.__inject_script.m=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(Re(ch(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},M:a}})}();


Z.h.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.i="cid";Z.__cid.m=!0;Z.__cid.priorityOverride=0})(function(){return oe.F})}();

Z.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"],b=!1;(function(c){Z.__gclidw=c;Z.__gclidw.i="gclidw";Z.__gclidw.m=!0;Z.__gclidw.priorityOverride=100})(function(c){N(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||ij())&&Bj(a,l));yj(l);Dj(["aw","dc"],l);b?Nj(h,l):Oj(h,l);var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var n=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Cj(a,n,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var q=vr(K.P);Nm({Jd:!1,xa:void 0!=
q&&!1!==q,Gc:l,Pc:!0});c.vtp_enableUrlPassthroughFeature&&c.vtp_enableUrlPassthrough&&Fj()});}();


Z.h.aev=["google"],function(){function a(r,u){var v=Wh(r,"gtm");if(v)return v[u]}function b(r,u,v,w){w||(w="element");var y=r+"."+u,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(r,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var A=q.shift();delete n[A]}}return x}function c(r,u,v){var w=a(r,t[u]);return void 0!==w?w:v}function d(r,u){if(!r)return!1;var v=e(sr());Ra(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(A){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(r))return!1}else{var z=x;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;w.push(e(z))}}}return!js(r,w)}function e(r){m.test(r)||(r="http://"+r);return ah(ch(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+r,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return eg(r,"value");case "button":return fg(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)cr(r.elements[v])&&
u++;return u}}function l(r,u,v){var w=a(r,"interactedFormField");return w&&eg(w,u)||v}var m=/^https?:\/\//i,n={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.i="aev";Z.__aev.m=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,w=r.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,w,fg)||v;case "URL":var x;a:{var z=String(a(u,"elementUrl")||v||""),A=ch(z),C=String(r.vtp_component||"URL");switch(C){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,r.vtp_affiliatedDomains);break a;default:x=ah(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
w,v);else{var E=r.vtp_attribute,I=a(u,"element");D=I&&eg(I,E)||v||""}return D;case "MD":var P=r.vtp_mdValue,S=b(u,"MD",lr);return P&&S?or(S,P)||v:S||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var aa=c(u,w,v);Fr(aa,"aev",r.vtp_gtmEventId);return aa}})}();Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.i="gas";Z.__gas.m=!0;Z.__gas.priorityOverride=0})(function(a){var b=H(a),c=b;c[md.Qa]=null;c[md.Yg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=V("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.i="awct";Z.__awct.m=!0;Z.__awct.priorityOverride=
0})(function(g){function h(A,C,D){return"DATA_LAYER"===A?vr(D):g[C]}function l(){v("gdpr_consent",Jm());}function m(){var A=[];return A}function n(A){var C=!0,D=[];if(A){D=m();}C&&b.push(t)}function q(){}Kk();var t={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:fm()};t.google_gtm_experiments={capi:!0};
g.vtp_rdp&&(t.google_restricted_data_processing=!0);void 0!=vr(K.P)&&!1!==vr(K.P)&&(t.google_gtm_url_processor=function(A){return A=kk(A)});var r=function(A){return function(C,D,E){var I=h(A,D,E);I&&(t[C]=I)}},u=r("JSON");u("google_conversion_currency","vtp_currencyCode");u("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(u=r(g.vtp_productReportingDataSource),u("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),u("google_basket_feed_country","vtp_awFeedCountry",
"aw_feed_country"),u("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),u("google_basket_discount","vtp_discount","discount"),u("google_conversion_items","vtp_items","items"),t.google_conversion_items&&t.google_conversion_items.map&&(t.google_conversion_items=t.google_conversion_items.map(function(A){return{value:A.price,quantity:A.quantity,item_id:A.id}})));var v=function(A,C){void 0!==C&&((t.google_additional_conversion_params=t.google_additional_conversion_params||{})[A]=C)},
w=function(A){return function(C,D,E,I){var P=h(A,D,E);I(P)&&v(C,P)}};(function(){if(!g.vtp_enableShippingData)return;v("delopc",g.vtp_deliveryPostalCode);v("oedeld",g.vtp_estimatedDeliveryDate);v("delc",g.vtp_deliveryCountry);v("shf",g.vtp_shippingFee);if(g.vtp_enableProductReporting){var A=
h(g.vtp_productReportingDataSource,"vtp_items","items");v("iedeld",mk(A))}})();g.vtp_transportUrl&&(t.google_transport_url=g.vtp_transportUrl);var z=Ql(g.vtp_transportUrl,"/pagead/conversion_async.js");z||(z=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(u=w(g.vtp_newCustomerReportingDataSource),u("vdnc",
"vtp_awNewCustomer","new_customer",function(A){return void 0!=A&&""!==A}),u("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(A){return void 0!=A&&""!==A}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(t.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),t.google_read_gcl_cookie_opt_out=!1):t.google_read_gcl_cookie_opt_out=!0;"1"===bj(!1)._up&&v("gtm_up","1");l();(function(){xg()?Ig(function(){l();var A=Gg(K.C),C=!A&&
void 0!=vr(K.P)&&!1!==vr(K.P);!g.vtp_transportUrl&&C&&(t.google_transport_url="https://pagead2.googlesyndication.com/");v("gcs",Hg());q();n(A);A||Bg(function(){l();t=H(t);!g.vtp_transportUrl&&t.google_transport_url&&delete t.google_transport_url;v("gcs",Hg());q();v("gcu","1");n(!0)},K.C)},[K.C]):n(!0)})();a||(a=!0,T(z,f(),e(z)))})}();





Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=M.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Yf(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Dk(function(){var g=O.postscribe,h={done:e},l=M.createElement("div");l.style.display="none";l.style.visibility="hidden";M.body.appendChild(l);try{g(l,d,h)}catch(m){N(f)}})};var c=function(d){if(M.body){var e=d.vtp_gtmOnFailure,f=Gr(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.Td,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(M.body,gg(g),h,e)()}else qr(function(){c(d)},200)};Z.__html=c;Z.__html.i="html";
Z.__html.m=!0;Z.__html.priorityOverride=0}();


Z.h.automl=["google"],function(){(function(a){Z.__automl=a;Z.__automl.i="automl";Z.__automl.m=!0;Z.__automl.priorityOverride=0})(function(a){function b(n,q,t){var r="https://recommendationengine.googleapis.com/v1alpha/catalogs/"+encodeURIComponent(n.Ob)+"/userEvents:collect?key="+encodeURIComponent(n.Nb)+"&url="+encodeURIComponent(q.substring(0,1500))+"&user_event="+encodeURIComponent(JSON.stringify(n.Wb))+"&ets="+t;is(r,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}function c(n,q,t){var r="https://recommendationengine.googleapis.com/v1beta1/projects/"+
encodeURIComponent(n.ie)+"/locations/global/catalogs/"+encodeURIComponent(n.Ob)+"/eventStores/"+encodeURIComponent(n.Lh)+"/userEvents:collect?key="+encodeURIComponent(n.Nb)+"&uri="+encodeURIComponent(q.substring(0,1500))+"&user_event="+encodeURIComponent(JSON.stringify(n.Wb))+"&ets="+t;is(r,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)}function d(){for(var n=Kg('script[type="application/ld+json"]'),q=n.length-1;0<=q;--q){var t=fg(n[q]);try{if(!(5120<t.length)&&"Product"===JSON.parse(t)["@type"])return t}catch(r){}}}
function e(n,q,t,r){var u={eventType:t},v=[],w={},y=r||"USD",x={},z=function(A){var C={},D={};Ya(A,function(E,I){if("id"===E)x.id=I;else if("revenue"===E)""!==I&&(x.revenue=I);else if("tax"===E)""!==I&&(x.taxes=x.taxes||{},x.taxes.taxes=I);else if("shipping"===E)""!==I&&(x.costs=x.costs||{},x.costs.shipping=I);else{var P="ecommerce.actionField."+E;p(I)?C[P]={value:[I]}:"number"===typeof I&&(D[P]={value:[I]})}});void 0===x.revenue&&(x.revenue=0);void 0===x.currencyCode&&(x.currencyCode=y);w.eventAttributes=
{categoricalFeatures:C,numericalFeatures:D}};(function(A){for(var C={},D=0;D<A.length;C={W:C.W,ic:C.ic,kc:C.kc},D++){var E=A[D];C.W={};C.ic={};C.kc={};Ya(E,function(I){return function(P,S){if("id"===P)I.W.id=S;else if("price"===P)""!==S&&(I.W.displayPrice=S);else if("quantity"===P)""!==S&&(I.W.quantity=S);else{var aa="ecommerce.products."+P;p(S)?I.ic[aa]={value:[S]}:"number"===typeof S&&(I.kc[aa]={value:[S]})}}}(C));void 0!=C.W.id&&(void 0===C.W.quantity&&(C.W.quantity=1),void 0===C.W.currencyCode&&
(C.W.currencyCode=y),C.W.itemAttributes={categoricalFeatures:C.ic,numericalFeatures:C.kc},v.push(C.W))}})(n);u.productEventDetail={productDetails:v};"purchase-complete"===t&&(z(q),u.productEventDetail.purchaseTransaction=x);u.eventDetail=w;return u}function f(n){var q=n.currencyCode,t=function(r,u,v){var w=n[r];if(w&&"object"==typeof w.products){var y;(void 0===v?0:v)&&(y=n.actionField);var x=e(w.products,y,u,q);g(x)}};t("detail","detail-page-view");t("add","add-to-cart");t("purchase","purchase-complete",
!0)}function g(n){function q(u,v){var w=r[u+"."+v];w&&(n[u]=n[u]||{},n[u][v]=w)}function t(){var u=d();if(void 0!=u){var v=function(x,z){return x[z]=x[z]||{}},w=v(n,"eventDetail"),y=v(w,"eventAttributes");v(y,"categoricalFeatures").ProductSchema={value:[u]}}}var r=ks(a.vtp_userEventOverwrites||[],"field","value")||{};(function(){var u=r.eventType;u&&(n.eventType=u)})();q("userInfo",
"visitorId");q("userInfo","userId");q("eventDetail","recommendationToken");q("eventDetail","experimentIds");if("V1BETA1"===a.vtp_automlApiVersion){c({Nb:a.vtp_automlApiKey,Wb:n,Ob:a.vtp_automlCatalogId,ie:a.vtp_automlProjectId,Lh:a.vtp_automlEventStoreId},sr(),rr().getTime())}else void 0===a.vtp_automlApiVersion||"V1ALPHA"===a.vtp_automlApiVersion?b({Nb:a.vtp_automlApiKey,
Wb:n,Ob:a.vtp_automlCatalogId},sr(),Date.now()):N(a.vtp_gtmOnFailure)}var h=a.vtp_userEventDataSource;if("ECOMMERCE_DATA_LAYER"===h||"ECOMMERCE_USER_VARIABLE"===h){if("V1BETA1"!=a.vtp_automlApiVersion){N(a.vtp_gtmOnFailure);return}var l;"ECOMMERCE_DATA_LAYER"===h?l=vr("ecommerce"):a.vtp_ecommerceMacroData&&(l=a.vtp_ecommerceMacroData.ecommerce);if(!Hb(l)){N(a.vtp_gtmOnFailure);return}f(l)}else{var m;"DATA_LAYER"===h?m=vr("automl",1):h&&(m=h.automl);if(!Hb(m)){
N(a.vtp_gtmOnFailure);return}g(m)}N(a.vtp_gtmOnSuccess)})}();


Z.h.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.i="img";Z.__img.m=!0;Z.__img.priorityOverride=0})(function(a){var b=gg('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}is(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Sf||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=ig(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=ro("lcl",h?"nv.mwt":"mwt",0),m;m=h?ro("lcl","nv.ids",[]):ro("lcl","ids",[]);if(m.length){var n=no(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=String(Er(g,"rel")||""),t=!!Ta(q.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&Cf(36);var r=V((Er(g,"target")||"_self").substring(1)),u=!0;if(wr(n,Rq(function(){var v;if(v=u&&r){var w;a:if(t){var y;try{y=new MouseEvent(f.type,{bubbles:!0})}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Sf=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(r.location.href=Er(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else wr(n,function(){},l||2E3);return!0}}};cg(c,"click",e,!1);cg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=Er(d,"href"),g=f.indexOf("#"),h=Er(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=ur(f),m=ur(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.i="lcl";Z.__lcl.m=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};qo("lcl","mwt",h,0);e||qo("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};qo("lcl","ids",l,[]);e||qo("lcl","nv.ids",l,[]);Br("lcl")||(a(),Cr("lcl"));N(c.vtp_gtmOnSuccess)})}();



Z.h.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.i="csm";Z.__csm.m=!0;Z.__csm.priorityOverride=0})(function(a){var b=V("document");is(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+Y(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=rr(),g=(e||"").split("&");e="";for(var h=0;h<g.length;h++)if(g[h]){var l=g[h].match(/([^=]*)=?(.*)/);e+="&"+Y(l[1])+"="+Y(l[2])}return Wj("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
Y(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.gj||"")+"&c8="+Y(b.title||"")+e+"&c7="+Y(b.URL)+"&c9="+Y(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),g=0;g<f.length;g++){var h=f[g].indexOf("comScore");0<=h&&(d=unescape(f[g].substring(h+8)))}return d}())));var c=function(){var d=Wj("https://sb","http://b",".scorecardresearch.com/c2/"+Y(a.vtp_clientId)+"/cs.js");T(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():cg(V("self"),"load",c)})}();var Tu={};Tu.macro=function(a){if(Yq.Bd.hasOwnProperty(a))return Yq.Bd[a]},Tu.onHtmlSuccess=Yq.If(!0),Tu.onHtmlFailure=Yq.If(!1);Tu.dataLayer=Sh;Tu.callback=function(a){Jh.hasOwnProperty(a)&&Na(Jh[a])&&Jh[a]();delete Jh[a]};Tu.bootstrap=0;Tu._spx=!1;function Uu(){O[oe.F]=Tu;ib(Kh,Z.h);Vd=Vd||Yq;Wd=ke}
function Vu(){lg.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};Hm();if(O[oe.F]){var a=O.zones;a&&a.unregisterChild(oe.F);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Jd.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Rd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)Qd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},t=0;t<n.length;t++)q[n[t][0]]=Array.prototype.slice.call(n[t],1);Pd.push(q)}Td=Z;Ud=fs;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;eq();se=new re(r);if(void 0!==u)for(var w=["sandboxedScripts"],y=0;y<u.length;y++){var x=u[y].replace(/^_*/,"");Kh[x]=w}hq(v);Uu();Xq();yk=!1;zk=0;if("interactive"==
M.readyState&&!M.createEventObject||"complete"==M.readyState)Bk();else{cg(M,"DOMContentLoaded",Bk);cg(M,"readystatechange",Bk);if(M.createEventObject&&M.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(I){}z&&Ck()}cg(B,"load",Bk)}pp=!1;"complete"===M.readyState?rp():cg(B,"load",rp);a:{
if(!tl)break a;B.setInterval(ul,864E5);}var E=O;E.postscribe||(E.postscribe=B.postscribe||Te);Hh=(new Date).getTime();}}
(function(a){if(!B["__TAGGY_INSTALLED"]){var b=!1;if(M.referrer){var c=ch(M.referrer);b="cct.google"===$g(c,"host")}if(!b){var d=ei("googTaggyReferrer");b=d.length&&d[0].length}b&&(B["__TAGGY_INSTALLED"]=!0,Zf("https://cct.google/taggy/agent.js"))}var f=function(){var m=B["google.tagmanager.debugui2.queue"];m||(m=[],B["google.tagmanager.debugui2.queue"]=m,Zf("https://www.googletagmanager.com/debug/bootstrap"));return m},g="x"===ah(B.location,"query",!1,void 0,"gtm_debug");if(!g&&M.referrer){var h=ch(M.referrer);g="tagassistant.google.com"===$g(h,"host")}if(!g){var l=ei("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);g&&Wf?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:Wf,resume:function(){a()}}}):a()})(Vu);

})()
