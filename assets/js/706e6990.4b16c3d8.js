(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),o=(n(0),n(84)),r={id:"api-definitions",title:"GraphQL API Definitions",sidebar_label:"GraphQL API Definitions"},l={unversionedId:"configuration/api-definitions",id:"configuration/api-definitions",isDocsHomePage:!1,title:"GraphQL API Definitions",description:"When not using Dashboard for configuration, the API Definitions are going to be read from the apis_path specified in",source:"@site/docs/configuration/api-definitions.md",slug:"/configuration/api-definitions",permalink:"/configuration/api-definitions",editUrl:"https://github.com/graphql-portal/graphql-portal/edit/master/website/docs/configuration/api-definitions.md",version:"current",sidebar_label:"GraphQL API Definitions",sidebar:"docs",previous:{title:"Gateway configuration options",permalink:"/configuration/gateway-options"}},c=[{value:"Configuration options",id:"configuration-options",children:[]},{value:"name",id:"name",children:[]},{value:"endpoint",id:"endpoint",children:[]},{value:"source_config_names",id:"source_config_names",children:[]},{value:"schema_polling_interval",id:"schema_polling_interval",children:[]},{value:"schema_updates_through_control_api",id:"schema_updates_through_control_api",children:[]},{value:"enable_ip_filtering",id:"enable_ip_filtering",children:[]},{value:"request_size_limit",id:"request_size_limit",children:[]},{value:"depth_limit",id:"depth_limit",children:[]},{value:"request_complexity_limit",id:"request_complexity_limit",children:[]},{value:"rate_limit",id:"rate_limit",children:[]},{value:"authentication",id:"authentication",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When ",Object(o.b)("em",{parentName:"p"},"not")," using Dashboard for configuration, the API Definitions are going to be read from the ",Object(o.b)("inlineCode",{parentName:"p"},"apis_path")," specified in\n",Object(o.b)("inlineCode",{parentName:"p"},"gateway.json"),"."),Object(o.b)("p",null,"Each file in that directory (either ",Object(o.b)("inlineCode",{parentName:"p"},"json")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yaml"),") represents a GraphQL API, which in turn may have 1 or more data sources."),Object(o.b)("h2",{id:"configuration-options"},"Configuration options"),Object(o.b)("p",null,"The only required options of the file are ",Object(o.b)("inlineCode",{parentName:"p"},"name")," (name of the API) and ",Object(o.b)("inlineCode",{parentName:"p"},"endpoint")," (on which endpoint is it going to\nbe available):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="config/apidefs/my-first-api.json"',title:'"config/apidefs/my-first-api.json"'},'{\n  "name": "My First API",\n  "endpoint": "/my-first-api"\n}\n')),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In fact, a GraphQL API can have 0 data sources but... that doesn't make a lot of sense in practice."))),Object(o.b)("p",null,"In order to add the data-sources to our API we have to specify the ",Object(o.b)("inlineCode",{parentName:"p"},"source_config_names")," option:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="config/apidefs/my-first-api.json"',title:'"config/apidefs/my-first-api.json"'},'{\n  "name": "My First API",\n  "endpoint": "/my-first-api",\n  "source_config_names": ["my-data-source.yaml"]\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Only the file name is required, the path is going to be resolved from the ",Object(o.b)("inlineCode",{parentName:"p"},"sources_path")," option in ",Object(o.b)("inlineCode",{parentName:"p"},"gateway.json"),"."))),Object(o.b)("p",null,"Below is the list of all available configuration options."),Object(o.b)("h2",{id:"name"},"name"),Object(o.b)("p",null,"Name of the API. It is mainly used for logging purposes."),Object(o.b)("h2",{id:"endpoint"},"endpoint"),Object(o.b)("p",null,'A unique endpoint of this API. Should start with "/".'),Object(o.b)("h2",{id:"source_config_names"},"source_config_names"),Object(o.b)("p",null,"Optional. Contains a list of filenames (with ",Object(o.b)("inlineCode",{parentName:"p"},"json")," or ",Object(o.b)("inlineCode",{parentName:"p"},"yaml")," extension) of data-sources which should be included into\nthe API."),Object(o.b)("h2",{id:"schema_polling_interval"},"schema_polling_interval"),Object(o.b)("p",null,"Optional. Type of value \u2013 number. When set to a number bigger than 0, it will rebuild the GraphQL Schema of the API in the specified intervals\n(in milliseconds)."),Object(o.b)("p",null,"This can be used to rebuild (in regular intervals) the federated schema for the underlying microservices. If during the\nrebuild phase at least one of the data-sources returned an error, the schema is not going to be rebuilt, and the old\nschema will continue to be served on the endpoint."),Object(o.b)("h2",{id:"schema_updates_through_control_api"},"schema_updates_through_control_api"),Object(o.b)("p",null,"Optional. Boolean. Defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),". When enabled, allows the rebuilding of the schema via control api."),Object(o.b)("h2",{id:"enable_ip_filtering"},"enable_ip_filtering"),Object(o.b)("p",null,"Optional. Boolean. Defaults to false. When enabled, switches on the IP Filtering middleware which is configured in a\nway of ",Object(o.b)("em",{parentName:"p"},"allow_ips")," and ",Object(o.b)("em",{parentName:"p"},"deny_ips")," lists."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},Object(o.b)("inlineCode",{parentName:"p"},"allow_ips")," list has a priority over the ",Object(o.b)("inlineCode",{parentName:"p"},"deny_ips")," list. It means, that if both lists are specified in the configuration,\nthen only ",Object(o.b)("inlineCode",{parentName:"p"},"allow_ips")," values are going to be used."))),Object(o.b)("p",null,"Examples of configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Allow a single IP"',title:'"Allow',a:!0,single:!0,'IP"':!0},'{\n  "enable_ip_filtering": true,\n  "allow_ips": ["127.0.0.1"]\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Deny a range of IPs"',title:'"Deny',a:!0,range:!0,of:!0,'IPs"':!0},'{\n  "enable_ip_filtering": true,\n  "deny_ips": ["10.0.0.0/8"]\n}\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Specify both allow and deny, allow will always take precedence and deny will be ignored"',title:'"Specify',both:!0,allow:!0,and:!0,"deny,":!0,will:!0,always:!0,take:!0,precedence:!0,deny:!0,be:!0,'ignored"':!0},'{\n  "enable_ip_filtering": true,\n  "allow_ips": ["10.0.0.1"],\n  "deny_ips": ["10.0.0.0/8"]\n}\n')),Object(o.b)("h2",{id:"request_size_limit"},"request_size_limit"),Object(o.b)("p",null,"Optional. This value specifies an HTTP Request size limit for a particular API Definition. Accepts numeric (in bytes) or string\nvalues. When string is used, the following abbreviations are used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"b for bytes"),Object(o.b)("li",{parentName:"ul"},"kb for kilobytes"),Object(o.b)("li",{parentName:"ul"},"mb for megabytes"),Object(o.b)("li",{parentName:"ul"},"gb for gigabytes"),Object(o.b)("li",{parentName:"ul"},"tb for terabytes"),Object(o.b)("li",{parentName:"ul"},"pb for petabytes.")),Object(o.b)("h2",{id:"depth_limit"},"depth_limit"),Object(o.b)("p",null,"Optional. Numeric value that specifies a maximum query depth limit for a given API Definition.\nDefault value is 10."),Object(o.b)("h2",{id:"request_complexity_limit"},"request_complexity_limit"),Object(o.b)("p",null,"Optional. Numeric value that specifies a maximum complexity for a request. Defaults to 1000."),Object(o.b)("h2",{id:"rate_limit"},"rate_limit"),Object(o.b)("p",null,"Optional. An object with two settings: ",Object(o.b)("inlineCode",{parentName:"p"},"complexity"),", which specifies a total request complexity and ",Object(o.b)("inlineCode",{parentName:"p"},"per"),", which stands\nfor a rolling time window in seconds."),Object(o.b)("p",null,"Example of a configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "rate_limit": {\n    "complexity": 10000,\n    "per": 3600\n  }\n}\n')),Object(o.b)("h2",{id:"authentication"},"authentication"),Object(o.b)("p",null,"Optional. An object with two fields:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"auth_header_name")," \u2013 name of the header from which the authentication token is going to be extracted;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"auth_tokens")," \u2013 an array of strings that correspond to token names.")),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Due to security reasons we do not recommend specifying ",Object(o.b)("inlineCode",{parentName:"p"},"auth_tokens")," directly in the configuration file but rather pass\nthem through the environment variables by setting ",Object(o.b)("inlineCode",{parentName:"p"},"auth_tokens")," to ",Object(o.b)("inlineCode",{parentName:"p"},"@@AUTH_TOKENS"),"."))))}p.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=i,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);