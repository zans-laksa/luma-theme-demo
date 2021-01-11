(this["webpackJsonpscandipwa-theme"]=this["webpackJsonpscandipwa-theme"]||[]).push([[4],{399:function(e,t,n){"use strict";var a=n(405);n.d(t,"a",(function(){return a.a}))},405:function(e,t,n){"use strict";(function(e,a,r){var o=n(2),i=n(3),u=n(6),c=n(20),l=n(18),s=n(4),d=n(5),b=n(0),p=n(143),f=(n(44),n(88)),v=(n(416),n(12).checkBEMProps),C=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).expandableContentRef=Object(b.createRef)(),e.toggleExpand=function(){var t=e.props.onClick;t?t():e.setState((function(e){return{isContentExpanded:!e.isContentExpanded}}),(function(){return e.scrollToExpandedContent()}))},e}return Object(u.a)(n,[{key:"__construct",value:function(e){Object(c.a)(Object(l.a)(n.prototype),"__construct",this).call(this,e);var t=this.props.isContentExpanded;this.state={isContentExpanded:t,prevIsContentExpanded:t}}},{key:"scrollToExpandedContent",value:function(){var e=this.state.isContentExpanded,t=this.expandableContentRef&&this.expandableContentRef.current;if(!e||t){var n=t.getBoundingClientRect().top,a=document.body.getBoundingClientRect().top,r=n-a,o=Object(f.b)(),i=o.total,u=o.bottom,c=screen.height>t.offsetHeight+u?t.offsetHeight:screen.height-i,l=r-(screen.height-u-c);-a>=l||window.scrollTo({behavior:"smooth",top:l})}}},{key:"renderButton",value:function(){var e=this.state.isContentExpanded,t=this.props,n=t.heading,r=t.subHeading,i=t.mix;return v(a,"button",{block:"ExpandableContent",elem:"Button",mods:{isContentExpanded:e},mix:Object(o.a)(Object(o.a)({},i),{},{elem:"ExpandableContentButton"}),onClick:this.toggleExpand},v(a,"span",{block:"ExpandableContent",elem:"Heading",mix:Object(o.a)(Object(o.a)({},i),{},{elem:"ExpandableContentHeading"})},"string"===typeof n?v(a,p.a,{content:n,length:"medium"}):n),v(a,"span",{block:"ExpandableContent",elem:"SubHeading",mix:Object(o.a)(Object(o.a)({},i),{},{elem:"ExpandableContentSubHeading"})},r))}},{key:"renderContent",value:function(){var e=this.props,t=e.children,n=e.mix,r={isContentExpanded:this.state.isContentExpanded};return v(a,"div",{block:"ExpandableContent",elem:"Content",mods:r,mix:Object(o.a)(Object(o.a)({},n),{},{elem:"ExpandableContentContent",mods:r})},t)}},{key:"render",value:function(){var e=this.props.mix;return v(a,"article",{block:"ExpandableContent",mix:e,ref:this.expandableContentRef},this.renderButton(),this.renderContent())}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.isContentExpanded;return n!==t.prevIsContentExpanded?{prevIsContentExpanded:n,isContentExpanded:n}:null}}]),n}(e(b.PureComponent));C.defaultProps={subHeading:"",heading:"",isContentExpanded:!1,onClick:null},Object.defineProperty(C,"name",{value:"ExpandableContent"});var h=r(C,"Component/ExpandableContent/Component");t.a=h}).call(this,n(10).default,n(0),n(7).default)},416:function(e,t,n){},428:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=500,r="PRODUCTS",o="PAGE",i="PRODUCTS_AND_PAGE"},459:function(e,t,n){"use strict";(function(e,a,r){var o=n(19),i=n(3),u=n(6),c=n(9),l=n(4),s=n(5),d=n(0),b=n(551),p=n(12).checkBEMProps,f=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).containerFunctions={handleOptionClick:e.handleOptionClick.bind(Object(c.a)(e)),getSubHeading:e.getSubHeading.bind(Object(c.a)(e)),isSelected:e.isSelected.bind(Object(c.a)(e)),getLink:e.getLink.bind(Object(c.a)(e))},e}return Object(u.a)(n,[{key:"getLink",value:function(e){var t=e.attribute_code,n=e.attribute_value,a=this.props.getLink;return a(t,n)}},{key:"getSubHeading",value:function(e){var t=this,n=e.attribute_values,a=e.attribute_code,r=e.attribute_options;return n.reduce((function(e,n){return t.isSelected({attribute_code:a,attribute_value:n})?[].concat(Object(o.a)(e),[r[n].label]):e}),[]).join(", ")}},{key:"handleOptionClick",value:function(e){var t=e.attribute_code,n=e.attribute_value;(0,this.props.updateConfigurableVariant)(t,n)}},{key:"isSelected",value:function(e){var t=e.attribute_code,n=e.attribute_value,a=this.props.parameters,r=(void 0===a?{}:a)[t];return void 0!==r&&(void 0!==r.length?r.includes(n):r===n)}},{key:"render",value:function(){return p(a,b.a,Object.assign({},this.props,this.containerFunctions))}}]),n}(e(d.PureComponent));Object.defineProperty(f,"name",{value:"ProductConfigurableAttributesContainer"});var v=r(f,"Component/ProductConfigurableAttributes/Container");t.a=v}).call(this,n(10).default,n(0),n(7).default)},551:function(e,t,n){"use strict";(function(e,a,r){var o=n(16),i=n(2),u=n(3),c=n(6),l=n(4),s=n(5),d=n(0),b=n(399),p=n(424),f=n(757),v=(n(44),n(142),n(760),n(12).checkBEMProps),C=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"renderConfigurableAttributeValue",value:function(e){var t=this.props,n=t.getIsConfigurableAttributeAvailable,r=t.handleOptionClick,o=t.getLink,i=t.isSelected,u=e.attribute_value;return v(a,p.a,{key:u,attribute:e,isSelected:i(e),isAvailable:n(e),onClick:r,getLink:o})}},{key:"renderSwatch",value:function(e){var t=this,n=e.attribute_values;return v(a,"div",{block:"ProductConfigurableAttributes",elem:"SwatchList"},n.map((function(n){return t.renderConfigurableAttributeValue(Object(i.a)(Object(i.a)({},e),{},{attribute_value:n}))})))}},{key:"renderDropdown",value:function(e){var t=this.props,n=t.updateConfigurableVariant,r=t.getIsConfigurableAttributeAvailable,o=t.parameters;return v(a,f.a,{option:e,updateConfigurableVariant:n,getIsConfigurableAttributeAvailable:r,parameters:o})}},{key:"renderPlaceholders",value:function(){var e=this.props,t=e.numberOfPlaceholders,n=e.isContentExpanded;return t.map((function(e,t){return v(a,b.a,{key:t,mix:{block:"ProductConfigurableAttributes",elem:"Expandable"},isContentExpanded:n},v(a,"div",{key:t,block:"ProductConfigurableAttributes",elem:"SwatchList"},Array.from({length:e},(function(e,t){return v(a,"div",{key:t,block:"ProductConfigurableAttributes",elem:"Placeholder"})}))))}))}},{key:"renderConfigurableAttributes",value:function(){var e=this,t=this.props,n=t.configurable_options,r=t.isContentExpanded,i=t.getSubHeading;return Object.values(n).map((function(t){var n=t.attribute_label,u=t.attribute_code,c=t.attribute_options,l=c?Object.values(c):[{}],s=!!Object(o.a)(l,1)[0].swatch_data;return v(a,b.a,{key:u,heading:n,subHeading:i(t),mix:{block:"ProductConfigurableAttributes",elem:"Expandable"},isContentExpanded:r},s?e.renderSwatch(t):e.renderDropdown(t))}))}},{key:"render",value:function(){var e=this.props,t=e.isReady,n=e.mix;return v(a,"div",{block:"ProductConfigurableAttributes",mods:{isLoading:!t},mix:n},t?this.renderConfigurableAttributes():this.renderPlaceholders())}}]),n}(e(d.PureComponent));C.defaultProps={isReady:!0,mix:{},numberOfPlaceholders:[6,10,7],isContentExpanded:!1,getIsConfigurableAttributeAvailable:function(){return!0}},Object.defineProperty(C,"name",{value:"ProductConfigurableAttributes"});var h=r(C,"Component/ProductConfigurableAttributes/Component");t.a=h}).call(this,n(10).default,n(0),n(7).default)},552:function(e,t,n){"use strict";(function(e,a,r){var o=n(2),i=n(19),u=n(3),c=n(6),l=n(9),s=n(4),d=n(5),b=n(0),p=(n(142),n(758)),f=n(12).checkBEMProps,v=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).containerFunctions={onChange:e.onChange.bind(Object(l.a)(e))},e.containerProps=function(){var t=e.props.option,n=t.attribute_code,a=t.attribute_label;return{selectValue:e._getSelectValue(),selectOptions:e._getSelectOptions(),selectName:n,selectLabel:a}},e._getSelectOptions=function(){var t=e.props,n=t.option,a=n.attribute_options,r=n.attribute_code,u=t.getIsConfigurableAttributeAvailable;return a?Object.values(a).reduce((function(e,t){var n=t.value;return u({attribute_code:r,attribute_value:n})?[].concat(Object(i.a)(e),[Object(o.a)(Object(o.a)({},t),{},{id:n})]):e}),[]):(console.warn('Please make sure "'.concat(r,'" is visible on Storefront.')),[])},e._getSelectValue=function(){var t=e.props.option.attribute_code,n=e.props.parameters;return(void 0===n?{}:n)[t]},e}return Object(c.a)(n,[{key:"onChange",value:function(e){var t=this.props;(0,t.updateConfigurableVariant)(t.option.attribute_code,e)}},{key:"render",value:function(){return f(a,p.a,Object.assign({},this.props,this.containerFunctions,this.containerProps()))}}]),n}(e(b.PureComponent));Object.defineProperty(v,"name",{value:"ProductConfigurableAttributeDropdownContainer"});var C=r(v,"Component/ProductConfigurableAttributeDropdown/Container");t.a=C}).call(this,n(10).default,n(0),n(7).default)},757:function(e,t,n){"use strict";var a=n(552);n.d(t,"a",(function(){return a.a}))},758:function(e,t,n){"use strict";(function(e,a,r,o){var i=n(3),u=n(6),c=n(4),l=n(5),s=n(0),d=n(74),b=(n(759),n(12).checkBEMProps),p=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.selectOptions,n=e.selectValue,o=e.selectName,i=e.selectLabel,u=e.onChange;return b(a,d.a,{id:o,name:o,type:"select",placeholder:r("Choose %s",i.toLowerCase()),mix:{block:"ProductConfigurableAttributeDropdown"},selectOptions:t,value:n,onChange:u})}}]),n}(e(s.PureComponent));p.defaultProps={selectValue:"",selectLabel:"attribute"},Object.defineProperty(p,"name",{value:"ProductConfigurableAttributeDropdown"});var f=o(p,"Component/ProductConfigurableAttributeDropdown/Component");t.a=f}).call(this,n(10).default,n(0),n(27),n(7).default)},759:function(e,t,n){},760:function(e,t,n){}}]);
//# sourceMappingURL=4.4affd523.chunk.js.map