(this.webpackJsonptypeahead=this.webpackJsonptypeahead||[]).push([[0],[,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),l=(n(9),n(1)),s=(n(10),n(11),function(e){var t=e.initialInputValue,n=e.showSuggestions,a=e.updateActiveQuery,o=e.updateSelectedSuggestion,i=r.a.createRef(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"typeahead__form",onSubmit:function(e){console.log("submitting ".concat(i.current.value)),e.preventDefault()}},r.a.createElement("input",{className:"typeahead__input",type:"text",value:t,ref:i,"aria-label":"Type text",onChange:function(){a(i.current.value)},onKeyDown:function(e){var t=e.keyCode;38===t?o(-1):40===t&&o(1)},role:"combobox","aria-expanded":n,"aria-controls":"suggestionsList"}),r.a.createElement("button",{className:"typeahead__submit"},"Submit")))}),u=(n(12),n(13),function(e){var t=e.idx,n=e.selectedSuggestion,a=e.setSelectedSuggestion,o=e.text,i=t===n;return r.a.createElement("div",{role:"option",tabIndex:"-1","aria-selected":i,onFocus:function(){a(t)},className:"typeahead__suggestion\n      ".concat(i?"typeahead__suggestion--active":"")},o)}),c=function(e){var t=e.selectedSuggestion,n=e.setSelectedSuggestion,a=e.showSuggestions,o=e.suggestions;return r.a.createElement("div",{id:"suggestionsList",className:"typeahead__suggestions",role:"listbox",hidden:!a,tabIndex:"-1"},o.map((function(e,a){return r.a.createElement(u,{key:"suggestion-".concat(a),selected:a===t,idx:a,text:e,selectedSuggestion:t,setSelectedSuggestion:n})})))},g=["Aberfeldy Township","Altona","Arthurs Creek","Arthurs Seat","Ashwood","Bacchus Marsh Werribee River","Ballan","Beaconsfield Upper","Beenak","Berwick","Blackburn","Blackburn North","Blue Mountain","Box Hill","Braeside","Braeside Park","Broadmeadows","Brooklyn","Bulla","Bulla North","Bulleen","Bundoora","Burnley","Burwood East","Cambarville","Cardinia","Caulfield","Caulfield North","Cement Creek","Christmas Hills","Clarkefield","Clarkefield","Clayton","Clearwater Aqueduct","Coburg","Coldstream","Collingwood","Craigieburn","Craigieburn East","Cranbourne","Dandenong","Dandenong South","Dandenong West","Darraweit","Deer Park","Devilbend Reservoir","Diggers Rest","Dixons Creek","Doncaster","Doncaster East","Drouin West","Durdidwarrah","Eastern G.C. Doncaster","Elsternwick","Eltham","Emerald","Epping","Essendon","Fairfield","Fawkner","Fiskville","Flemington","Footscray","Frankston North","Frankston Pier","Gardiner","Glen Forbes South","Glen Waverley","Graceburn","Graceburn Creek Aqueduct","Greensborough","Greenvale Reservoir","Groom's Hill","Hampton","Hampton Park","Hawthorn","Headworks","Healesville","Heathmont","Heidelberg","Hurstbridge","Iona","Ivanhoe","Kangaroo Ground","Keilor","Keilor North","Kew","Keysborough","Kinglake","Knox","Konagaderra","Kooweerup","Lake Borrie","Lancefield","Lancefield North","Launching Place","Lilydale Lake","Little River","Loch","Longwarry North","Lower Plenty","Lyndhurst","Lysterfield","Maribyrnong","Maroondah Reservoir","Melton Reservoir","Melton Sth Toolern Creek","Mentone","Mernda","Millgrove","Mitcham","Montrose","Mooroolbark","Mornington","Mount Dandenong","Mount Evelyn","Mount View","Mt Blackwood","Mt Bullengarook","Mt Donna Buang","Mt Evelyn Stringybark Creek","Mt Gregory","Mt Hope","Mt Horsfall","Mt Juliet","Mt Macedon","Mt St Gwinear","Mt St Leonard","Mt Waverley","Myrrhee","Narre Warren North","Nayook","Neerim South","Neerim-Elton Rd","Neerim-Neerim Creek","Neerim-Tarago East Branch","Neerim-Tarago West Branch","North Wharf","Northcote","Notting Hill","Nutfield"],d=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(-1),u=Object(l.a)(i,2),d=u[0],h=u[1],m=Object(a.useState)(""),f=Object(l.a)(m,2),b=f[0],p=f[1],v=Object(a.useState)(!1),y=Object(l.a)(v,2),k=y[0],S=y[1];Object(a.useEffect)((function(){n&&n.length||h(-1)}),[n]);var w=b;return n.length&&d>=0&&(w=n[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{initialInputValue:w,setSuggestions:o,showSuggestions:k,updateActiveQuery:function(e){p(e);var t=function(e){if(""===e)return[];var t=new RegExp("^".concat(e),"i");return g.filter((function(e){return null!==e.match(t)}))}(e);o(t),S(t.length),h(-1)},updateSelectedSuggestion:function(e){-1===e?d>=0&&(0===d&&S(!1),h(d-1)):1===e&&d<n.length-1&&(-1===d&&S(!0),h(d+1))}}),r.a.createElement(c,{selectedSuggestion:d,setSelectedSuggestion:h,showSuggestions:k,suggestions:n}))};n(14);var h=function(){return r.a.createElement("section",{className:"typeahead"},r.a.createElement("h1",null,"React Typeahead Example"),r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.70a695ff.chunk.js.map