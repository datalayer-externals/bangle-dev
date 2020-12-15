(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),o=(a(0),a(135)),c={title:"@banglejs/react",sidebar_label:"@banglejs/react",packageName:"@banglejs/react",id:"react"},i={unversionedId:"api/react",id:"api/react",isDocsHomePage:!1,title:"@banglejs/react",description:"This package provides you with a React API for integrating BangleJS in your React app.",source:"@site/docs/api/react.md",slug:"/api/react",permalink:"/bangle-play/docs/api/react",editUrl:"https://github.com/kepta/bangle-play/edit/master/_bangle-website/docs/docs/api/react.md",version:"current",sidebar_label:"@banglejs/react",sidebar:"docs",previous:{title:"@banglejs/core",permalink:"/bangle-play/docs/api/core"},next:{title:"@banglejs/react-menu",permalink:"/bangle-play/docs/api/react_menu"}},b=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"BangleEditor: React.Element",id:"bangleeditor-reactelement",children:[{value:"Props",id:"props",children:[]}]},{value:"useEditorState: ReactHook",id:"useeditorstate-reacthook",children:[]},{value:"usePluginState: ReactHook",id:"usepluginstate-reacthook",children:[]},{value:"useEditorViewContext: ReactHook",id:"useeditorviewcontext-reacthook",children:[]}],l={rightToc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This package provides you with a React API for integrating BangleJS in your React app."),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"# peer deps\nnpm install @banglejs/core\nnpm install @banglejs/react\n")),Object(o.b)("h3",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import { useEditorState, BangleEditor } from '@banglejs/react';\n\nexport default function Editor() {\n  const editorState = useEditorState({\n    initialValue: 'Hello world!',\n  });\n  return <BangleEditor editorState={editorState} />;\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 ",Object(o.b)("strong",{parentName:"p"},"Do not forget to load the stylesheet located at ",Object(o.b)("em",{parentName:"strong"},"'@banglejs/core/style.css'.")," See ","[StylingGuide]"," for more details on how to customize styling of your editor."))),Object(o.b)("h2",{id:"bangleeditor-reactelement"},"BangleEditor: ",Object(o.b)("a",Object(r.a)({parentName:"h2"},{href:"https://reactjs.org/docs/react-api.html#reactcomponent"}),"React.Element")),Object(o.b)("p",null,"A React component for rendering a Bangle instance."),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"id"),": ?string",Object(o.b)("br",{parentName:"p"}),"\n","The ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id"}),"id")," of the DOM node bangle mounts on. Please make sure this is unique if you are having multiple editors.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"renderNodeViews"),": ?fn({ children, node, view, getPos, decorations, selected, attrs, updateAttrs}) -> ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactcomponent"}),"React.Element"),Object(o.b)("br",{parentName:"p"}),"\n","Allows customization of how a Node is rendered in the DOM. This will be called with a ",Object(o.b)("inlineCode",{parentName:"p"},"node")," and you are expected to return a matching React component for the ",Object(o.b)("inlineCode",{parentName:"p"},"node.type"),". You are also expected to correctly nest the ",Object(o.b)("inlineCode",{parentName:"p"},"children")," props. Note: ",Object(o.b)("inlineCode",{parentName:"p"},"children")," prop is not available for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#model.NodeSpec.atom"}),"atom")," nodes. See ","[ReactCustomRenderingGuide]")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"focusOnInit"),": ?boolean=true",Object(o.b)("br",{parentName:"p"}),"\n","Brings editor to focus when it loads.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"onReady"),": ?fn(editor)",Object(o.b)("br",{parentName:"p"}),"\n","A callback which is called when the editor has mounted.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"children"),": ?",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-api.html#reactcomponent"}),"React.Element"),Object(o.b)("br",{parentName:"p"}),"\n","React components which need the editor context but are not directly editable i.e. do not lie inside the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content"}),"contentEditable")," of the editor. A good example of what can be ",Object(o.b)("inlineCode",{parentName:"p"},"children")," is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/react_menu#floatingmenu-reactelement"}),"FloatingMenu"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"state"),": ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/core/#bangleeditorstate"}),"BangleEditorState"),Object(o.b)("br",{parentName:"p"}),"\n","Pass in the output of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#useeditorstate-reacthook"}),"useEditorState")," hook.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"pmViewOpts"),": ?",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#view.DirectEditorProps"}),"Prosemirror.DirectEditorProps")))),Object(o.b)("h2",{id:"useeditorstate-reacthook"},"useEditorState: ReactHook"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"fn(",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/core/#bangleeditorstate"}),"BangleEditorState"),") -> ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/core/#bangleeditorstate"}),"BangleEditorState"))),Object(o.b)("p",null,"A hook for initialing the editor state."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udca1 This hook will never trigger a re-render, if you want to react to a change in your editor consider using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#usepluginstate-reacthook"}),"usePluginState"),". Read ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://google.com"}),"ReactUsePluginStateGuide"),".")),Object(o.b)("p",null,"\ud83d\udcd6 ",Object(o.b)("strong",{parentName:"p"},"Checkout ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"/docs/examples/react-basic-editor"}),"React example"))),Object(o.b)("h2",{id:"usepluginstate-reacthook"},"usePluginState: ReactHook"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"fn(pluginKey",Object(o.b)("inlineCode",{parentName:"p"},"<T>"),"): T")),Object(o.b)("p",null,"A hook for hooking to a Prosemirror plugin's state. This hook works\xa0",Object(o.b)("strong",{parentName:"p"},"only")," with children of\xa0",Object(o.b)("inlineCode",{parentName:"p"},"<BangleEditor />"),". This ",Object(o.b)("strong",{parentName:"p"},"will re-render")," the React component every-time the plugin's state changes."),Object(o.b)("p",null,"\ud83d\udcd6 ",Object(o.b)("strong",{parentName:"p"},"Checkout ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://google.com"}),"ReactUsePluginStateGuide")," & ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://google.com"}),"PluginsGuide"))),Object(o.b)("h2",{id:"useeditorviewcontext-reacthook"},"useEditorViewContext: ReactHook"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"fn(): ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#view.EditorView"}),"Prosemirror.EditorView"))),Object(o.b)("p",null,"A hook for providing the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#view.EditorView"}),"Prosemirror.EditorView")," to a React component. This context is ",Object(o.b)("strong",{parentName:"p"},"only")," available to children of ",Object(o.b)("inlineCode",{parentName:"p"},"<BangleEditor />"),". It will ",Object(o.b)("strong",{parentName:"p"},"never")," trigger a re-render as the hook maintains the same ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://prosemirror.net/docs/ref/#view.EditorView"}),"Prosemirror.EditorView")," instance throughout the editor's lifecycle."),Object(o.b)("p",null,"\ud83d\udcd6 ",Object(o.b)("strong",{parentName:"p"},"Checkout ",Object(o.b)("a",Object(r.a)({parentName:"strong"},{href:"https://google.com"}),"ReactUsePluginStateGuide"))))}p.isMDXComponent=!0}}]);