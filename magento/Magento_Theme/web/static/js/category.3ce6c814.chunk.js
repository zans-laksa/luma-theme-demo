(this["webpackJsonpscandipwa-theme"]=this["webpackJsonpscandipwa-theme"]||[]).push([[7,5,6,10,11],{403:function(e,t,n){},412:function(e,t,n){"use strict";n(403);var i=n(402);n.d(t,"a",(function(){return i.a}))},763:function(e,t,n){"use strict";(function(e,i,o,a){var s=n(3),l=n(6),r=n(20),h=n(18),u=n(4),c=n(5),p=n(0),d=(n(44),n(764),n(12).checkBEMProps),b=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(s.a)(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).handleShowAllButtonClick=function(){e.state.isExpanding||e.setState((function(e){return{isOpen:!e.isOpen,isExpanding:!0}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.state.isOpen&&(this.expandableRef.current&&(this.expandableContentHeight=this.expandableRef.current.getBoundingClientRect().height),this.setState({isOpen:!1}))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.state.isExpanding){var n=1e3*window.getComputedStyle(this.expandableRef.current).getPropertyValue("transition-duration").slice(0,-1);setTimeout((function(){return t.setState({isExpanding:!1})}),n)}this.props.children.length!==e.children.length&&this.getExpandableContentHeight()}},{key:"__construct",value:function(e){Object(r.a)(Object(h.a)(n.prototype),"__construct",this).call(this,e),this.ref=Object(p.createRef)();var t=this.props,i=t.showElemCount,o=t.children.length;this.expandableRef=Object(p.createRef)(),this.expandableContentHeight="auto",this.state={isOpen:o>i,isExpanding:!1}}},{key:"getExpandableContentHeight",value:function(){var e=this,t=this.state.isOpen,n=this.props,i=n.showElemCount,o=n.children.length;t&&o<=i?this.setState({isOpen:!1}):(this.expandableContentHeight="auto",this.setState({isOpen:!0},(function(){e.expandableContentHeight=e.expandableRef.current.getBoundingClientRect().height,e.setState({isOpen:!1})})))}},{key:"renderShowAllButton",value:function(){var e=this.props,t=e.showElemCount,n=e.children.length;if(console.log(["showAll-0"]),n<=t)return null;console.log(["showAll-1"]);var a=this.state.isOpen,s=a?{state:"isOpen"}:{},l=a?i("Show less"):"Show more";return d(o,"button",{onClick:this.handleShowAllButtonClick,mix:{block:"Button",mods:{likeLink:!0}},block:"ExpandableContentShowMore",elem:"ShowAllButton",mods:s},l)}},{key:"renderExpandableChildren",value:function(){var e=this.state,t=e.isOpen,n=e.isExpanding,i=this.props,a=i.children,s=i.showElemCount,l=t||n?a.slice(s):null,r={height:t?this.expandableContentHeight:0};return d(o,"div",{ref:this.expandableRef,block:"ExpandableContentShowMore",elem:"ExpandableChildren",style:r},l)}},{key:"renderContent",value:function(){var e=this.props,t=e.children,n=e.showElemCount,i=t.slice(0,n);return d(o,o.Fragment,null,i,this.renderExpandableChildren(),this.renderShowAllButton())}},{key:"render",value:function(){var e=this.props,t=e.children;return e.isMobile?t:d(o,"div",{block:"ExpandableContentShowMore",ref:this.ref},this.renderContent())}}]),n}(e(p.PureComponent));b.defaultProps={showElemCount:3},Object.defineProperty(b,"name",{value:"ExpandableContentShowMore"});var f=a(b,"Component/ExpandableContentShowMore/Component");t.a=f}).call(this,n(10).default,n(27),n(0),n(7).default)}}]);
//# sourceMappingURL=category.3ce6c814.chunk.js.map