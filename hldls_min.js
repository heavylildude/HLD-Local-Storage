/*
! HLD Library for HTML5 Local Storage v1 | (c) 2018 Heavylildude |
Created by Christo Wahyudi | Free to use and distribute | Please DO NOT Remove This Copyright
*/
function __checkLS(e){localStorage}function __setLS(e,t){return jsonbaru=JSON.stringify(t),localStorage.setItem(e,jsonbaru),e in localStorage}function __deleteLS(e){return localStorage.removeItem(e),!(e in localStorage)}function __getLS(e){return JSON.parse(localStorage.getItem(e))}function __updaterowLS(e,t,a,r){for(var o=JSON.parse(localStorage.getItem(r)),n=0;n<o.length;n++)if(e==o[n].ID){o[n][t]=a;break}localStorage.setItem(r,JSON.stringify(o))}function __delrowLS(e,t){for(var a=JSON.parse(localStorage.getItem(t)),r=0;r<a.length;r++){var o=!1;e==a[r].ID&&(o=!0),o&&a.splice(r,1)}localStorage.setItem(t,JSON.stringify(a))}function __insertrowLS(e,t){var a=JSON.parse(localStorage.getItem(t)),r=a[a.length-1].ID;r+=1,data_newid=[{ID:r}];var o=[];o[0]=Object.assign({},data_newid[0],e[0]),a[a.length]=Object.assign({},o[0]),localStorage.setItem(t,JSON.stringify(a))}